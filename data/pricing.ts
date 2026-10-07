import type { CustomPlan, LaunchPlan } from '../types'

/**
 * Pricing lives here and nowhere else. Change an amount once and every
 * pricing card, FAQ answer, and form option picks it up.
 */
export const launchPlan: LaunchPlan = {
    id: 'launch',
    name: 'Launch Website',
    summary:
        'A professionally designed one-page website, built and launched for you — with hosting, maintenance, and support handled after it goes live.',
    setup: { amount: 399, currency: 'USD', label: 'one-time setup' },
    monthly: {
        amount: 49,
        currency: 'USD',
        label: 'per month',
        covers: 'Hosting, maintenance, support, and technical care',
    },
    features: [
        'Custom design for your business',
        'Responsive, mobile-first build',
        'One focused page, structured to convert',
        'Contact & lead form',
        'Basic SEO setup',
        'Social links',
        'Analytics',
        'SSL certificate',
        'Hosting on a modern platform',
        'Domain setup & launch',
        'Ongoing technical maintenance',
        'Basic support',
    ],
    finePrint:
        'The Launch Website is one page, built on a proven structure, with a review-and-refine step before launch. Additional pages, custom features, and larger changes are scoped separately.',
    cta: { label: 'Start Your Website', to: '/start?plan=launch' },
}

export const customPlan: CustomPlan = {
    id: 'custom',
    name: 'Custom Project',
    heading: 'Need something bigger?',
    summary:
        'Custom websites and more advanced projects for businesses that need additional pages, functionality, ecommerce, integrations, or a more involved strategy.',
    highlights: ['Multi-page websites', 'Ecommerce', 'Integrations & custom features', 'Deeper strategy & content'],
    priceNote: 'Scoped and quoted per project',
    cta: { label: 'Start a Project', to: '/start?plan=custom' },
}
