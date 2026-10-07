<script setup lang="ts">
export type IconName = 'arrow-right' | 'arrow-up-right' | 'check' | 'plus' | 'menu' | 'close' | 'instagram' | 'facebook'

defineProps<{ name: IconName }>()

// Stroke icons on a 24px grid; brand icons are filled.
const strokes: Partial<Record<IconName, string>> = {
    'arrow-right': 'M4.5 12h15m-6-6.5L20 12l-6.5 6.5',
    'arrow-up-right': 'M7 17 17 7M8.5 7H17v8.5',
    check: 'M5 12.5 9.5 17 19 7.5',
    plus: 'M12 5v14M5 12h14',
    menu: 'M4 8.5h16M4 15.5h16',
    close: 'M6 6l12 12M18 6 6 18',
}
</script>

<template>
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="shrink-0">
        <path
            v-if="strokes[name]"
            :d="strokes[name]"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <g v-else-if="name === 'instagram'" fill="none" stroke="currentColor" stroke-width="1.75">
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
        </g>
        <path
            v-else-if="name === 'facebook'"
            fill="currentColor"
            d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z"
        />
    </svg>
</template>
