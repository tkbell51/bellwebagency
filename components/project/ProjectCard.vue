<script setup lang="ts">
import type { Project } from '~/types'

withDefaults(defineProps<{ project: Project; headingLevel?: 'h2' | 'h3' }>(), { headingLevel: 'h3' })
</script>

<template>
    <article class="group relative">
        <div
            class="overflow-hidden rounded-[14px] bg-white shadow-[0_30px_70px_-40px_rgba(18,17,16,0.5)] ring-1 ring-ink/10"
        >
            <div
                class="flex h-8 items-center gap-1.5 border-b border-ink/[0.08] bg-[#f3f1ed] px-3.5"
                aria-hidden="true"
            >
                <span class="size-2 rounded-full bg-ink/15" />
                <span class="size-2 rounded-full bg-ink/15" />
                <span class="size-2 rounded-full bg-ink/15" />
            </div>
            <div class="aspect-[16/10] overflow-hidden">
                <NuxtImg
                    format="webp"
                    :src="project.image"
                    :alt="`The ${project.title} homepage`"
                    sizes="sm:100vw md:50vw lg:620px"
                    loading="lazy"
                    class="size-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                />
            </div>
        </div>

        <div class="mt-6 flex items-start justify-between gap-6">
            <div>
                <component :is="headingLevel" class="text-display-sm">
                    <NuxtLink :to="project.path" class="after:absolute after:inset-0 after:content-['']">
                        {{ project.title }}
                    </NuxtLink>
                </component>
                <p class="mt-1.5 text-muted">{{ project.category }}</p>
            </div>
            <span
                class="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                aria-hidden="true"
            >
                <BaseIcon name="arrow-right" class="size-5" />
            </span>
        </div>

        <div class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <ProjectStatusBadge :status="project.status" />
            <span class="text-sm text-muted">{{ project.services.join(' · ') }}</span>
        </div>
    </article>
</template>
