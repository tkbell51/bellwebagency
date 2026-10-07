// Replaces nuxt-facebook-pixel-module (no Nuxt 3 version)
const PIXEL_ID = '1273399919822081'

type Fbq = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void
    queue: unknown[]
    push?: Fbq
    loaded?: boolean
    version?: string
}

declare global {
    interface Window {
        fbq: Fbq
        _fbq: Fbq
    }
}

export default defineNuxtPlugin(() => {
    // Production only: keeps dev traffic out of the pixel, and Facebook's script trips Vue dev-mode warnings
    if (import.meta.dev) return

    const router = useRouter()

    // Load after the page is interactive so tracking never competes with rendering
    onNuxtReady(() => {
        loadPixel()
        window.fbq('init', PIXEL_ID)
        window.fbq('track', 'PageView')

        // Track client-side navigations; the initial load is tracked above
        router.afterEach((to, from) => {
            if (from.matched.length && to.fullPath !== from.fullPath) {
                window.fbq('track', 'PageView')
            }
        })
    })
})

function loadPixel() {
    if (!window.fbq) {
        const fbq: Fbq = function (...args: unknown[]) {
            if (fbq.callMethod) fbq.callMethod(...args)
            else fbq.queue.push(args)
        } as Fbq
        fbq.push = fbq
        fbq.loaded = true
        fbq.version = '2.0'
        fbq.queue = []
        window.fbq = window._fbq = fbq

        const script = document.createElement('script')
        script.async = true
        script.src = 'https://connect.facebook.net/en_US/fbevents.js'
        document.head.appendChild(script)
    }
}
