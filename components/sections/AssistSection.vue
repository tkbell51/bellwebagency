<script setup lang="ts">
// Illustrative only: shows how guided answers become a website brief.
const example = {
    questions: [
        { q: 'What does your business do?', a: 'We bake custom cakes for birthdays, weddings, and celebrations.' },
        { q: 'Who usually orders from you?', a: 'Mostly families nearby planning a big day.' },
        { q: 'What should visitors do first?', a: 'Ask for a quote for their event.' },
    ],
    brief: [
        { label: 'Headline', value: 'Custom cakes for the moments that matter' },
        { label: 'Sections', value: 'Signature cakes · How ordering works · Reviews · Contact' },
        { label: 'Main action', value: 'Request a cake quote' },
    ],
}
</script>

<template>
    <section class="section" aria-labelledby="assist-title">
        <div class="container grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-5" data-reveal>
                <p class="eyebrow mb-5">Guided onboarding</p>
                <h2 id="assist-title" class="text-display-lg">Don’t know what to <span class="accent">write?</span></h2>
                <p class="mt-6 text-lede text-muted">
                    You don’t need a finished website brief before you start. Tell us about your business in plain
                    English, and our guided process turns your answers into a clear brief — so you don’t spend three
                    weeks staring at a blank document.
                </p>
            </div>

            <div class="lg:col-span-6 lg:col-start-7" data-reveal>
                <div
                    class="rounded-2xl border border-line bg-white p-6 shadow-[0_30px_70px_-45px_rgba(18,17,16,0.45)] sm:p-8"
                >
                    <div class="flex items-center justify-between">
                        <p class="eyebrow">Your answers</p>
                        <p class="text-xs text-muted">Illustrative example</p>
                    </div>
                    <dl class="mt-5 space-y-4">
                        <div v-for="item in example.questions" :key="item.q" class="rounded-xl bg-paper px-4 py-3.5">
                            <dt class="text-sm font-medium">{{ item.q }}</dt>
                            <dd class="mt-1 text-[0.9375rem] text-muted">{{ item.a }}</dd>
                        </div>
                    </dl>

                    <div class="my-6 flex items-center gap-3 text-sm text-muted" aria-hidden="true">
                        <span class="h-px flex-1 bg-line" />
                        <BaseIcon name="arrow-right" class="size-4 rotate-90" />
                        <span class="h-px flex-1 bg-line" />
                    </div>

                    <p class="eyebrow">Your website brief</p>
                    <dl class="mt-4 divide-y divide-line rounded-xl border border-line">
                        <div
                            v-for="row in example.brief"
                            :key="row.label"
                            class="grid gap-1 px-4 py-3 sm:grid-cols-[7rem_1fr]"
                        >
                            <dt class="text-sm text-muted">{{ row.label }}</dt>
                            <dd class="text-[0.9375rem] font-medium">{{ row.value }}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </section>
</template>
