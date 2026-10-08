import { siteConfig } from '../config/site'
import { budgetOptions, budgetRules, needOptions, projectTypeOptions } from '../data/project-start'

/**
 * POST /api/start-project
 * Saves a Start a Project submission to D1, then emails the studio inbox.
 * Accepts JSON (the site's form) or a regular form post (no JavaScript), which redirects to /start/thanks.
 */

interface Submission {
    name: string
    email: string
    business: string
    website: string
    need: string
    goals: string
    projectType: string
    budget: string
}

const maxLength: Record<keyof Submission, number> = {
    name: 120,
    email: 254,
    business: 160,
    website: 300,
    need: 40,
    goals: 4000,
    projectType: 40,
    budget: 40,
}

const needLabels = new Map(needOptions.map((option) => [option.value, option.label]))
const projectTypeLabels = new Map(projectTypeOptions.map((option) => [option.value, option.label]))
const budgetLabels = new Map(budgetOptions.map((option) => [option.value, option.label]))
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function handleStartProject(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method !== 'POST') {
        return Response.json({ ok: false, error: 'Method not allowed' }, { status: 405, headers: { Allow: 'POST' } })
    }

    const url = new URL(request.url)
    const origin = request.headers.get('Origin')
    if (origin && new URL(origin).host !== url.host) {
        return Response.json({ ok: false, error: 'Forbidden' }, { status: 403 })
    }

    const isJson = (request.headers.get('Content-Type') ?? '').includes('application/json')
    const fields = await readFields(request, isJson)
    if (!fields) return reply(isJson, 400, { ok: false, error: 'Unreadable submission' })

    // Honeypot: bots fill the hidden field. Pretend it worked and drop it.
    if (fields['bot-field']) return success(isJson, url)

    const { submission, errors } = validate(fields)
    if (!submission) return reply(isJson, 422, { ok: false, errors })

    const id = crypto.randomUUID()
    const country = (request.cf as { country?: string } | undefined)?.country ?? null

    try {
        await env.DB.prepare(
            `INSERT INTO project_requests (id, name, email, business, website, need, goals, project_type, budget, country)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)`,
        )
            .bind(
                id,
                submission.name,
                submission.email,
                submission.business,
                submission.website || null,
                submission.need,
                submission.goals,
                submission.projectType,
                submission.budget || null,
                country,
            )
            .run()
    } catch (error) {
        console.error('Saving project request failed', error)
        return reply(isJson, 500, { ok: false, error: 'Could not save your details' })
    }

    // The submission is safely stored; notify without making the visitor wait.
    ctx.waitUntil(notify(env, id, submission))

    return success(isJson, url, id)
}

async function readFields(request: Request, isJson: boolean): Promise<Record<string, string> | null> {
    try {
        const entries: [string, unknown][] = isJson
            ? Object.entries((await request.json()) as Record<string, unknown>)
            : [...(await request.formData()).entries()]
        return Object.fromEntries(entries.map(([key, value]) => [key, typeof value === 'string' ? value.trim() : '']))
    } catch {
        return null
    }
}

function validate(fields: Record<string, string>) {
    const submission: Submission = {
        name: fields.name ?? '',
        email: fields.email ?? '',
        business: fields.business ?? '',
        website: fields.website ?? '',
        need: fields.need ?? '',
        goals: fields.goals ?? '',
        projectType: fields.projectType ?? '',
        budget: fields.budget ?? '',
    }
    const errors: Partial<Record<keyof Submission, string>> = {}

    for (const key of ['name', 'email', 'business', 'need', 'goals', 'projectType'] as const) {
        if (!submission[key]) errors[key] = 'Required'
    }
    for (const [key, limit] of Object.entries(maxLength) as [keyof Submission, number][]) {
        if (submission[key].length > limit) errors[key] = `Must be ${limit} characters or fewer`
    }
    if (submission.email && !emailPattern.test(submission.email)) errors.email = 'Enter a valid email address'
    if (submission.need && !needLabels.has(submission.need)) errors.need = 'Choose one of the options'
    if (submission.projectType && !projectTypeLabels.has(submission.projectType)) {
        errors.projectType = 'Choose one of the options'
    }

    // Budget is only asked for some project types (see budgetRules); ignore it everywhere else
    const budgetRule = budgetRules[submission.projectType]
    if (!budgetRule) submission.budget = ''
    else if (budgetRule.required && !submission.budget) errors.budget = 'Required'
    else if (submission.budget && !budgetLabels.has(submission.budget)) errors.budget = 'Choose one of the options'

    return Object.keys(errors).length ? { submission: null, errors } : { submission, errors: null }
}

async function notify(env: Env, id: string, submission: Submission) {
    const projectType = projectTypeLabels.get(submission.projectType) ?? submission.projectType
    // Strip line breaks so visitor input can't alter email headers
    const subject = `New project: ${submission.business} — ${projectType}`.replace(/[\r\n]+/g, ' ')

    const text = [
        `New Start a Project submission (${id})`,
        '',
        `Name:          ${submission.name}`,
        `Email:         ${submission.email}`,
        `Business:      ${submission.business}`,
        `Website:       ${submission.website || '—'}`,
        `Needs:         ${needLabels.get(submission.need) ?? submission.need}`,
        `Project type:  ${projectType}`,
        ...(submission.budget ? [`Budget:        ${budgetLabels.get(submission.budget) ?? submission.budget}`] : []),
        '',
        'What they hope the website accomplishes:',
        submission.goals,
        '',
        'Reply to this email to respond directly.',
    ].join('\n')

    try {
        await env.EMAIL.send({ to: env.NOTIFY_TO, from: env.NOTIFY_FROM, replyTo: submission.email, subject, text })
        await setEmailStatus(env, id, 'sent')
    } catch (error) {
        console.error('Project request email failed', id, error)
        await setEmailStatus(env, id, 'failed')
    }
}

async function setEmailStatus(env: Env, id: string, status: 'sent' | 'failed') {
    try {
        await env.DB.prepare('UPDATE project_requests SET email_status = ?1 WHERE id = ?2').bind(status, id).run()
    } catch (error) {
        console.error('Updating email status failed', id, error)
    }
}

function success(isJson: boolean, url: URL, id?: string) {
    return isJson ? Response.json({ ok: true, id }) : Response.redirect(new URL('/start/thanks', url).toString(), 303)
}

function reply(isJson: boolean, status: number, body: Record<string, unknown>) {
    if (isJson) return Response.json(body, { status })
    return new Response(
        `<!doctype html><title>Something went wrong</title><p>We couldn’t accept that submission. Please go back and check the form, or email ${siteConfig.contact.email}.</p>`,
        { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
    )
}
