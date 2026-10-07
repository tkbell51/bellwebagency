<script setup lang="ts">
import { siteConfig } from '~/config/site'

usePageSeo({
    title: 'Start a Project',
    description:
        'Start your website with Bell Web Agency. Answer a few guided questions about your business and project, and we’ll take it from there.',
})

const expectations = [
    { title: 'A few short questions', text: 'Plain answers are perfect. You don’t need a finished brief.' },
    { title: 'A personal reply', text: siteConfig.contact.responseTime },
    { title: 'No payment here', text: 'Nothing is charged on this page. We confirm details with you first.' },
]
</script>

<template>
    <section class="container grid gap-12 pb-24 pt-32 sm:pb-32 sm:pt-40 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
        <!-- Mobile order: intro → form → reassurance. Desktop: intro and reassurance on the left, form on the right. -->
        <div class="lg:col-span-5">
            <p class="eyebrow animate-fade-up">Start a project</p>
            <h1 class="mt-6 animate-fade-up text-display-lg [animation-delay:80ms]">
                Start your <span class="accent">website.</span>
            </h1>
            <p class="mt-6 max-w-md animate-fade-up text-lede text-muted [animation-delay:160ms]">
                Tell us about your business and what you need. We’ll recommend the right path and the next step.
            </p>
        </div>

        <div class="lg:col-span-7 lg:row-span-2">
            <StartProjectForm />
        </div>

        <div class="lg:col-span-5">
            <ul class="space-y-6 border-t border-line pt-8">
                <li v-for="item in expectations" :key="item.title" class="flex gap-4">
                    <BaseIcon name="check" class="mt-0.5 size-5 text-copper-deep" />
                    <div>
                        <p class="font-medium">{{ item.title }}</p>
                        <p class="mt-1 text-[0.9375rem] text-muted">{{ item.text }}</p>
                    </div>
                </li>
            </ul>

            <p class="mt-10 text-[0.9375rem] text-muted">
                Prefer email?
                <a :href="`mailto:${siteConfig.contact.email}`" class="text-ink underline underline-offset-4">{{
                    siteConfig.contact.email
                }}</a>
            </p>
        </div>
    </section>
</template>
