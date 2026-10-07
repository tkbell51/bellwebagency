<script setup lang="ts">
import type { Testimonial } from '~/types'

defineProps<{ testimonials: Testimonial[] }>()
</script>

<template>
    <section v-if="testimonials.length" class="border-t border-line py-20 sm:py-24" aria-labelledby="proof-title">
        <div class="container grid gap-16 lg:grid-cols-12">
            <div class="lg:col-span-3">
                <h2 id="proof-title" class="eyebrow">What clients say</h2>
            </div>
            <div class="lg:col-span-9">
                <TestimonialCard :testimonial="testimonials[0]" feature data-reveal />
                <div v-if="testimonials.length > 1" class="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-2">
                    <TestimonialCard
                        v-for="testimonial in testimonials.slice(1)"
                        :key="testimonial.author"
                        :testimonial="testimonial"
                        data-reveal
                    />
                </div>
            </div>
        </div>
    </section>
</template>
