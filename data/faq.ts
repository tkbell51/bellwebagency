import type { FaqItem } from '../types'
import { formatPrice } from '../utils/format'
import { launchPlan } from './pricing'

export const faqs: FaqItem[] = [
    {
        question: `What’s included in the ${formatPrice(launchPlan.setup.amount)} Launch Website?`,
        answer: `A custom-designed, mobile-first, one-page website with a contact form, basic SEO, social links, analytics, and SSL — set up on our hosting platform and launched on your domain. The ${formatPrice(launchPlan.monthly.amount)}/month plan then covers hosting, maintenance, and basic support.`,
    },
    {
        question: `What does the ${formatPrice(launchPlan.monthly.amount)}/month cover?`,
        answer: 'The ongoing technical side of your website: hosting, SSL, technical maintenance, and basic support. We keep the website running so it’s never something you have to manage.',
    },
    {
        question: 'What if I need more than one page?',
        answer: 'That’s a custom project. Multi-page websites, ecommerce, integrations, and deeper strategy work are scoped and quoted separately. Tell us what you need and we’ll recommend the right fit.',
    },
    {
        question: 'I don’t know what to write. Can you still help?',
        answer: 'Yes — that’s what our onboarding is for. You answer guided questions about your business in plain language, and we turn your answers into the structure and content your website needs.',
    },
    {
        question: 'Do I need to deal with hosting, domains, or anything technical?',
        answer: 'No. We handle hosting, domain setup, SSL, and deployment. You won’t need to learn any of the tools behind your website.',
    },
    {
        question: 'How do I request changes after launch?',
        answer: 'Send us an update request, so everything lives in one place instead of getting lost in texts and emails. Basic support is part of your monthly plan; larger changes are scoped before any work begins.',
    },
    {
        question: 'Can you redesign my existing website?',
        answer: 'Yes. Redesigns are one of the most common projects we take on. Start a project, share your current website, and tell us what isn’t working.',
    },
]
