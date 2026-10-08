import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        /**
         * Portfolio projects, served at /work/<file-name>.
         * `status` is required so concept work can never be mistaken for a client project.
         */
        projects: defineCollection({
            type: 'page',
            source: { include: 'portfolio/*.md', prefix: '/work' },
            schema: z.object({
                category: z.string(),
                status: z.enum(['client', 'concept']),
                featured: z.boolean().default(false),
                order: z.number().default(100),
                year: z.number().optional(),
                createdAt: z.date(),
                url: z.string().url().optional(),
                services: z.array(z.string()).default([]),
                image: z.string(),
                desktopImage: z.string(),
                mobileImage: z.string().optional(),
                gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
                testimonial: z
                    .object({
                        quote: z.string(),
                        author: z.string(),
                        role: z.string().optional(),
                        image: z.string().optional(),
                    })
                    .optional(),
            }),
        }),
        /** Legal pages (privacy policy, terms), served at /<file-name>. */
        legal: defineCollection({
            type: 'page',
            source: { include: 'legal/*.md', prefix: '/' },
            schema: z.object({
                updated: z.date(),
            }),
        }),
        /** Private prospect pages linked from outreach emails; not indexed. */
        opportunity: defineCollection({
            type: 'page',
            source: 'opportunity/*.md',
            schema: z.object({
                createdAt: z.date(),
                name: z.string().optional(),
                img: z.string(),
                video: z.string(),
            }),
        }),
    },
})
