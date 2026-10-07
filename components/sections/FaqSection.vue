<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { faqs } from '~/data/faq'
</script>

<template>
    <section id="faq" class="section border-t border-line" aria-labelledby="faq-title">
        <div class="container grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-4" data-reveal>
                <p class="eyebrow mb-5">FAQ</p>
                <h2 id="faq-title" class="text-display-md">Questions, <span class="accent">answered.</span></h2>
                <p class="mt-5 text-muted">
                    Something else on your mind? Email
                    <a
                        :href="`mailto:${siteConfig.contact.email}`"
                        class="text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-copper-deep"
                        >{{ siteConfig.contact.email }}</a
                    >.
                </p>
            </div>

            <div class="lg:col-span-8">
                <details v-for="item in faqs" :key="item.question" class="group border-b border-line first:border-t">
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.1875rem] font-medium tracking-tight [&::-webkit-details-marker]:hidden"
                    >
                        {{ item.question }}
                        <BaseIcon
                            name="plus"
                            class="size-5 text-muted transition-transform duration-300 group-open:rotate-45"
                        />
                    </summary>
                    <p class="max-w-prose pb-7 pr-10 text-muted">{{ item.answer }}</p>
                </details>
            </div>
        </div>
    </section>
</template>
