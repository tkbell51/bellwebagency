<script setup lang="ts">
import type { Testimonial } from '~/types'

const props = withDefaults(defineProps<{ testimonial: Testimonial; feature?: boolean }>(), { feature: false })

// Feature quotes lead with the first sentence large, followed by the rest of the quote unchanged.
const lead = computed(() => {
    const match = props.testimonial.quote.match(/^.+?[.!?](\s|$)/)
    return props.feature && match ? match[0].trim() : props.testimonial.quote
})
const rest = computed(() => (props.feature ? props.testimonial.quote.slice(lead.value.length).trim() : ''))
</script>

<template>
    <figure>
        <blockquote>
            <p
                :class="
                    feature
                        ? 'font-display text-display-md font-medium'
                        : 'font-display text-[1.375rem] font-medium leading-snug tracking-tight'
                "
            >
                <span class="font-serif text-copper-deep" aria-hidden="true">“</span>{{ lead
                }}<span v-if="!rest" class="font-serif text-copper-deep" aria-hidden="true">”</span>
            </p>
            <p v-if="rest" class="mt-6 max-w-prose text-lede text-muted">
                {{ rest }}<span class="font-serif text-copper-deep" aria-hidden="true">”</span>
            </p>
        </blockquote>
        <figcaption class="mt-8 flex items-center gap-4">
            <NuxtImg
                v-if="testimonial.image"
                format="webp"
                :src="testimonial.image"
                alt=""
                width="56"
                height="56"
                densities="x1 x2"
                loading="lazy"
                class="size-14 rounded-full object-cover"
            />
            <div>
                <p class="font-semibold">{{ testimonial.author }}</p>
                <p class="text-sm text-muted">
                    <NuxtLink
                        v-if="testimonial.project"
                        :to="`/work/${testimonial.project.slug}`"
                        class="underline decoration-ink/20 underline-offset-4 hover:decoration-copper-deep"
                    >
                        {{ testimonial.role ?? testimonial.project.title }}
                    </NuxtLink>
                    <template v-else>{{ testimonial.role }}</template>
                </p>
            </div>
        </figcaption>
    </figure>
</template>
