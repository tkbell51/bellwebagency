<script setup lang="ts">
const { data: page } = await useAsyncData('legal:privacy', () => queryCollection('legal').path('/privacy').first())

if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const updated = new Date(page.value.updated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // Dates are stored without a time, so format in UTC to avoid shifting the day
    timeZone: 'UTC',
})

usePageSeo({ title: page.value.title, description: page.value.description })
</script>

<template>
    <article v-if="page" class="container pb-24 pt-36 sm:pb-32 sm:pt-44">
        <header class="max-w-3xl">
            <p class="eyebrow">Legal</p>
            <h1 class="mt-6 text-display-lg">{{ page.title }}</h1>
            <p class="mt-6 text-muted">Last updated {{ updated }}</p>
        </header>
        <div class="prose-bell prose-legal mt-14 max-w-prose">
            <ContentRenderer :value="page" />
        </div>
    </article>
</template>
