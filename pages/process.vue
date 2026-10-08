<script setup lang="ts">
import { handledByBell } from '~/data/process'

usePageSeo({
    title: 'Process',
    description:
        'How your website comes together: tell us about your business, set the direction, design and build, review, and launch — with hosting and support handled after.',
})
</script>

<template>
    <div>
        <section class="container pb-16 pt-36 sm:pb-20 sm:pt-44">
            <SectionHeading
                as="h1"
                size="xl"
                eyebrow="Process"
                title="How your website"
                accent="comes together."
                lede="A clear, repeatable process — so you always know what’s happening, what’s next, and what we need from you."
                class="animate-fade-up"
            />
        </section>

        <section class="container pb-24 sm:pb-32" aria-labelledby="journey-title">
            <h2 id="journey-title" class="text-display-md" data-reveal>
                From first click to <span class="accent">launch.</span>
            </h2>
            <p class="mt-4 max-w-prose text-muted" data-reveal>
                A short fit check and clear pricing before you pay. Real design work starts after checkout, and you
                review your actual website before it goes live.
            </p>
            <div class="mt-12" data-reveal>
                <CustomerJourney />
            </div>
        </section>

        <section class="container pb-24 sm:pb-32" aria-labelledby="steps-title">
            <h2 id="steps-title" class="eyebrow mb-8">After checkout, step by step</h2>
            <ProcessSteps variant="detailed" />
        </section>

        <section class="on-dark section bg-ink text-paper" aria-labelledby="handled-title">
            <div class="container grid gap-14 lg:grid-cols-12 lg:gap-10">
                <div class="lg:col-span-6" data-reveal>
                    <p class="eyebrow mb-5">The technical side</p>
                    <h2 id="handled-title" class="text-display-lg">
                        You run the business. <span class="accent text-copper">We handle the website.</span>
                    </h2>
                    <p class="mt-6 max-w-prose text-lede text-muted-dark">
                        You shouldn’t need to understand hosting, DNS, or deployment pipelines to have a great website.
                        That’s our job.
                    </p>
                </div>
                <ul
                    class="grid content-start gap-px self-end overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 lg:col-span-5 lg:col-start-8"
                >
                    <li
                        v-for="item in handledByBell"
                        :key="item"
                        class="flex items-center gap-3 bg-ink p-5"
                        data-reveal
                    >
                        <BaseIcon name="check" class="size-5 text-copper" />
                        {{ item }}
                    </li>
                </ul>
            </div>
        </section>

        <AssistSection />
        <PricingSection />
        <CareSection />
        <FaqSection />
        <FinalCta />
    </div>
</template>
