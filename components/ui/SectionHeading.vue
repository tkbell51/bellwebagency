<script setup lang="ts">
withDefaults(
    defineProps<{
        title: string
        /** Rendered after the title in the italic serif accent */
        accent?: string
        eyebrow?: string
        lede?: string
        as?: 'h1' | 'h2'
        size?: 'xl' | 'lg' | 'md'
        align?: 'left' | 'center'
    }>(),
    { accent: undefined, eyebrow: undefined, lede: undefined, as: 'h2', size: 'lg', align: 'left' },
)
</script>

<template>
    <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
        <p v-if="eyebrow" class="eyebrow mb-5">{{ eyebrow }}</p>
        <component
            :is="as"
            :class="{
                'text-display-xl': size === 'xl',
                'text-display-lg': size === 'lg',
                'text-display-md': size === 'md',
            }"
        >
            {{ title }}
            <template v-if="accent">
                <span class="accent">{{ accent }}</span>
            </template>
        </component>
        <p
            v-if="lede"
            class="mt-6 max-w-prose text-lede text-muted [.on-dark_&]:text-muted-dark"
            :class="align === 'center' && 'mx-auto'"
        >
            {{ lede }}
        </p>
        <slot />
    </div>
</template>
