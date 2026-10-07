<script setup lang="ts">
import { siteConfig } from '~/config/site'

const included = [
    { title: 'Hosting & SSL', text: 'Your website stays online and secure.' },
    { title: 'Monitoring', text: 'We keep an eye on it, so you don’t have to.' },
    { title: 'Maintenance', text: 'Software and technical updates, handled.' },
    { title: 'Support', text: 'Questions and update requests come straight to us.' },
]

const updateFlow = ['Send a request', 'We make the change', 'It’s live']
</script>

<template>
    <section id="care" class="section" aria-labelledby="care-title">
        <div class="container grid gap-16 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-5" data-reveal>
                <p class="eyebrow mb-5">Ongoing care</p>
                <h2 id="care-title" class="text-display-lg">
                    We don’t disappear after <span class="accent">launch.</span>
                </h2>
                <p class="mt-6 text-lede text-muted">
                    Your website stays hosted, monitored, maintained, and supported after it goes live. Need a change?
                    Request it from us — not through a chain of personal texts and emails.
                </p>
                <div class="mt-10">
                    <CTAButton
                        :to="siteConfig.support.requestUpdate.to"
                        :label="siteConfig.support.requestUpdate.label"
                        variant="secondary"
                    />
                </div>
            </div>

            <div class="lg:col-span-6 lg:col-start-7">
                <ul class="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                    <li v-for="item in included" :key="item.title" class="bg-paper p-6 sm:p-7" data-reveal>
                        <h3 class="text-[1.1875rem] tracking-tight">{{ item.title }}</h3>
                        <p class="mt-2 text-[0.9375rem] text-muted">{{ item.text }}</p>
                    </li>
                </ul>

                <div class="mt-6 rounded-2xl border border-line p-6 sm:p-7" data-reveal>
                    <h3 class="eyebrow">How update requests work</h3>
                    <ol class="mt-5 grid gap-4 sm:grid-cols-3">
                        <li v-for="(step, index) in updateFlow" :key="step" class="flex items-center gap-3">
                            <span
                                class="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper"
                            >
                                {{ index + 1 }}
                            </span>
                            <span class="text-[0.9375rem] font-medium">{{ step }}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>
