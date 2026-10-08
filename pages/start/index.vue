<script setup lang="ts">
import { emptyAnswers } from '~/composables/useProjectStart'
import { siteConfig } from '~/config/site'
import { launchPlan } from '~/data/pricing'

usePageSeo({
    title: 'Start Your Website',
    description:
        'Find the right starting point for your website. Answer a few quick questions, see transparent pricing, and know exactly what happens next.',
})

const route = useRoute()
const answers = ref(emptyAnswers())
const stage = ref<'fit' | 'recommendation'>('fit')
const flowTop = ref<HTMLElement>()

const { data: projects } = await useProjects({ featured: true })
const { data: testimonials } = await useTestimonials()

// Links like /start?plan=custom preselect the custom path in the questionnaire
onMounted(() => {
    if (route.query.plan === 'custom') answers.value.lookingFor = 'custom'
})

async function showRecommendation() {
    stage.value = 'recommendation'
    await nextTick()
    flowTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

async function editAnswers() {
    stage.value = 'fit'
    await nextTick()
    flowTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const reassurances = [
    { title: 'A few quick questions', text: 'About 2–5 minutes. Detailed content comes later, after you start.' },
    { title: 'Clear pricing up front', text: `The ${launchPlan.name} is a fixed price — no quotes, no surprises.` },
    { title: 'A private preview before launch', text: 'You review your actual website before it goes live.' },
]
</script>

<template>
    <div>
        <section class="container pb-12 pt-32 sm:pb-16 sm:pt-40">
            <p class="eyebrow animate-fade-up">Start your website</p>
            <h1 class="mt-6 max-w-3xl animate-fade-up text-display-lg [animation-delay:80ms]">
                Let’s build your <span class="accent">website.</span>
            </h1>
            <p class="mt-6 max-w-xl animate-fade-up text-lede text-muted [animation-delay:160ms]">
                Tell us a little about what you’re looking for. We’ll help you find the right starting point.
            </p>
        </section>

        <section class="container grid gap-12 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-10" aria-label="Find your website">
            <div ref="flowTop" class="scroll-mt-28 lg:col-span-7">
                <ProjectFitForm v-if="stage === 'fit'" v-model="answers" @complete="showRecommendation" />
                <StartRecommendation v-else :answers="answers" @edit="editAnswers" />
            </div>

            <aside class="space-y-10 lg:col-span-5" aria-label="About the Launch Website">
                <ul class="space-y-6 border-t border-line pt-8">
                    <li v-for="item in reassurances" :key="item.title" class="flex gap-4">
                        <BaseIcon name="check" class="mt-0.5 size-5 text-copper-deep" />
                        <div>
                            <p class="font-medium">{{ item.title }}</p>
                            <p class="mt-1 text-[0.9375rem] text-muted">{{ item.text }}</p>
                        </div>
                    </li>
                </ul>

                <div>
                    <h2 class="eyebrow">Real client work</h2>
                    <ul class="mt-5 grid grid-cols-2 gap-4">
                        <li v-for="project in projects ?? []" :key="project.slug">
                            <NuxtLink :to="project.path" class="group block">
                                <span class="block overflow-hidden rounded-xl ring-1 ring-ink/10">
                                    <NuxtImg
                                        format="webp"
                                        :src="project.image"
                                        :alt="`The ${project.title} homepage`"
                                        sizes="sm:50vw lg:240px"
                                        loading="lazy"
                                        class="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </span>
                                <span class="mt-2 block text-sm font-medium group-hover:underline">{{
                                    project.title
                                }}</span>
                                <span class="block text-xs text-muted">
                                    {{ project.status === 'client' ? 'Client project' : 'Concept' }} ·
                                    {{ project.category }}
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <figure v-if="testimonials?.length" class="rounded-2xl border border-line p-6">
                    <blockquote class="text-[0.9375rem] leading-relaxed text-ink/80">
                        “{{ testimonials[0].quote.split('. ').slice(0, 2).join('. ') }}.”
                    </blockquote>
                    <figcaption class="mt-4 text-sm">
                        <span class="font-medium">{{ testimonials[0].author }}</span>
                        <span class="text-muted"> · {{ testimonials[0].role }}</span>
                    </figcaption>
                </figure>

                <p class="text-[0.9375rem] text-muted">
                    Questions first? Email
                    <a :href="`mailto:${siteConfig.contact.email}`" class="text-ink underline underline-offset-4">{{
                        siteConfig.contact.email
                    }}</a>
                </p>
            </aside>
        </section>
    </div>
</template>
