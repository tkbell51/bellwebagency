import type { CustomPlan, LaunchPlan } from '../types'

/**
 * Pricing lives here and nowhere else. Change an amount once and every pricing summary,
 * FAQ answer, and recommendation picks it up. Keep it in sync with the Stripe products.
 */
export const launchPlan: LaunchPlan = {
    id: 'launch',
    name: 'Launch Website',
    summary:
        'A professionally designed one-page website for businesses that need a polished online presence without the complexity of a traditional agency project.',
    setup: {
        amount: 399,
        currency: 'USD',
        label: 'one-time setup',
        covers: 'The initial website design and development',
    },
    monthly: {
        amount: 49,
        currency: 'USD',
        name: 'Website Care Plan',
        label: 'per month',
        covers: 'Ongoing hosting, maintenance, technical support, and minor website updates',
        // The current Payment Link charges the first month at checkout. To bill from launch instead,
        // add a free trial to the Payment Link, set this to 'launch', and update the Terms.
        startsAt: 'checkout',
    },
    features: [
        'Custom design',
        'One-page website',
        'Responsive mobile design',
        'Contact form',
        'Basic SEO setup',
        'Analytics',
        'SSL',
        'Hosting',
        'Launch',
        'Ongoing technical care',
    ],
    finePrint:
        'The Launch Website is one page, built on a proven structure, with a private preview and a review-and-refine round before launch. Additional pages, custom features, and larger changes are scoped separately.',
    checkout: {
        paymentLinkUrl: 'https://buy.stripe.com/7sY28tctqfzwacw2dj7Re00',
        billingPortalUrl: 'https://billing.stripe.com/p/login/7sY28tctqfzwacw2dj7Re00',
    },
}

export const customPlan: CustomPlan = {
    id: 'custom',
    name: 'Custom Project',
    heading: 'Need something bigger?',
    summary:
        'If you need multiple pages, ecommerce, advanced functionality, integrations, or a more involved strategy, we’ll build a project around what you actually need.',
    highlights: ['Multi-page websites', 'Ecommerce', 'Integrations & custom features', 'Deeper strategy & content'],
    startingAt: 1500,
    priceNote: 'Scoped and quoted per project',
}

/** Total charged at checkout, given when the monthly plan starts */
export const launchDueToday =
    launchPlan.setup.amount + (launchPlan.monthly.startsAt === 'checkout' ? launchPlan.monthly.amount : 0)
