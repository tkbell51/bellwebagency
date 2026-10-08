import type { ProcessStep, ProjectLifecycleStatus } from '../types'

/** What happens after a client starts a Launch Website (shown on Home, Process, and /start). */
export const processSteps: ProcessStep[] = [
    {
        number: '01',
        title: 'Tell us about your business',
        description: 'Complete our guided onboarding after checkout.',
        detail: 'A conversational interview asks one question at a time. Plain answers are perfect — you don’t need a finished brief, a sitemap, or polished copy.',
    },
    {
        number: '02',
        title: 'We create your website direction',
        description: 'Your answers become a structured Website Brief.',
        detail: 'The brief covers what your website needs to say, who it’s for, and how it should feel. You review and approve it before any design work starts.',
    },
    {
        number: '03',
        title: 'We design and build',
        description: 'We create your website on a modern, fast platform.',
        detail: 'Design and development happen together, built for speed, accessibility, and search — so what you approve is what goes live.',
    },
    {
        number: '04',
        title: 'You review it',
        description: 'You get a private preview before launch.',
        detail: 'You see the real website, not a static picture of it. Share your feedback and we refine the details within the agreed scope.',
    },
    {
        number: '05',
        title: 'We launch',
        description: 'We handle the technical launch process.',
        detail: 'We connect your domain, secure the site with SSL, and put it live. After launch, ongoing care keeps the technical side running.',
    },
]

/** The full client journey, from first visit to ongoing care. */
export const customerJourney: { title: string; detail: string; stage: 'before' | 'after' }[] = [
    { title: 'Quick project fit', detail: 'A few questions to find the right starting point', stage: 'before' },
    { title: 'Choose your website', detail: 'Launch Website or a custom project', stage: 'before' },
    { title: 'Checkout', detail: 'Secure payment through Stripe', stage: 'before' },
    { title: 'Welcome & onboarding', detail: 'Your project begins', stage: 'after' },
    { title: 'Website Brief', detail: 'A guided interview about your business', stage: 'after' },
    { title: 'Brief approval', detail: 'Nothing is designed until you approve it', stage: 'after' },
    { title: 'Design & build', detail: 'We create your website', stage: 'after' },
    { title: 'Private preview', detail: 'Review your actual website before launch', stage: 'after' },
    { title: 'Revisions', detail: 'We refine it within the agreed scope', stage: 'after' },
    { title: 'Launch', detail: 'Domain, SSL, and go-live handled for you', stage: 'after' },
    { title: 'Ongoing care', detail: 'Hosting, maintenance, and update requests', stage: 'after' },
]

/** Production states for a paid project (for the future client workflow). */
export const projectLifecycle: { status: ProjectLifecycleStatus; label: string }[] = [
    { status: 'PAID', label: 'Payment received' },
    { status: 'ONBOARDING', label: 'Welcome & onboarding' },
    { status: 'BRIEF_IN_PROGRESS', label: 'Website Brief in progress' },
    { status: 'BRIEF_REVIEW', label: 'Brief ready for your review' },
    { status: 'BRIEF_APPROVED', label: 'Brief approved' },
    { status: 'DESIGN', label: 'Design' },
    { status: 'DEVELOPMENT', label: 'Development' },
    { status: 'PREVIEW', label: 'Private preview ready' },
    { status: 'CLIENT_REVIEW', label: 'Your review' },
    { status: 'REVISIONS', label: 'Revisions' },
    { status: 'READY_TO_LAUNCH', label: 'Ready to launch' },
    { status: 'LIVE', label: 'Live' },
]

/** The technical work clients never have to think about */
export const handledByBell: string[] = [
    'Hosting',
    'Domain & DNS setup',
    'SSL certificates',
    'Deployment',
    'Software updates',
    'Performance',
    'Technical maintenance',
    'Update requests',
]
