import { readdirSync } from 'node:fs'
import { siteConfig } from './config/site'

// Opportunity pages aren't linked anywhere, so the prerender crawler can't find them on its own.
const opportunityRoutes = readdirSync('content/opportunity')
    .filter((file) => file.endsWith('.md'))
    .map((file) => `/opportunity/${file.replace(/\.md$/, '')}`)

// Old /portfolio/<project> URLs, also prerendered as redirect pages as a fallback to public/_redirects.
const legacyPortfolioRoutes = readdirSync('content/portfolio')
    .filter((file) => file.endsWith('.md'))
    .map((file) => `/portfolio/${file.replace(/\.md$/, '')}`)

// Static pages to prerender even when nothing links to them.
const staticPageRoutes: string[] = []

/**
 * Retired URLs from the previous site → their closest new page.
 * Mirrored in public/_redirects so Cloudflare serves real 301s.
 */
const redirects: Record<string, string> = {
    '/portfolio': '/work',
    '/portfolio/**': '/work/**',
    '/contact': '/start',
    '/strategy-session': '/start',
    '/thanks': '/start',
    '/solutions': '/',
    '/solutions/**': '/',
    '/gmb-listing-free-guide': '/',
    '/gmb-videos': '/',
    '/blog': '/',
}

// Concrete retired URLs to prerender as redirect pages (wildcards can't be prerendered)
const legacyRoutes = [
    ...Object.keys(redirects).filter((path) => !path.includes('*')),
    ...['branding', 'maintenance', 'review-management', 'seo', 'web-design'].map((slug) => `/solutions/${slug}`),
    ...legacyPortfolioRoutes,
]

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    // Production builds (`npm run generate` / `deploy` / `cf:dev`) use their own build folder so they
    // never overwrite .nuxt while `nuxt dev` is running.
    buildDir: process.env.NUXT_BUILD_DIR || '.nuxt',

    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: '#f5f2ec' },
                { name: 'format-detection', content: 'telephone=no' },
                { property: 'og:site_name', content: siteConfig.name },
                { property: 'og:locale', content: siteConfig.locale },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: siteConfig.twitterHandle },
                { name: 'facebook-domain-verification', content: 'pncnbproypfjm1sem4r5vd93vgvq13' },
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
                { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    // The Cloudflare Worker in worker/ has its own runtime types and tsconfig
    typescript: {
        tsConfig: { exclude: ['../worker'] },
    },

    // Components are registered by file name (e.g. components/site/SiteHeader.vue → <SiteHeader>)
    components: [{ path: '~/components', pathPrefix: false }],

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@nuxt/eslint',
    ],

    googleFonts: {
        families: {
            Inter: [400, 500, 600],
            'Inter Tight': [500, 600],
            'Instrument Serif': { ital: [400] },
        },
        display: 'swap',
        download: true,
        inject: true,
    },

    content: {
        experimental: { sqliteConnector: 'native' },
    },

    image: {
        format: ['webp'],
        quality: 80,
    },

    site: {
        url: siteConfig.url,
        name: siteConfig.name,
    },
    sitemap: {
        exclude: ['/opportunity/**', '/start/thanks', ...Object.keys(redirects)],
    },

    routeRules: Object.fromEntries(
        Object.entries(redirects).map(([from, to]) => [from, { redirect: { to, statusCode: 301 } }]),
    ),

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/', ...opportunityRoutes, ...legacyRoutes],
            // `/start?plan=…` must not be prerendered over /start; query presets are applied in the browser
            ignore: [(route: string) => route.includes('?')],
        },
    },

    hooks: {
        'pages:extend'(pages) {
            staticPageRoutes.push(...pages.map((page) => page.path).filter((path) => !path.includes(':')))
        },
        'prerender:routes'({ routes }) {
            staticPageRoutes.forEach((path) => routes.add(path))
        },
    },
})
