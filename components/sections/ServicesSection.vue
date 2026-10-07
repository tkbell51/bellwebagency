<script setup lang="ts">
import { audiences, primaryService, supportingServices } from '~/data/services'
</script>

<template>
    <section id="services" class="section bg-paper-deep/60" aria-labelledby="services-title">
        <div class="container grid gap-16 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-5" data-reveal>
                <p class="eyebrow mb-5">What we do</p>
                <h2 id="services-title" class="text-display-lg">One focus: <span class="accent">websites.</span></h2>
                <p class="mt-6 max-w-md text-lede text-muted">
                    No bloated menu of marketing services. We design, build, and look after websites — and do it
                    properly.
                </p>

                <h3 class="eyebrow mt-14">Built for</h3>
                <ul class="mt-4 flex flex-wrap gap-2">
                    <li
                        v-for="audience in audiences"
                        :key="audience"
                        class="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink/80"
                    >
                        {{ audience }}
                    </li>
                </ul>
            </div>

            <div class="lg:col-span-7">
                <div class="border-b border-line pb-10" data-reveal>
                    <h3 class="text-display-md">{{ primaryService.title }}</h3>
                    <p class="mt-4 max-w-xl text-lede text-muted">{{ primaryService.description }}</p>
                </div>
                <ul>
                    <li
                        v-for="service in supportingServices"
                        :key="service.title"
                        class="grid gap-2 border-b border-line py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
                        data-reveal
                    >
                        <h3 class="text-[1.1875rem] tracking-tight">{{ service.title }}</h3>
                        <p class="text-muted">{{ service.description }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
