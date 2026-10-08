import type { FaqItem } from '../types'
import { formatPrice } from '../utils/format'
import { customPlan, launchDueToday, launchPlan } from './pricing'

const setup = formatPrice(launchPlan.setup.amount)
const monthly = formatPrice(launchPlan.monthly.amount)
const care = launchPlan.monthly.name

export const faqs: FaqItem[] = [
    {
        question: `What’s included in the ${setup} Launch Website?`,
        answer: `A custom-designed, mobile-first, one-page website with a contact form, basic SEO setup, analytics, and SSL — hosted on our platform and launched on your domain. ${care} (${monthly}/month) then covers hosting, maintenance, technical support, and minor updates.`,
    },
    {
        question: 'Do I get to see my website before I pay?',
        answer: 'Before you pay, you see examples of our real client work, exactly what’s included, and the full price. We don’t design a custom website before purchase. After checkout, we learn about your business, build your site, and give you a private preview to review before anything goes live.',
    },
    {
        question: `What does the ${monthly}/month cover, and when does it start?`,
        answer:
            launchPlan.monthly.startsAt === 'checkout'
                ? `${care} covers the ongoing technical side of your website: hosting, SSL, monitoring, maintenance, technical support, and minor updates. Your first month is included in the ${formatPrice(launchDueToday)} charged at checkout, then it renews monthly until you cancel. It isn’t unlimited design or development work.`
                : `${care} covers the ongoing technical side of your website: hosting, SSL, monitoring, maintenance, technical support, and minor updates. It starts after your website launches and renews monthly until you cancel. It isn’t unlimited design or development work.`,
    },
    {
        question: 'What if I need more than one page?',
        answer: `That’s a custom project. Multi-page websites, ecommerce, integrations, and deeper strategy work are scoped and quoted separately${customPlan.startingAt !== null ? `, starting at ${formatPrice(customPlan.startingAt)}` : ''}. Start a project and we’ll recommend the right scope.`,
    },
    {
        question: 'I don’t know what to write. Can you still help?',
        answer: 'Yes — that’s what our onboarding is for. After checkout, a guided interview asks about your business one question at a time, and your answers become a Website Brief you approve before any design work starts.',
    },
    {
        question: 'How many revisions do I get?',
        answer: 'The Launch Website includes a review-and-refine round on your private preview before launch. Changes beyond the agreed scope are quoted before any work begins. We don’t offer unlimited revisions.',
    },
    {
        question: 'Can I cancel?',
        answer: `Yes. ${care} is month-to-month — cancel anytime, effective at the end of your billing period. The setup fee is refundable until work on your website starts. The details are in our Terms & Refund Policy.`,
    },
    {
        question: 'Do I need to deal with hosting, domains, or anything technical?',
        answer: 'No. We handle hosting, domain setup, SSL, and deployment. You won’t need to learn any of the tools behind your website.',
    },
]
