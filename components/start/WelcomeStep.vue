<script setup lang="ts">
/** One row in the post-purchase progress list on /welcome. */
defineProps<{ title: string; detail: string; state: 'done' | 'current' | 'upcoming' }>()
</script>

<template>
    <li class="flex gap-4" :aria-current="state === 'current' ? 'step' : undefined">
        <span
            class="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border"
            :class="{
                'border-ink bg-ink text-paper': state === 'done',
                'border-copper-deep bg-copper/15 text-copper-deep': state === 'current',
                'border-ink/15 text-transparent': state === 'upcoming',
            }"
            aria-hidden="true"
        >
            <BaseIcon v-if="state === 'done'" name="check" class="size-4" />
            <span v-else-if="state === 'current'" class="size-2 rounded-full bg-copper-deep" />
        </span>
        <div>
            <p class="font-medium" :class="state === 'upcoming' && 'text-ink/70'">
                {{ title }}
                <span class="sr-only"
                    >({{ state === 'done' ? 'done' : state === 'current' ? 'current step' : 'upcoming' }})</span
                >
            </p>
            <p class="text-sm text-muted">{{ detail }}</p>
        </div>
    </li>
</template>
