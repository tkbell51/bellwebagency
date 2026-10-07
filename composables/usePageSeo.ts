import { siteConfig } from '~/config/site'

interface PageSeoOptions {
    /** Page title without the site name; omit on the home page */
    title?: string
    description?: string
    image?: string
    imageAlt?: string
    type?: 'website' | 'article'
    noindex?: boolean
}

const absolute = (path: string) => (path.startsWith('http') ? path : `${siteConfig.url}${path}`)

/** Title, description, canonical URL, Open Graph, and X/Twitter tags for a page. */
export function usePageSeo(options: PageSeoOptions = {}) {
    const route = useRoute()
    const path = route.path !== '/' ? route.path.replace(/\/$/, '') : ''
    const url = `${siteConfig.url}${path}`
    const title = options.title ? `${options.title} | ${siteConfig.name}` : siteConfig.defaultTitle
    const description = options.description ?? siteConfig.description
    const image = absolute(options.image ?? siteConfig.ogImage)
    const imageAlt = options.imageAlt ?? `${siteConfig.name} — websites worth noticing`

    useSeoMeta({
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogUrl: url,
        ogType: options.type ?? 'website',
        ogImage: image,
        ogImageAlt: imageAlt,
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: image,
        twitterImageAlt: imageAlt,
        robots: options.noindex ? 'noindex, nofollow' : 'index, follow',
    })

    useHead({ link: [{ rel: 'canonical', href: url }] })
}
