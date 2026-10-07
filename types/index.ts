export interface LinkItem {
    label: string
    to: string
}

export interface SocialLink {
    label: string
    href: string
    icon: 'instagram' | 'facebook'
}

export interface SiteConfig {
    name: string
    domain: string
    url: string
    defaultTitle: string
    description: string
    ogImage: string
    locale: string
    founder: { name: string; role: string; image: string }
    contact: { email: string; responseTime: string }
    social: SocialLink[]
    twitterHandle: string
    cta: { primary: LinkItem; secondary: LinkItem; project: LinkItem }
    support: { requestUpdate: LinkItem }
    nav: LinkItem[]
}

/** `client` work is a real, delivered project. `concept` work is self-initiated and must always be labelled. */
export type ProjectStatus = 'client' | 'concept'

export interface ProjectImage {
    src: string
    alt: string
}

export interface Testimonial {
    quote: string
    author: string
    role?: string
    image?: string
    /** Filled in when the testimonial comes from a project */
    project?: { title: string; slug: string }
}

export interface Project {
    title: string
    slug: string
    path: string
    category: string
    description: string
    status: ProjectStatus
    featured: boolean
    year?: number
    url?: string
    services: string[]
    /** Cover image: a landscape crop of the homepage */
    image: string
    /** Full-length desktop screenshot */
    desktopImage: string
    mobileImage?: string
    gallery: ProjectImage[]
    testimonial?: Testimonial
}

export interface Price {
    amount: number
    currency: 'USD'
}

export interface LaunchPlan {
    id: 'launch'
    name: string
    summary: string
    setup: Price & { label: string }
    monthly: Price & { label: string; covers: string }
    features: string[]
    finePrint: string
    cta: LinkItem
}

export interface CustomPlan {
    id: 'custom'
    name: string
    heading: string
    summary: string
    highlights: string[]
    priceNote: string
    cta: LinkItem
}

export interface ProcessStep {
    number: string
    title: string
    description: string
    /** Longer explanation used on the Process page */
    detail: string
}

export interface Service {
    title: string
    description: string
}

export interface FaqItem {
    question: string
    answer: string
}

export interface ChoiceOption {
    value: string
    label: string
    description?: string
}
