<script setup lang="ts">
import { siteConfig } from '~/config/site'

// Fallback confirmation for submissions made without JavaScript.
usePageSeo({ title: 'Thank you', noindex: true })
</script>

<template>
    <section class="container flex min-h-[70vh] flex-col justify-center pb-24 pt-40">
        <p class="eyebrow">Submitted</p>
        <h1 class="mt-6 max-w-3xl text-display-lg">Thanks — we’ve got your <span class="accent">project.</span></h1>
        <p class="mt-6 max-w-prose text-lede text-muted">
            We’ll review what you’ve shared and reply with questions or a recommended next step.
            {{ siteConfig.contact.responseTime }}
        </p>
        <div class="mt-10">
            <CTAButton to="/work" label="Browse our work" variant="secondary" />
        </div>
    </section>
</template>
