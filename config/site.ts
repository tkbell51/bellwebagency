import type { LinkItem, SiteConfig } from '../types'

/**
 * Site identity, navigation, and calls to action.
 * Imported by nuxt.config.ts (sitemap, head) and by components, so keep it framework-free.
 */
export const siteConfig: SiteConfig = {
    name: 'Bell Web Agency',
    domain: 'bellwebagency.com',
    url: 'https://bellwebagency.com',
    defaultTitle: 'Bell Web Agency — Modern Website Design & Development',
    description:
        'Bell Web Agency is a modern website studio. We design, build, and look after high-quality websites for small businesses, professionals, creators, and organizations — without the traditional agency timeline or complexity.',
    ogImage: '/og-image.png',
    locale: 'en_US',

    founder: {
        name: 'Tim Bell',
        role: 'Founder, designer & developer',
        image: '/images/people/tim-bell.jpg',
    },

    contact: {
        email: 'info@bellwebagency.com',
        responseTime: 'We reply within 1–2 business days, Monday through Friday (Eastern).',
    },

    social: [
        { label: 'Instagram', href: 'https://www.instagram.com/bellwebagency/', icon: 'instagram' },
        { label: 'Facebook', href: 'https://www.facebook.com/bellwebagency', icon: 'facebook' },
    ],
    twitterHandle: '@bellwebagency',

    cta: {
        primary: { label: 'Start Your Website', to: '/start' },
        secondary: { label: 'View Our Work', to: '/work' },
        project: { label: 'Start a Project', to: '/start' },
    },

    /** Swap `to` for the Bell Web Agency support system once it exists. */
    support: {
        requestUpdate: { label: 'Request an Update', to: '/start?need=update' },
    },

    nav: [
        { label: 'Home', to: '/' },
        { label: 'Work', to: '/work' },
        { label: 'Process', to: '/process' },
        { label: 'About', to: '/about' },
    ],
}

export const navCta: LinkItem = siteConfig.cta.project
