<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { launchPlan } from '~/data/pricing'
import type { Project } from '~/types'

defineProps<{ projects: Project[] }>()
</script>

<template>
    <section class="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-44" aria-labelledby="hero-title">
        <div class="container grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
            <div class="lg:col-span-6">
                <p class="eyebrow animate-fade-up">A modern website studio</p>
                <h1 id="hero-title" class="mt-6 text-display-xl">
                    Websites worth <span class="accent">noticing.</span>
                </h1>
                <p class="mt-8 max-w-[34rem] text-lede text-muted">
                    Bell Web Agency designs, builds, and looks after modern websites for businesses that are ready to
                    look as good online as they do in real life — without the agency timeline or complexity.
                </p>
                <div class="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
                    <CTAButton :to="siteConfig.cta.primary.to" :label="siteConfig.cta.primary.label" size="lg" />
                    <CTAButton
                        :to="siteConfig.cta.secondary.to"
                        :label="siteConfig.cta.secondary.label"
                        variant="secondary"
                        size="lg"
                        :arrow="false"
                    />
                </div>
                <p class="mt-8 animate-fade-up text-[0.9375rem] text-muted [animation-delay:320ms]">
                    One-page websites from
                    <strong class="font-semibold text-ink">{{ formatPrice(launchPlan.setup.amount) }}</strong>
                    + {{ formatPrice(launchPlan.monthly.amount) }}/month.
                    <NuxtLink
                        to="/#pricing"
                        class="ml-1 underline decoration-ink/25 underline-offset-4 hover:decoration-copper-deep"
                    >
                        See what’s included
                    </NuxtLink>
                </p>
            </div>

            <div v-if="projects.length" class="relative lg:col-span-6 lg:pl-6">
                <div class="relative animate-fade-up [animation-delay:200ms]">
                    <BrowserFrame
                        :src="projects[0].image"
                        :alt="`The ${projects[0].title} homepage, designed and built by Bell Web Agency`"
                        :address="projects[0].url"
                        aspect="16 / 9"
                        sizes="sm:100vw lg:600px"
                        eager
                    />
                    <div v-if="projects[1]" class="absolute -bottom-16 -left-8 hidden w-[40%] sm:block xl:-left-14">
                        <BrowserFrame
                            :src="projects[1].desktopImage"
                            :alt="`The full ${projects[1].title} website, designed by Bell Web Agency`"
                            mode="auto"
                            aspect="4 / 4.2"
                            sizes="300px"
                            :duration="30"
                        />
                    </div>
                </div>
                <p class="mt-6 text-right text-sm text-muted sm:mt-16">
                    Real client work:
                    <template v-for="(project, index) in projects.slice(0, 2)" :key="project.slug">
                        <NuxtLink
                            :to="project.path"
                            class="underline decoration-ink/20 underline-offset-4 hover:text-ink"
                        >
                            {{ project.title }}</NuxtLink
                        ><span v-if="index === 0 && projects[1]"> and </span>
                    </template>
                </p>
            </div>
        </div>
    </section>
</template>
