<script setup lang="ts">
const route = useRoute()
const { data } = await useProject(route.path.replace(/\/$/, ''))

if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const project = computed(() => (data.value ? data.value.project : null))

usePageSeo({
    title: data.value.project.title,
    description: data.value.project.description,
    image: data.value.project.image,
    imageAlt: `The ${data.value.project.title} website`,
    type: 'article',
})
</script>

<template>
    <article v-if="data && project">
        <header class="container pb-14 pt-36 sm:pt-44">
            <nav aria-label="Breadcrumb" class="animate-fade-up">
                <ol class="flex items-center gap-2 text-sm text-muted">
                    <li><NuxtLink to="/work" class="hover:text-ink">Work</NuxtLink></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" class="text-ink">{{ project.title }}</li>
                </ol>
            </nav>

            <div class="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
                <div class="lg:col-span-8">
                    <div class="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:60ms]">
                        <ProjectStatusBadge :status="project.status" />
                        <span class="text-sm text-muted">{{ project.category }}</span>
                    </div>
                    <h1 class="mt-6 animate-fade-up text-display-xl [animation-delay:120ms]">{{ project.title }}</h1>
                    <p class="mt-6 max-w-2xl animate-fade-up text-lede text-muted [animation-delay:180ms]">
                        {{ project.description }}
                    </p>
                    <p
                        v-if="project.status === 'concept'"
                        class="mt-6 max-w-2xl rounded-xl bg-copper/10 p-4 text-sm text-copper-deep"
                    >
                        This is a concept: a self-initiated design exploration, not a client project.
                    </p>
                </div>

                <dl class="grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm lg:col-span-4 lg:grid-cols-1">
                    <div>
                        <dt class="eyebrow">Services</dt>
                        <dd class="mt-2">{{ project.services.join(', ') }}</dd>
                    </div>
                    <div v-if="project.year">
                        <dt class="eyebrow">Launched</dt>
                        <dd class="mt-2">{{ project.year }}</dd>
                    </div>
                    <div v-if="project.url" class="col-span-2 lg:col-span-1">
                        <dt class="eyebrow">Website</dt>
                        <dd class="mt-2">
                            <a
                                :href="project.url"
                                target="_blank"
                                rel="noopener"
                                class="inline-flex items-center gap-1.5 underline decoration-ink/25 underline-offset-4 hover:decoration-copper-deep"
                            >
                                {{ project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') }}
                                <BaseIcon name="arrow-up-right" class="size-4" />
                                <span class="sr-only">(opens in a new tab)</span>
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>
        </header>

        <section class="container" aria-label="Full website">
            <BrowserFrame
                :src="project.desktopImage"
                :alt="`The full ${project.title} homepage as delivered`"
                :address="project.url"
                mode="scroll"
                aspect="16 / 10"
                sizes="sm:100vw xl:1240px"
                eager
            />
            <p class="mt-4 text-center text-sm text-muted">
                Scroll inside the window to see the full page as launched.
            </p>
        </section>

        <section class="container grid gap-10 py-24 sm:py-28 lg:grid-cols-12" aria-labelledby="overview-title">
            <h2 id="overview-title" class="eyebrow lg:col-span-4">The project</h2>
            <div class="prose-bell lg:col-span-8" data-reveal>
                <ContentRenderer :value="data.body" />
            </div>
        </section>

        <section v-if="project.gallery.length" class="container" aria-label="More from this project">
            <ul class="grid gap-6 sm:grid-cols-2" :class="project.gallery.length >= 3 && 'lg:grid-cols-3'">
                <li v-for="image in project.gallery" :key="image.src" data-reveal>
                    <NuxtImg
                        format="webp"
                        :src="image.src"
                        :alt="image.alt"
                        sizes="sm:100vw md:50vw lg:440px"
                        loading="lazy"
                        class="aspect-[4/3] w-full rounded-[14px] bg-white object-contain ring-1 ring-ink/10"
                    />
                </li>
            </ul>
        </section>

        <section v-if="project.testimonial" class="container py-24 sm:py-32" aria-label="Client testimonial">
            <div class="max-w-4xl" data-reveal>
                <TestimonialCard :testimonial="project.testimonial" feature />
            </div>
        </section>

        <nav v-if="data.next" class="border-t border-line" aria-label="Next project">
            <NuxtLink
                :to="data.next.path"
                class="group container flex items-center justify-between gap-6 py-14 sm:py-20"
            >
                <span>
                    <span class="eyebrow block">Next project</span>
                    <span class="mt-3 block font-display text-display-md font-semibold">{{ data.next.title }}</span>
                </span>
                <span
                    class="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                    aria-hidden="true"
                >
                    <BaseIcon name="arrow-right" class="size-6" />
                </span>
            </NuxtLink>
        </nav>

        <FinalCta />
    </article>
</template>
