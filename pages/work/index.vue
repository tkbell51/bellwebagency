<script setup lang="ts">
usePageSeo({
    title: 'Work',
    description:
        'Websites designed and built by Bell Web Agency for real businesses — from a counseling practice to a handmade goods store.',
})

const { data: projects } = await useProjects()
</script>

<template>
    <div>
        <section class="container pb-16 pt-36 sm:pt-44">
            <SectionHeading
                as="h1"
                size="xl"
                eyebrow="Work"
                title="Websites we’ve designed"
                accent="and built."
                lede="Client projects listed here are real, delivered work for real businesses. Anything exploratory is clearly labelled as a concept."
                class="animate-fade-up"
            />
        </section>

        <section class="container pb-28 sm:pb-36" aria-label="Projects">
            <ProjectGrid v-if="projects?.length" :projects="projects" heading-level="h2" />
        </section>

        <FinalCta title="Your website could be the next one" accent="here." />
    </div>
</template>
