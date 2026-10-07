import type { ProjectsCollectionItem } from '@nuxt/content'
import type { Project, Testimonial } from '~/types'

function toProject(item: ProjectsCollectionItem): Project {
    return {
        title: item.title,
        slug: item.path.split('/').pop() ?? '',
        path: item.path,
        category: item.category,
        description: item.description,
        status: item.status,
        featured: item.featured ?? false,
        year: item.year,
        url: item.url,
        services: item.services ?? [],
        image: item.image,
        desktopImage: item.desktopImage,
        mobileImage: item.mobileImage,
        gallery: item.gallery ?? [],
        testimonial: item.testimonial,
    }
}

/** All projects, featured first, then by `order`. */
export function useProjects(options: { featured?: boolean } = {}) {
    const key = options.featured ? 'projects-featured' : 'projects'
    return useAsyncData(key, async () => {
        let query = queryCollection('projects').order('order', 'ASC')
        if (options.featured) query = query.where('featured', '=', true)
        const items = await query.all()
        return items.map(toProject)
    })
}

/** A single project plus its neighbours, or `false` when the slug doesn't exist. */
export function useProject(path: string) {
    return useAsyncData(`project:${path}`, async () => {
        const item = await queryCollection('projects').path(path).first()
        if (!item) return false

        const all = await queryCollection('projects').order('order', 'ASC').select('path', 'title').all()
        const index = all.findIndex((p) => p.path === path)
        const next = all[(index + 1) % all.length]

        return {
            project: toProject(item),
            body: item,
            next: next && next.path !== path ? next : null,
        }
    })
}

/** Testimonials come from projects, so each quote stays tied to the real work behind it. */
export function useTestimonials() {
    return useAsyncData('testimonials', async () => {
        const items = await queryCollection('projects').order('order', 'ASC').all()
        return items
            .filter((item) => item.testimonial)
            .map((item): Testimonial => ({
                ...item.testimonial!,
                project: { title: item.title, slug: item.path.split('/').pop() ?? '' },
            }))
    })
}
