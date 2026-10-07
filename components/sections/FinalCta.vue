<script setup lang="ts">
import { siteConfig } from '~/config/site'

withDefaults(defineProps<{ title?: string; accent?: string }>(), {
    title: 'Your business deserves a website worth',
    accent: 'noticing.',
})
</script>

<template>
    <section class="on-dark bg-ink pb-24 pt-28 text-paper sm:pb-28 sm:pt-36" aria-labelledby="final-cta-title">
        <div class="container">
            <div class="max-w-4xl" data-reveal>
                <h2 id="final-cta-title" class="text-display-lg">
                    {{ title }} <span class="accent text-copper">{{ accent }}</span>
                </h2>
                <div class="mt-12 flex flex-wrap gap-3">
                    <CTAButton
                        :to="siteConfig.cta.primary.to"
                        :label="siteConfig.cta.primary.label"
                        tone="dark"
                        size="lg"
                    />
                    <CTAButton
                        :to="siteConfig.cta.secondary.to"
                        :label="siteConfig.cta.secondary.label"
                        tone="dark"
                        variant="secondary"
                        size="lg"
                        :arrow="false"
                    />
                </div>
                <p class="mt-8 text-muted-dark">{{ siteConfig.contact.responseTime }}</p>
            </div>
        </div>
    </section>
</template>
