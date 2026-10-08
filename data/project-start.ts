import type { ChoiceOption } from '../types'
import { formatPrice } from '../utils/format'
import { customPlan, launchPlan } from './pricing'

/** Handled by the Cloudflare Worker in worker/start-project.ts, which validates against the options below. */
export const projectFormEndpoint = '/api/start-project'

export const needOptions: ChoiceOption[] = [
    { value: 'new-website', label: 'A new website' },
    { value: 'redesign', label: 'A redesign of my current website' },
    { value: 'landing-page', label: 'A landing page' },
    { value: 'online-store', label: 'An online store' },
    { value: 'update', label: 'An update to my Bell Web Agency website' },
    { value: 'other', label: 'Something else' },
]

export const projectTypeOptions: ChoiceOption[] = [
    {
        value: launchPlan.id,
        label: launchPlan.name,
        description: `${formatPrice(launchPlan.setup.amount)} setup + ${formatPrice(launchPlan.monthly.amount)}/month · one-page website`,
    },
    {
        value: customPlan.id,
        label: customPlan.name,
        description: 'More pages, ecommerce, integrations, or strategy',
    },
    {
        value: 'unsure',
        label: 'Not sure yet',
        description: 'We’ll recommend the right fit',
    },
]

/**
 * What happens after submitting. The Launch Website will eventually become
 * Choose → Pay → Onboard; until checkout exists, Bell Web Agency confirms by email.
 */
export const nextSteps: Record<string, { title: string; steps: string[] }> = {
    launch: {
        title: 'Your Launch Website is underway',
        steps: [
            'We review your answers and confirm the Launch Website is the right fit.',
            'You’ll receive an email to confirm and get started.',
            'Then you’ll begin guided onboarding — the questions that become your website brief.',
        ],
    },
    default: {
        title: 'Thanks — we’ve got your project',
        steps: [
            'We review what you’ve shared and look at your current website, if you have one.',
            'We reply with questions or a recommended next step.',
            'Once the scope is clear, we start with guided onboarding.',
        ],
    },
}
