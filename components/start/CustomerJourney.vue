<script setup lang="ts">
import { customerJourney } from '~/data/process'

/** The full path from first visit to ongoing care, split at checkout. */
const before = customerJourney.filter((step) => step.stage === 'before')
const after = customerJourney.filter((step) => step.stage === 'after')
</script>

<template>
    <div class="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-4">
            <h3 class="eyebrow">Before you pay</h3>
            <ol class="mt-5 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                <li v-for="(step, index) in before" :key="step.title" class="flex gap-4 bg-paper p-5">
                    <span class="font-display text-sm font-semibold tabular-nums text-copper-deep">{{
                        index + 1
                    }}</span>
                    <div>
                        <p class="font-medium">{{ step.title }}</p>
                        <p class="mt-0.5 text-sm text-muted">{{ step.detail }}</p>
                    </div>
                </li>
            </ol>
            <p class="mt-4 text-sm text-muted">
                No custom design work happens before checkout — you see real client work instead.
            </p>
        </div>
        <div class="lg:col-span-8">
            <h3 class="eyebrow">After checkout</h3>
            <ol class="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                <li v-for="(step, index) in after" :key="step.title" class="flex gap-4 bg-paper p-5">
                    <span class="font-display text-sm font-semibold tabular-nums text-copper-deep">{{
                        before.length + index + 1
                    }}</span>
                    <div>
                        <p class="font-medium">{{ step.title }}</p>
                        <p class="mt-0.5 text-sm text-muted">{{ step.detail }}</p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>
