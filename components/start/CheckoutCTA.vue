<script setup lang="ts">
import { launchDueToday } from '~/data/pricing'

/** The single button that leads to Stripe Checkout, with what to expect before clicking. */
defineProps<{ busy?: boolean; disabled?: boolean }>()
defineEmits<{ start: [] }>()
</script>

<template>
    <div>
        <button
            type="button"
            class="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-ink px-7 text-base font-medium text-paper transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            :disabled="busy || disabled"
            @click="$emit('start')"
        >
            {{ busy ? 'Opening secure checkout…' : 'Start My Website' }}
            <BaseIcon name="arrow-right" class="size-[1.1em] transition-transform group-hover:translate-x-0.5" />
        </button>
        <p class="mt-4 text-sm text-muted">
            Secure checkout by Stripe · {{ formatPrice(launchDueToday) }} due today ·
            <NuxtLink to="/terms#cancellation-and-refunds" class="underline underline-offset-4 hover:text-ink">
                Terms &amp; Refund Policy
            </NuxtLink>
        </p>
    </div>
</template>
