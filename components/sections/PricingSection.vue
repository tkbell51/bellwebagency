<script setup lang="ts">
import { customPlan } from '~/data/pricing'
</script>

<template>
    <section id="pricing" class="on-dark section bg-ink text-paper" aria-labelledby="pricing-title">
        <div class="container">
            <SectionHeading
                title="Clear pricing."
                accent="No agency math."
                eyebrow="Pricing"
                lede="Start with a professionally designed one-page website, then let us handle the technical side for a simple monthly fee."
                data-reveal
            />

            <div class="mt-16 grid gap-6 lg:grid-cols-12">
                <PricingCard class="lg:col-span-7" data-reveal />

                <article
                    class="flex flex-col rounded-[20px] border border-ink-line p-7 sm:p-10 lg:col-span-5"
                    aria-labelledby="custom-plan-title"
                    data-reveal
                    style="--reveal-delay: 120ms"
                >
                    <h3 id="custom-plan-title" class="text-display-sm">{{ customPlan.heading }}</h3>
                    <p class="mt-4 text-muted-dark">{{ customPlan.summary }}</p>
                    <ul class="mt-8 divide-y divide-ink-line border-y border-ink-line">
                        <li v-for="item in customPlan.highlights" :key="item" class="flex items-center gap-3 py-3.5">
                            <BaseIcon name="plus" class="size-4 text-copper" />
                            {{ item }}
                        </li>
                    </ul>
                    <p class="mt-6 text-sm text-muted-dark">{{ customPlan.priceNote }}</p>
                    <div class="mt-auto pt-10">
                        <CTAButton
                            :to="customPlan.cta.to"
                            :label="customPlan.cta.label"
                            tone="dark"
                            variant="secondary"
                        />
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
