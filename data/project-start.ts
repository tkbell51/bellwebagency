import type { ChoiceOption, ProductPath } from '../types'

/** Handled by the Cloudflare Worker in worker/start-project.ts, which validates against the options below. */
export const projectFormEndpoint = '/api/start-project'

/**
 * Cloudflare Turnstile bot check on the project-fit flow. The Worker verifies each token with
 * siteverify (secret: TURNSTILE_SECRET) and requires this action and a hostname from TURNSTILE_HOSTNAMES.
 */
export const turnstile = {
    siteKey: '0x4AAAAAAFRZqkkohsAMyio0',
    action: 'start_project',
} as const

/*
 * Quick Project Fit — the short, pre-purchase questionnaire. It only decides whether the Launch Website
 * fits. Detailed content (services, testimonials, brand) belongs in the post-purchase Website Brief.
 */

export const lookingForOptions: ChoiceOption[] = [
    { value: 'new-website', label: 'A new website' },
    { value: 'redesign', label: 'A website redesign' },
    { value: 'landing-page', label: 'A landing page' },
    { value: 'custom', label: 'Something more custom' },
]

export const scopeOptions: ChoiceOption[] = [
    { value: 'one-page', label: 'A one-page website' },
    { value: 'multiple-pages', label: 'Multiple pages' },
    { value: 'ecommerce', label: 'Ecommerce' },
    { value: 'not-sure', label: 'Not sure' },
]

/** Answers that point to a custom project rather than the Launch Website */
const customSignals = { lookingFor: ['custom'], scope: ['multiple-pages', 'ecommerce'] }

export function recommendPath(answers: { lookingFor: string; scope: string }): ProductPath {
    return customSignals.lookingFor.includes(answers.lookingFor) || customSignals.scope.includes(answers.scope)
        ? 'custom'
        : 'launch'
}

/** Optional budget, asked only on the custom path. */
export const budgetOptions: ChoiceOption[] = [
    { value: 'under-2k', label: 'Under $2,000' },
    { value: '2k-5k', label: '$2,000–$5,000' },
    { value: '5k-10k', label: '$5,000–$10,000' },
    { value: '10k-plus', label: '$10,000+' },
    { value: 'not-sure', label: 'Not sure yet' },
]

export const pathLabels: Record<ProductPath, string> = {
    launch: 'Launch Website',
    custom: 'Custom project',
}

/** What happens after a custom inquiry is sent */
export const customNextSteps = [
    'We review your answers and your current website, if you have one.',
    'We reply with questions or a recommended scope.',
    'Once the scope is clear, we send a proposal for your project.',
]
