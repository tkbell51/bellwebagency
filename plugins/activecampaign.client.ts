// ActiveCampaign site tracking (account 477257887), carried over from the previous site
const ACCOUNT_ID = '477257887'

type Vgo = ((...args: unknown[]) => void) & { q?: unknown[]; l?: number }

declare global {
    interface Window {
        vgo: Vgo
        visitorGlobalObjectAlias: string
    }
}

export default defineNuxtPlugin(() => {
    if (import.meta.dev) return

    const router = useRouter()

    // Load after the page is interactive so tracking never competes with rendering
    onNuxtReady(() => {
        window.visitorGlobalObjectAlias = 'vgo'
        const vgo: Vgo = function (...args: unknown[]) {
            ;(vgo.q = vgo.q || []).push(args)
        }
        vgo.l = Date.now()
        window.vgo = window.vgo || vgo

        const script = document.createElement('script')
        script.src = 'https://diffuser-cdn.app-us1.com/diffuser/diffuser.js'
        script.async = true
        document.head.appendChild(script)

        window.vgo('setAccount', ACCOUNT_ID)
        window.vgo('setTrackByDefault', true)
        window.vgo('process')

        // Record client-side page changes too
        router.afterEach((to, from) => {
            if (from.matched.length && to.fullPath !== from.fullPath) window.vgo('process')
        })
    })
})
