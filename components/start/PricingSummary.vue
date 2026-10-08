<script setup lang="ts">
import { launchDueToday, launchPlan as plan } from '~/data/pricing'

/** Unambiguous Launch Website pricing: what's charged today, what recurs, and what each covers. */
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const startsAtCheckout = plan.monthly.startsAt === 'checkout'
</script>

<template>
    <div class="rounded-2xl border border-line bg-white">
        <dl class="divide-y divide-line">
            <div class="flex items-baseline justify-between gap-6 p-5">
                <dt>
                    <span class="block font-medium">{{ plan.name }} setup</span>
                    <span v-if="!compact" class="mt-1 block text-sm text-muted">{{ plan.setup.covers }}</span>
                </dt>
                <dd class="shrink-0 text-right">
                    <span class="font-display text-2xl font-semibold tracking-tight">{{
                        formatPrice(plan.setup.amount)
                    }}</span>
                    <span class="block text-xs text-muted">{{ plan.setup.label }}</span>
                </dd>
            </div>
            <div class="flex items-baseline justify-between gap-6 p-5">
                <dt>
                    <span class="block font-medium">{{ plan.monthly.name }}</span>
                    <span v-if="!compact" class="mt-1 block text-sm text-muted">{{ plan.monthly.covers }}</span>
                </dt>
                <dd class="shrink-0 text-right">
                    <span class="font-display text-2xl font-semibold tracking-tight">{{
                        formatPrice(plan.monthly.amount)
                    }}</span>
                    <span class="block text-xs text-muted">{{ plan.monthly.label }}</span>
                </dd>
            </div>
            <div class="flex items-baseline justify-between gap-6 bg-paper/60 p-5">
                <dt class="font-medium">Due today</dt>
                <dd class="font-display text-2xl font-semibold tracking-tight">{{ formatPrice(launchDueToday) }}</dd>
            </div>
        </dl>
        <p class="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
            <template v-if="startsAtCheckout">
                Today’s total includes your {{ formatPrice(plan.setup.amount) }} setup and your first month of
                {{ plan.monthly.name }}. After that, {{ formatPrice(plan.monthly.amount) }} renews monthly until you
                cancel.
            </template>
            <template v-else>
                {{ plan.monthly.name }} ({{ formatPrice(plan.monthly.amount) }}/month) starts after your website
                launches and renews monthly until you cancel.
            </template>
            It covers ongoing care — not unlimited design or development work.
        </p>
    </div>
</template>
