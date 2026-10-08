import type { FunnelEvent } from '~/types'

type FunnelDetail = { event: FunnelEvent; properties?: Record<string, string | number | boolean>; at: string }

declare global {
    interface Window {
        /** In-page queue an analytics provider can read or replay later */
        __bellFunnel?: FunnelDetail[]
    }
}

/**
 * Funnel measurement without an analytics vendor. Each event is queued on `window.__bellFunnel` and
 * dispatched as a `bell:funnel` DOM event, so a provider (e.g. Cloudflare Zaraz) can be wired to it later
 * without touching the components that emit events.
 */
export function useFunnel() {
    function track(event: FunnelEvent, properties?: FunnelDetail['properties']) {
        if (import.meta.server) return
        const detail: FunnelDetail = { event, properties, at: new Date().toISOString() }
        ;(window.__bellFunnel ??= []).push(detail)
        window.dispatchEvent(new CustomEvent('bell:funnel', { detail }))
        if (import.meta.dev) console.debug('[funnel]', event, properties ?? '')
    }

    return { track }
}
