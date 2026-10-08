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
    support: { requestUpdate: LinkItem; manageBilling: LinkItem }
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
    setup: Price & { label: string; covers: string }
    monthly: Price & {
        /** Product name shown on the site; keep it identical to the Stripe product name */
        name: string
        label: string
        covers: string
        /** When the first monthly charge happens. Must match the Stripe Payment Link configuration. */
        startsAt: 'checkout' | 'launch'
    }
    features: string[]
    finePrint: string
    checkout: {
        /** Stripe Payment Link (public URL, not a secret) */
        paymentLinkUrl: string
        /** Stripe customer portal for managing the subscription */
        billingPortalUrl: string
    }
}

export interface CustomPlan {
    id: 'custom'
    name: string
    heading: string
    summary: string
    highlights: string[]
    /** Lowest price for custom work. Set to null to hide the "starting at" line. */
    startingAt: number | null
    priceNote: string
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

/** Where a Launch Website project is in production. Drives the future client workflow. */
export type ProjectLifecycleStatus =
    | 'PAID'
    | 'ONBOARDING'
    | 'BRIEF_IN_PROGRESS'
    | 'BRIEF_REVIEW'
    | 'BRIEF_APPROVED'
    | 'DESIGN'
    | 'DEVELOPMENT'
    | 'PREVIEW'
    | 'CLIENT_REVIEW'
    | 'REVISIONS'
    | 'READY_TO_LAUNCH'
    | 'LIVE'

/**
 * Output of the post-purchase website interview. Anything the client hasn't told us stays empty
 * and is listed in `missingInformation` — never invented.
 */
export interface WebsiteBrief {
    business: { name: string; industry?: string; location?: string; description?: string }
    audience: { primary?: string; problems?: string[]; needs?: string[] }
    positioning: { statement?: string; differentiators?: string[] }
    services: { name: string; description?: string }[]
    brand: { personality?: string[]; tone?: string }
    conversion: { primaryCTA?: string; secondaryCTA?: string }
    proof: { testimonials?: string[]; credentials?: string[] }
    content: { hero?: string; about?: string; faq?: string[] }
    missingInformation?: string[]
}

export type FunnelEvent =
    | 'start_website_clicked'
    | 'project_fit_started'
    | 'project_fit_completed'
    | 'launch_website_selected'
    | 'custom_project_selected'
    | 'checkout_started'
    | 'checkout_completed'
    | 'onboarding_started'
    | 'brief_started'
    | 'brief_approved'
    | 'preview_viewed'

/** The two paths out of the project-fit questionnaire */
export type ProductPath = 'launch' | 'custom'
