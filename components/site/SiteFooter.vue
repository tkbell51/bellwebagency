<script setup lang="ts">
import { siteConfig } from '~/config/site'

const year = new Date().getFullYear()

const columns = [
    { title: 'Studio', links: siteConfig.nav.filter((item) => item.to !== '/') },
    { title: 'Clients', links: [siteConfig.cta.project, siteConfig.support.requestUpdate] },
]
</script>

<template>
    <footer class="on-dark border-t border-ink-line bg-ink text-paper">
        <div class="container py-16 sm:py-20">
            <div class="grid gap-14 lg:grid-cols-12">
                <div class="lg:col-span-5">
                    <NuxtLink
                        to="/"
                        class="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
                    >
                        <BellMark class="h-8 w-auto" />
                        <span>{{ siteConfig.name }}</span>
                    </NuxtLink>
                    <p class="mt-6 max-w-sm text-muted-dark">
                        A modern website studio. We design, build, and look after websites worth noticing.
                    </p>
                </div>

                <nav
                    v-for="column in columns"
                    :key="column.title"
                    :aria-label="`${column.title} links`"
                    class="lg:col-span-2"
                >
                    <h2 class="eyebrow">{{ column.title }}</h2>
                    <ul class="mt-5 space-y-3">
                        <li v-for="link in column.links" :key="link.to">
                            <NuxtLink :to="link.to" class="text-paper/80 transition-colors hover:text-paper">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="lg:col-span-3">
                    <h2 class="eyebrow">Contact</h2>
                    <ul class="mt-5 space-y-3">
                        <li>
                            <a :href="`mailto:${siteConfig.contact.email}`" class="text-paper/80 hover:text-paper">
                                {{ siteConfig.contact.email }}
                            </a>
                        </li>
                    </ul>
                    <ul class="mt-6 flex gap-2">
                        <li v-for="social in siteConfig.social" :key="social.label">
                            <a
                                :href="social.href"
                                target="_blank"
                                rel="noopener"
                                class="inline-flex size-11 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-paper/50 hover:text-paper"
                            >
                                <BaseIcon :name="social.icon" class="size-5" />
                                <span class="sr-only"
                                    >{{ siteConfig.name }} on {{ social.label }} (opens in a new tab)</span
                                >
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="mt-16 flex flex-col gap-3 border-t border-ink-line pt-8 text-sm text-muted-dark sm:flex-row sm:justify-between"
            >
                <p>&copy; {{ year }} {{ siteConfig.name }}. All rights reserved.</p>
                <p>Designed &amp; built by Bell Web Agency.</p>
            </div>
        </div>
    </footer>
</template>
