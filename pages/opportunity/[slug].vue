<script setup lang="ts">
import { siteConfig } from '~/config/site'

// Private prospect pages: a personal Loom walkthrough linked from outreach. Not indexed.
definePageMeta({ layout: 'opportunity' })

const route = useRoute()
const { data: comp } = await useAsyncData(
    route.path,
    async () => (await queryCollection('opportunity').path(route.path).first()) ?? false,
)

if (!comp.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const company = comp.value.title
const recordedOn = new Date(comp.value.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // Dates are stored without a time, so format in UTC to avoid shifting the day
    timeZone: 'UTC',
})
const companyImage = `https://res.cloudinary.com/bwa/image/upload/f_auto,q_auto/bellwebagency/companies/${comp.value.img}`
const scheduleUrl = 'https://bellwebagency.hbportal.co/schedule/608330e0ca6881002a936dee'

usePageSeo({ title: `A video for ${company}`, noindex: true })
</script>

<template>
    <div v-if="comp" class="container pb-24 pt-10 sm:pt-16">
        <div class="grid items-end gap-10 lg:grid-cols-12">
            <div class="lg:col-span-8">
                <p class="eyebrow">A personal video for {{ comp.name ?? company }}</p>
                <h1 class="mt-6 text-display-lg">
                    {{ company }}’s biggest website opportunity — and why it’s
                    <span class="accent">quick to address.</span>
                </h1>
                <p class="mt-6 text-muted">Recorded {{ recordedOn }} by {{ siteConfig.founder.name }}</p>
            </div>
            <img
                :src="companyImage"
                :alt="`${company} website`"
                class="w-full max-w-xs rounded-[14px] shadow-lg ring-1 ring-ink/10 lg:col-span-4 lg:justify-self-end"
                loading="lazy"
            />
        </div>

        <div class="mt-14 grid gap-10 lg:grid-cols-12">
            <div class="lg:col-span-8">
                <div class="aspect-video overflow-hidden rounded-[14px] bg-ink ring-1 ring-ink/10">
                    <iframe
                        :src="`https://www.loom.com/embed/${comp.video}`"
                        :title="`Video walkthrough for ${company}`"
                        class="size-full"
                        allow="fullscreen"
                    />
                </div>
            </div>

            <aside class="rounded-[20px] border border-line bg-white p-7 lg:col-span-4" aria-labelledby="contact-title">
                <h2 id="contact-title" class="text-display-sm">Let’s talk about it.</h2>
                <p class="mt-3 text-muted">
                    Watch the video, then book a quick call — or start your website when you’re ready.
                </p>
                <div class="mt-8 flex flex-col gap-3">
                    <CTAButton :to="scheduleUrl" label="Schedule a 15-minute call" />
                    <CTAButton
                        :to="siteConfig.cta.primary.to"
                        :label="siteConfig.cta.primary.label"
                        variant="secondary"
                        :arrow="false"
                    />
                </div>
                <dl class="mt-8 space-y-1 border-t border-line pt-6 text-[0.9375rem]">
                    <dt class="font-medium">{{ siteConfig.founder.name }}, {{ siteConfig.name }}</dt>
                    <dd>
                        <a :href="`mailto:${siteConfig.contact.email}`" class="underline underline-offset-4">{{
                            siteConfig.contact.email
                        }}</a>
                    </dd>
                </dl>
            </aside>
        </div>
    </div>
</template>
