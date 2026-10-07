<script setup lang="ts">
import type { ProjectStatus } from '~/types'

defineProps<{ status: ProjectStatus }>()
</script>

<template>
    <span
        class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]"
        :class="status === 'client' ? 'bg-ink/[0.06] text-ink/70' : 'bg-copper/15 text-copper-deep'"
    >
        <span
            class="size-1.5 rounded-full"
            :class="status === 'client' ? 'bg-emerald-600' : 'bg-copper-deep'"
            aria-hidden="true"
        />
        {{ status === 'client' ? 'Client project' : 'Concept' }}
    </span>
</template>
