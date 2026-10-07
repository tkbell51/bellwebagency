<template>
    <div class="flex min-h-dvh flex-col">
        <a
            href="#main"
            class="sr-only z-50 rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
            Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabindex="-1" class="flex-1 focus:outline-none">
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>
