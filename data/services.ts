import type { Service } from '../types'

export const primaryService: Service = {
    title: 'Website Design & Development',
    description:
        'Strategy, design, development, and launch — handled by one studio, so your website comes together without the usual agency back-and-forth.',
}

export const supportingServices: Service[] = [
    {
        title: 'Website Redesigns',
        description: 'A modern rebuild for websites that no longer reflect the business behind them.',
    },
    {
        title: 'Custom Websites',
        description: 'Multi-page websites with the structure and features your business needs.',
    },
    {
        title: 'Landing Pages',
        description: 'Focused pages for a launch, campaign, event, or offer.',
    },
    {
        title: 'Ecommerce',
        description: 'Online stores that make it simple for customers to browse and buy.',
    },
    {
        title: 'Ongoing Website Care',
        description: 'Hosting, maintenance, updates, and support after your website goes live.',
    },
]

export const audiences: string[] = [
    'Local businesses',
    'Professional services',
    'Coaches & consultants',
    'Creators, artists & musicians',
    'Churches & ministries',
    'Small organizations',
    'New ventures',
]
