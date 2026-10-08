<script setup lang="ts">
import { processSteps } from '~/data/process'

/** `compact`: five-column overview · `detailed`: the Process page · `list`: a short vertical list (/start). */
withDefaults(defineProps<{ variant?: 'compact' | 'detailed' | 'list' }>(), { variant: 'compact' })
</script>

<template>
    <ol v-if="variant === 'compact'" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        <li
            v-for="(step, index) in processSteps"
            :key="step.number"
            class="relative border-t border-ink/20 pt-6"
            data-reveal
            :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
            <span class="absolute -top-[5px] left-0 size-[9px] rounded-full bg-copper" aria-hidden="true" />
            <p class="font-display text-sm font-semibold tabular-nums text-copper-deep">{{ step.number }}</p>
            <h3 class="mt-3 text-[1.1875rem] leading-snug tracking-tight">{{ step.title }}</h3>
            <p class="mt-3 text-[0.9375rem] leading-relaxed text-muted">{{ step.description }}</p>
        </li>
    </ol>

    <ol v-else-if="variant === 'list'" class="space-y-5">
        <li v-for="step in processSteps" :key="step.number" class="flex gap-4">
            <span
                class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/15 font-display text-sm font-semibold tabular-nums"
                aria-hidden="true"
            >
                {{ Number(step.number) }}
            </span>
            <div class="pt-1">
                <h4 class="font-medium leading-snug">
                    <span class="sr-only">Step {{ Number(step.number) }}: </span>{{ step.title }}
                </h4>
                <p class="mt-1 text-[0.9375rem] text-muted">{{ step.description }}</p>
            </div>
        </li>
    </ol>

    <ol v-else class="border-t border-line">
        <li
            v-for="step in processSteps"
            :key="step.number"
            class="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8 lg:py-14"
            data-reveal
        >
            <p
                class="font-display text-display-md font-semibold tabular-nums text-copper-deep md:col-span-2"
                aria-hidden="true"
            >
                {{ step.number }}
            </p>
            <h3 class="text-display-sm md:col-span-4">
                <span class="sr-only">Step {{ step.number }}: </span>{{ step.title }}
            </h3>
            <div class="md:col-span-6">
                <p class="text-lede">{{ step.description }}</p>
                <p class="mt-3 text-muted">{{ step.detail }}</p>
            </div>
        </li>
    </ol>
</template>
