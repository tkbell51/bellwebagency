import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
    {
        number: '01',
        title: 'Tell us about your business',
        description: 'Answer a few questions so we understand your business, customers, goals, and brand.',
        detail: 'Start with a short set of guided questions. Plain answers are perfect — you don’t need a finished brief, a sitemap, or polished copy to begin.',
    },
    {
        number: '02',
        title: 'Create the direction',
        description: 'We turn your information into the structure, messaging, and visual direction for the website.',
        detail: 'Your answers become a clear plan: what the website needs to say, how it should be organized, and how it should look and feel.',
    },
    {
        number: '03',
        title: 'Design & build',
        description: 'We design the experience and build the website using a modern production workflow.',
        detail: 'Design and development happen together, on a modern stack built for speed, accessibility, and search — so what you approve is what goes live.',
    },
    {
        number: '04',
        title: 'Review & refine',
        description: 'You review the website and provide feedback.',
        detail: 'You see the real website, not a static picture of it. Share your feedback in one place and we refine the details before launch.',
    },
    {
        number: '05',
        title: 'Launch',
        description: 'We handle deployment, domain setup, SSL, and launch.',
        detail: 'We connect your domain, secure the site with SSL, and put it live. After launch, we keep the technical side running.',
    },
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
