/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 * Elements already on screen are shown immediately so nothing flickers on load.
 */
export default defineNuxtPlugin((nuxtApp) => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue
                entry.target.classList.add('is-revealed')
                observer.unobserve(entry.target)
            }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    const scan = () => {
        const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)')
        for (const element of elements) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('is-revealed')
            } else {
                observer.observe(element)
            }
        }
        document.documentElement.classList.add('reveal-ready')
    }

    nuxtApp.hook('app:suspense:resolve', () => {
        requestAnimationFrame(scan)
    })
    nuxtApp.hook('page:finish', () => {
        requestAnimationFrame(scan)
    })
})
