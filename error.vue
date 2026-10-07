<script setup lang="ts">
import type { NuxtError } from '#app'
import { siteConfig } from '~/config/site'

const props = defineProps<{ error: NuxtError }>()

const notFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
    title: notFound.value ? `Page not found | ${siteConfig.name}` : `Something went wrong | ${siteConfig.name}`,
    robots: 'noindex, nofollow',
})
</script>

<template>
    <NuxtLayout>
        <section class="container flex min-h-[70vh] flex-col justify-center pb-24 pt-40">
            <p class="eyebrow">{{ error.statusCode }}</p>
            <h1 class="mt-6 max-w-3xl text-display-lg">
                <template v-if="notFound">This page isn’t <span class="accent">here.</span></template>
                <template v-else>Something went <span class="accent">wrong.</span></template>
            </h1>
            <p class="mt-6 max-w-prose text-lede text-muted">
                {{
                    notFound
                        ? 'The page may have moved as part of our new website. Everything worth seeing is a click away.'
                        : 'Please try again in a moment.'
                }}
            </p>
            <div class="mt-10 flex flex-wrap gap-3">
                <CTAButton to="/" label="Back to home" @click="clearError({ redirect: '/' })" />
                <CTAButton
                    to="/work"
                    label="View Our Work"
                    variant="secondary"
                    :arrow="false"
                    @click="clearError({ redirect: '/work' })"
                />
            </div>
        </section>
    </NuxtLayout>
</template>
