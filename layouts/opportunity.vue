<script setup lang="ts">
// Minimal layout for private prospect pages
import { siteConfig } from '~/config/site'

const year = new Date().getFullYear()
</script>

<template>
    <div class="flex min-h-dvh flex-col">
        <header class="container flex h-20 items-center">
            <NuxtLink
                to="/"
                class="flex items-center gap-2.5 font-display text-[1.0625rem] font-semibold tracking-tight"
            >
                <BellMark class="h-7 w-auto" />
                <span>{{ siteConfig.name }}</span>
            </NuxtLink>
        </header>
        <main id="main" class="flex-1">
            <slot />
        </main>
        <footer class="container border-t border-line py-8 text-sm text-muted">
            &copy; {{ year }} {{ siteConfig.name }}. All rights reserved.
        </footer>
    </div>
</template>
