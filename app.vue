<script setup lang="ts">
import { siteConfig } from '~/config/site'

const organizationId = `${siteConfig.url}/#organization`

useHead({
    script: [
        {
            key: 'structured-data',
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'Organization',
                        '@id': organizationId,
                        name: siteConfig.name,
                        url: siteConfig.url,
                        logo: `${siteConfig.url}/icon-512.png`,
                        description: siteConfig.description,
                        email: siteConfig.contact.email,
                        founder: { '@type': 'Person', name: siteConfig.founder.name },
                        sameAs: siteConfig.social.map((social) => social.href),
                        knowsAbout: [
                            'Website design',
                            'Website development',
                            'Website redesign',
                            'Small business websites',
                        ],
                    },
                    {
                        '@type': 'WebSite',
                        '@id': `${siteConfig.url}/#website`,
                        url: siteConfig.url,
                        name: siteConfig.name,
                        publisher: { '@id': organizationId },
                    },
                ],
            }),
        },
    ],
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
