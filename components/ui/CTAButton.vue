<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        to: string
        label?: string
        variant?: 'primary' | 'secondary' | 'text'
        /** Use `dark` on dark backgrounds */
        tone?: 'light' | 'dark'
        size?: 'md' | 'lg'
        arrow?: boolean
    }>(),
    { label: undefined, variant: 'primary', tone: 'light', size: 'md', arrow: true },
)

const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.to))
const opensNewTab = computed(() => props.to.startsWith('http'))

const classes = computed(() => {
    if (props.variant === 'text') {
        return [
            'inline-flex items-center gap-2 font-medium underline decoration-1 underline-offset-[6px] transition-colors',
            props.tone === 'dark'
                ? 'text-paper decoration-paper/30 hover:decoration-copper'
                : 'text-ink decoration-ink/25 hover:decoration-copper-deep',
        ]
    }

    const base =
        'inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out active:scale-[0.98]'
    const size = props.size === 'lg' ? 'h-14 px-7 text-base' : 'h-12 px-6 text-[0.9375rem]'
    const look = {
        'primary-light': 'bg-ink text-paper hover:bg-ink-soft',
        'primary-dark': 'bg-paper text-ink hover:bg-white',
        'secondary-light': 'border border-ink/20 text-ink hover:border-ink hover:bg-ink/[0.03]',
        'secondary-dark': 'border border-paper/25 text-paper hover:border-paper hover:bg-paper/[0.06]',
    }[`${props.variant}-${props.tone}` as const]

    return [base, size, look]
})
</script>

<template>
    <NuxtLink
        :to="to"
        :external="isExternal"
        :target="opensNewTab ? '_blank' : undefined"
        :rel="opensNewTab ? 'noopener' : undefined"
        :class="classes"
        class="group"
    >
        <span
            ><slot>{{ label }}</slot></span
        >
        <span v-if="opensNewTab" class="sr-only">(opens in a new tab)</span>
        <BaseIcon
            v-if="arrow"
            :name="opensNewTab ? 'arrow-up-right' : 'arrow-right'"
            class="size-[1.1em] transition-transform duration-300 ease-out group-hover:translate-x-0.5"
            :class="opensNewTab && 'group-hover:-translate-y-0.5'"
        />
    </NuxtLink>
</template>
