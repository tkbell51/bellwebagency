<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{ projects: Project[] }>()
</script>

<template>
    <section id="work" class="section" aria-labelledby="work-title">
        <div class="container">
            <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div data-reveal>
                    <p class="eyebrow mb-5">Selected work</p>
                    <h2 id="work-title" class="text-display-lg">
                        Real websites for <span class="accent">real</span> businesses.
                    </h2>
                </div>
                <CTAButton to="/work" label="All work" variant="text" class="shrink-0" />
            </div>
            <div class="mt-16 lg:mt-20">
                <ProjectGrid :projects="projects" />
            </div>
        </div>
    </section>
</template>
