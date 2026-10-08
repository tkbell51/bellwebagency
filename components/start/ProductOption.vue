<script setup lang="ts">
import { customPlan, launchPlan } from '~/data/pricing'
import type { ProductPath } from '~/types'

/** One selectable product in the recommendation (rendered inside ProductComparison's radio group). */
const props = defineProps<{ path: ProductPath; recommended?: boolean; selected?: boolean }>()
defineEmits<{ select: [path: ProductPath] }>()

const isLaunch = computed(() => props.path === 'launch')
const name = computed(() => (isLaunch.value ? launchPlan.name : customPlan.name))
const price = computed(() =>
    isLaunch.value
        ? `${formatPrice(launchPlan.setup.amount)} + ${formatPrice(launchPlan.monthly.amount)}/month`
        : customPlan.startingAt !== null
          ? `Starting at ${formatPrice(customPlan.startingAt)}`
          : customPlan.priceNote,
)
const summary = computed(() =>
    isLaunch.value
        ? 'A polished one-page website, designed and built for you.'
        : 'Multiple pages, ecommerce, integrations, or a deeper strategy.',
)
</script>

<template>
    <label
        class="relative flex cursor-pointer flex-col rounded-2xl border bg-white p-5 transition-colors sm:p-6"
        :class="
            selected
                ? 'border-ink ring-1 ring-ink'
                : 'border-ink/15 hover:border-ink/40 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-copper-deep'
        "
    >
        <input
            type="radio"
            name="product-path"
            :value="path"
            :checked="selected"
            class="sr-only"
            @change="$emit('select', path)"
        />
        <span
            v-if="recommended"
            class="mb-3 self-start rounded-full bg-ink px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-paper"
        >
            Recommended
        </span>
        <span class="font-display text-[1.25rem] font-semibold tracking-tight">{{ name }}</span>
        <span class="mt-2 font-medium">{{ price }}</span>
        <span class="mt-2 text-sm text-muted">{{ summary }}</span>
        <span
            class="mt-4 inline-flex size-5 items-center justify-center self-end rounded-full border"
            :class="selected ? 'border-ink bg-ink text-paper' : 'border-ink/25'"
            aria-hidden="true"
        >
            <BaseIcon v-if="selected" name="check" class="size-3.5" />
        </span>
    </label>
</template>
