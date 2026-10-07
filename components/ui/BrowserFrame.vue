<script setup lang="ts">
/**
 * A minimal browser window around a real website screenshot.
 * - `static`: shows the top of the page
 * - `auto`: slowly scrolls the full page (paused on hover, off for reduced motion)
 * - `scroll`: the visitor scrolls the page themselves
 */
const props = withDefaults(
    defineProps<{
        src: string
        alt: string
        address?: string
        mode?: 'static' | 'auto' | 'scroll'
        aspect?: string
        sizes?: string
        eager?: boolean
        /** Seconds for one pass of the `auto` scroll */
        duration?: number
    }>(),
    {
        address: undefined,
        mode: 'static',
        aspect: '16 / 10',
        sizes: 'sm:100vw lg:640px',
        eager: false,
        duration: 36,
    },
)

const host = computed(() => props.address?.replace(/^https?:\/\//, '').replace(/\/$/, ''))
</script>

<template>
    <figure
        class="group/frame overflow-hidden rounded-[14px] bg-white shadow-[0_40px_90px_-40px_rgba(18,17,16,0.45)] ring-1 ring-ink/10"
    >
        <div class="flex h-9 items-center gap-3 border-b border-ink/[0.08] bg-[#f3f1ed] px-3.5" aria-hidden="true">
            <span class="flex gap-1.5">
                <span class="size-2.5 rounded-full bg-ink/15" />
                <span class="size-2.5 rounded-full bg-ink/15" />
                <span class="size-2.5 rounded-full bg-ink/15" />
            </span>
            <span
                v-if="host"
                class="mx-auto max-w-[60%] truncate rounded-md bg-white/80 px-3 py-0.5 text-[0.6875rem] text-muted ring-1 ring-ink/[0.06]"
            >
                {{ host }}
            </span>
        </div>

        <div
            v-if="mode === 'scroll'"
            class="relative overflow-y-auto overscroll-contain"
            :style="{ aspectRatio: aspect }"
            tabindex="0"
            role="region"
            :aria-label="`${alt} — scrollable`"
        >
            <NuxtImg
                format="webp"
                :src="src"
                :alt="alt"
                :sizes="sizes"
                class="block h-auto w-full"
                :loading="eager ? 'eager' : 'lazy'"
            />
        </div>

        <div v-else class="relative overflow-hidden [container-type:size]" :style="{ aspectRatio: aspect }">
            <NuxtImg
                format="webp"
                :src="src"
                :alt="alt"
                :sizes="sizes"
                class="block h-auto w-full"
                :class="
                    mode === 'auto' &&
                    'animate-page-scroll will-change-transform group-hover/frame:[animation-play-state:paused] motion-reduce:animate-none'
                "
                :style="mode === 'auto' ? { animationDuration: `${duration}s` } : undefined"
                :loading="eager ? 'eager' : 'lazy'"
                :fetchpriority="eager ? 'high' : undefined"
            />
        </div>
    </figure>
</template>
