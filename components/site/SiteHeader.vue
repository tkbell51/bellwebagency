<script setup lang="ts">
import { navCta, siteConfig } from '~/config/site'

const route = useRoute()
const scrolled = ref(false)
const menu = ref<HTMLDialogElement>()
const menuOpen = ref(false)

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

function openMenu() {
    menu.value?.showModal()
    menuOpen.value = true
    document.documentElement.classList.add('overflow-hidden')
}

function closeMenu() {
    if (menu.value?.open) menu.value.close()
}

function onMenuClosed() {
    menuOpen.value = false
    document.documentElement.classList.remove('overflow-hidden')
}

watch(() => route.fullPath, closeMenu)

onMounted(() => {
    const update = () => (scrolled.value = window.scrollY > 8)
    update()
    window.addEventListener('scroll', update, { passive: true })
    onBeforeUnmount(() => window.removeEventListener('scroll', update))
})
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300"
        :class="scrolled ? 'border-line bg-paper/90 backdrop-blur-md' : 'border-transparent bg-paper/0'"
    >
        <div class="container flex h-16 items-center justify-between gap-6 sm:h-20">
            <NuxtLink
                to="/"
                class="flex items-center gap-2.5 font-display text-[1.0625rem] font-semibold tracking-tight"
            >
                <BellMark class="h-7 w-auto" />
                <span>{{ siteConfig.name }}</span>
            </NuxtLink>

            <nav aria-label="Main" class="hidden items-center gap-1 md:flex">
                <NuxtLink
                    v-for="item in siteConfig.nav"
                    :key="item.to"
                    :to="item.to"
                    class="relative rounded-full px-4 py-2 text-[0.9375rem] text-ink/70 transition-colors hover:text-ink"
                    :class="isActive(item.to) && 'text-ink'"
                    :aria-current="isActive(item.to) ? 'page' : undefined"
                >
                    {{ item.label }}
                    <span
                        v-if="isActive(item.to)"
                        class="absolute inset-x-4 -bottom-0.5 h-px bg-copper-deep"
                        aria-hidden="true"
                    />
                </NuxtLink>
                <CTAButton :to="navCta.to" :label="navCta.label" :arrow="false" class="ml-3 !h-11 !px-5" />
            </nav>

            <button
                type="button"
                class="-mr-2 inline-flex h-11 items-center gap-2 rounded-full px-3 text-[0.9375rem] font-medium md:hidden"
                aria-haspopup="dialog"
                :aria-expanded="menuOpen"
                @click="openMenu"
            >
                Menu
                <BaseIcon name="menu" class="size-5" />
            </button>
        </div>

        <dialog
            ref="menu"
            aria-label="Menu"
            class="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-ink/40"
            @close="onMenuClosed"
        >
            <div class="container flex h-full flex-col">
                <div class="flex h-16 items-center justify-between">
                    <NuxtLink to="/" class="flex items-center gap-2.5 font-display font-semibold tracking-tight">
                        <BellMark class="h-7 w-auto" />
                        <span>{{ siteConfig.name }}</span>
                    </NuxtLink>
                    <button
                        type="button"
                        class="-mr-2 inline-flex h-11 items-center gap-2 rounded-full px-3 font-medium"
                        @click="closeMenu"
                    >
                        Close
                        <BaseIcon name="close" class="size-5" />
                    </button>
                </div>

                <nav aria-label="Main" class="mt-10">
                    <ul class="divide-y divide-line border-y border-line">
                        <li v-for="item in siteConfig.nav" :key="item.to">
                            <NuxtLink
                                :to="item.to"
                                class="flex items-center justify-between py-5 font-display text-[2rem] font-semibold tracking-tight"
                                :aria-current="isActive(item.to) ? 'page' : undefined"
                            >
                                {{ item.label }}
                                <BaseIcon name="arrow-right" class="size-6 text-ink/30" />
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="mt-auto pb-10">
                    <CTAButton :to="navCta.to" :label="navCta.label" size="lg" class="w-full" />
                    <p class="mt-6 text-sm text-muted">
                        <a :href="`mailto:${siteConfig.contact.email}`" class="underline underline-offset-4">{{
                            siteConfig.contact.email
                        }}</a>
                    </p>
                </div>
            </div>
        </dialog>
    </header>
</template>
