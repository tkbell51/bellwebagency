<script setup lang="ts">
import type { Project } from '~/types'

withDefaults(defineProps<{ projects: Project[]; headingLevel?: 'h2' | 'h3' }>(), { headingLevel: 'h3' })
</script>

<template>
    <ul class="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-14">
        <li
            v-for="(project, index) in projects"
            :key="project.slug"
            data-reveal
            :style="{ '--reveal-delay': `${(index % 2) * 120}ms` }"
            :class="index % 2 === 1 && 'md:mt-24'"
        >
            <ProjectCard :project="project" :heading-level="headingLevel" />
        </li>
    </ul>
</template>
