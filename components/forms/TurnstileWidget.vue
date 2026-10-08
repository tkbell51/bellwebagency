<script setup lang="ts">
import { turnstile as turnstileConfig } from '~/data/project-start'

/*
 * Cloudflare Turnstile, rendered explicitly so the widget can be reset after each request:
 * tokens are single-use and the page stays open after a failed attempt.
 * The hidden `cf-turnstile-response` input it creates is what the Worker verifies.
 */
interface TurnstileApi {
    render: (container: HTMLElement, options: Record<string, unknown>) => string
    reset: (widgetId?: string) => void
    remove: (widgetId?: string) => void
}

const token = defineModel<string>({ default: '' })

useHead({
    script: [
        {
            key: 'turnstile',
            src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
            async: true,
            defer: true,
        },
    ],
})

const container = ref<HTMLElement>()
let widgetId: string | undefined

const api = () => (window as unknown as { turnstile?: TurnstileApi }).turnstile

onMounted(async () => {
    for (let attempt = 0; attempt < 100 && !api(); attempt++) {
        await new Promise((resolve) => setTimeout(resolve, 100))
    }
    const turnstile = api()
    if (!turnstile || !container.value) return
    widgetId = turnstile.render(container.value, {
        sitekey: turnstileConfig.siteKey,
        action: turnstileConfig.action,
        appearance: 'interaction-only',
        size: 'flexible',
        theme: 'light',
        callback: (value: string) => (token.value = value),
        'expired-callback': () => (token.value = ''),
        'error-callback': () => {
            token.value = ''
        },
    })
})

onBeforeUnmount(() => {
    if (widgetId !== undefined) api()?.remove(widgetId)
})

/** Get a fresh token before the next attempt */
function reset() {
    token.value = ''
    if (widgetId !== undefined) api()?.reset(widgetId)
}

defineExpose({ reset })
</script>

<template>
    <div ref="container" />
</template>
