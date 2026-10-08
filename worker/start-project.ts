import { siteConfig } from '../config/site'
import { budgetOptions, lookingForOptions, pathLabels, scopeOptions, turnstile } from '../data/project-start'
import type { ProductPath } from '../types'

/**
 * POST /api/start-project
 * Saves a Quick Project Fit submission to D1, then emails the studio inbox. `path` records what the visitor
 * chose: `launch` (they were sent on to Stripe Checkout) or `custom` (a custom-project inquiry).
 * Accepts JSON (the site's form) or a regular form post, which redirects to /start/thanks.
 * Every submission must carry a valid Cloudflare Turnstile token (see verifyTurnstile).
 */

interface Submission {
    name: string
    email: string
    business: string
    website: string
    businessDescription: string
    lookingFor: string
    goals: string
    scope: string
    notes: string
    path: string
    budget: string
}

const maxLength: Record<keyof Submission, number> = {
    name: 120,
    email: 254,
    business: 160,
    website: 300,
    businessDescription: 1000,
    lookingFor: 40,
    goals: 2000,
    scope: 40,
    notes: 2000,
    path: 20,
    budget: 40,
}

const required = ['name', 'email', 'business', 'businessDescription', 'lookingFor', 'goals', 'scope', 'path'] as const

const lookingForLabels = new Map(lookingForOptions.map((option) => [option.value, option.label]))
const scopeLabels = new Map(scopeOptions.map((option) => [option.value, option.label]))
const budgetLabels = new Map(budgetOptions.map((option) => [option.value, option.label]))
const isPath = (value: string): value is ProductPath => Object.hasOwn(pathLabels, value)
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

    // Bot check gates everything below; the existing handler logic is unchanged.
    if (!(await verifyTurnstile(env, fields['cf-turnstile-response'], request))) {
        return reply(isJson, 403, { ok: false, error: 'forbidden' })
    }

    // Honeypot: bots fill the hidden field. Pretend it worked and drop it.
    if (fields['bot-field']) return success(isJson, url)

    const { submission, errors } = validate(fields)
    if (!submission) return reply(isJson, 422, { ok: false, errors })

    const id = crypto.randomUUID()
    const country = (request.cf as { country?: string } | undefined)?.country ?? null

    try {
        await env.DB.prepare(
            `INSERT INTO project_requests
               (id, name, email, business, website, business_description, need, goals, scope, notes, project_type, budget, status, country)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14)`,
        )
            .bind(
                id,
                submission.name,
                submission.email,
                submission.business,
                submission.website || null,
                submission.businessDescription,
                submission.lookingFor,
                submission.goals,
                submission.scope,
                submission.notes || null,
                submission.path,
                submission.budget || null,
                submission.path === 'launch' ? 'checkout_started' : 'inquiry',
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

/** Canonical Turnstile siteverify: requires success, the form's action, and an allowed frontend hostname. */
async function verifyTurnstile(env: Env, token: string | undefined, request: Request): Promise<boolean> {
    const expectedHostnames = new Set(
        (env.TURNSTILE_HOSTNAMES ?? '')
            .split(',')
            .map((hostname) => hostname.trim())
            .filter(Boolean),
    )

    if (
        typeof token !== 'string' ||
        token.length === 0 ||
        token.length > 2048 ||
        expectedHostnames.size === 0 ||
        !env.TURNSTILE_SECRET
    ) {
        return false
    }

    let result: { success?: boolean; action?: string; hostname?: string }
    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            signal: AbortSignal.timeout(10_000),
            body: new URLSearchParams({
                secret: env.TURNSTILE_SECRET,
                response: token,
                remoteip: request.headers.get('CF-Connecting-IP') ?? '',
            }),
        })
        if (!response.ok) throw new Error(`siteverify ${response.status}`)
        result = await response.json()
    } catch {
        return false
    }

    return result.success === true && result.action === turnstile.action && expectedHostnames.has(result.hostname ?? '')
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
        businessDescription: fields.businessDescription ?? '',
        lookingFor: fields.lookingFor ?? '',
        goals: fields.goals ?? '',
        scope: fields.scope ?? '',
        notes: fields.notes ?? '',
        path: fields.path ?? '',
        budget: fields.budget ?? '',
    }
    const errors: Partial<Record<keyof Submission, string>> = {}

    for (const key of required) {
        if (!submission[key]) errors[key] = 'Required'
    }
    for (const [key, limit] of Object.entries(maxLength) as [keyof Submission, number][]) {
        if (submission[key].length > limit) errors[key] = `Must be ${limit} characters or fewer`
    }
    if (submission.email && !emailPattern.test(submission.email)) errors.email = 'Enter a valid email address'
    if (submission.lookingFor && !lookingForLabels.has(submission.lookingFor))
        errors.lookingFor = 'Choose one of the options'
    if (submission.scope && !scopeLabels.has(submission.scope)) errors.scope = 'Choose one of the options'
    if (submission.path && !isPath(submission.path)) errors.path = 'Choose one of the options'

    // Budget is optional and only asked on the custom path; ignore it on the Launch Website path
    if (submission.path !== 'custom') submission.budget = ''
    else if (submission.budget && !budgetLabels.has(submission.budget)) errors.budget = 'Choose one of the options'

    return Object.keys(errors).length ? { submission: null, errors } : { submission, errors: null }
}

async function notify(env: Env, id: string, submission: Submission) {
    const isLaunch = submission.path === 'launch'
    // Strip line breaks so visitor input can't alter email headers
    const subject = (
        isLaunch
            ? `Launch Website checkout started: ${submission.business}`
            : `Custom project inquiry: ${submission.business}`
    ).replace(/[\r\n]+/g, ' ')

    const text = [
        isLaunch
            ? 'They chose the Launch Website and were sent to Stripe Checkout. Payment is not confirmed yet — check Stripe.'
            : 'They asked about a custom project. No payment was taken.',
        `Request ID: ${id} (Stripe client_reference_id)`,
        '',
        `Name:            ${submission.name}`,
        `Email:           ${submission.email}`,
        `Business:        ${submission.business}`,
        `Website:         ${submission.website || '—'}`,
        `Looking for:     ${lookingForLabels.get(submission.lookingFor) ?? submission.lookingFor}`,
        `Scope:           ${scopeLabels.get(submission.scope) ?? submission.scope}`,
        ...(submission.budget ? [`Budget:          ${budgetLabels.get(submission.budget) ?? submission.budget}`] : []),
        '',
        'What the business does:',
        submission.businessDescription,
        '',
        'What they hope the website accomplishes:',
        submission.goals,
        ...(submission.notes ? ['', 'Anything else:', submission.notes] : []),
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
