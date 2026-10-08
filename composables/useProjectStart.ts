import { launchPlan } from '~/data/pricing'
import { projectFormEndpoint } from '~/data/project-start'
import type { ProductPath } from '~/types'

/** Answers from the Quick Project Fit questionnaire */
export interface ProjectFitAnswers {
    name: string
    email: string
    business: string
    website: string
    businessDescription: string
    lookingFor: string
    goals: string
    scope: string
    notes: string
}

export const emptyAnswers = (): ProjectFitAnswers => ({
    name: '',
    email: '',
    business: '',
    website: '',
    businessDescription: '',
    lookingFor: '',
    goals: '',
    scope: '',
    notes: '',
})

/**
 * Sends the project-fit answers to the Worker (saved to D1, emailed to the studio) and, for the Launch
 * Website, hands off to Stripe Checkout. The Worker's request ID travels to Stripe as
 * `client_reference_id`, so a future webhook can match the payment to these answers.
 */
export function useProjectStart() {
    const { track } = useFunnel()

    async function submit(
        answers: ProjectFitAnswers,
        path: ProductPath,
        extra: { budget?: string; turnstileToken: string },
    ): Promise<string> {
        const body = {
            ...answers,
            path,
            budget: path === 'custom' ? (extra.budget ?? '') : '',
            'cf-turnstile-response': extra.turnstileToken,
        }

        if (import.meta.dev) {
            // `nuxt dev` doesn't run the Worker; use `npm run cf:dev` to test real submissions locally.
            console.info('[start-project] dev submission (not sent):', body)
            return 'dev-preview'
        }

        const response = await fetch(projectFormEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(body),
        })
        const result = (await response.json().catch(() => null)) as { ok?: boolean; id?: string } | null
        if (!response.ok || !result?.ok || !result.id) throw new Error(`Submission failed (${response.status})`)
        return result.id
    }

    function checkoutUrl(email: string, requestId: string) {
        const url = new URL(launchPlan.checkout.paymentLinkUrl)
        if (email) url.searchParams.set('prefilled_email', email)
        url.searchParams.set('client_reference_id', requestId)
        return url.toString()
    }

    function goToCheckout(email: string, requestId: string) {
        track('checkout_started', { path: 'launch' })
        window.location.assign(checkoutUrl(email, requestId))
    }

    return { submit, checkoutUrl, goToCheckout }
}
