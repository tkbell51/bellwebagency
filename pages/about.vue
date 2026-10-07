<script setup lang="ts">
import { siteConfig } from '~/config/site'

usePageSeo({
    title: 'About',
    description:
        'Bell Web Agency is a modern website studio founded by Tim Bell — designing, building, and looking after websites for small businesses, professionals, and organizations.',
})

const { data: testimonials } = await useTestimonials()

const principles = [
    {
        title: 'Outcomes, not hours.',
        text: 'You’re paying for a website that works for your business — not a stack of billable time.',
    },
    {
        title: 'Design is the point.',
        text: 'People judge a business by its website. We sweat the details so visitors trust you at a glance.',
    },
    {
        title: 'Simple on purpose.',
        text: 'A clear process, clear pricing, and clear next steps. No jargon and no mystery.',
    },
    {
        title: 'We stay.',
        text: 'Hosting, maintenance, and updates are part of the relationship, so your website never becomes an abandoned project.',
    },
]
</script>

<template>
    <div>
        <section class="container pb-20 pt-36 sm:pt-44">
            <SectionHeading
                as="h1"
                size="xl"
                eyebrow="About"
                title="A small studio with"
                accent="high standards."
                lede="Bell Web Agency is a website studio founded by Tim Bell. We design, build, and look after websites for businesses and organizations that care about how they show up online."
                class="animate-fade-up"
            />
        </section>

        <section
            class="container grid items-center gap-12 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-16"
            aria-labelledby="founder-title"
        >
            <div class="lg:col-span-5" data-reveal>
                <NuxtImg
                    format="webp"
                    :src="siteConfig.founder.image"
                    :alt="`Portrait of ${siteConfig.founder.name}, founder of ${siteConfig.name}`"
                    sizes="sm:100vw lg:480px"
                    class="aspect-[4/5] w-full rounded-[20px] object-cover object-top"
                />
            </div>
            <div class="lg:col-span-7" data-reveal>
                <p class="eyebrow">Founder</p>
                <h2 id="founder-title" class="mt-4 text-display-md">{{ siteConfig.founder.name }}</h2>
                <p class="mt-2 text-muted">Designer, developer, strategist &amp; business owner</p>
                <blockquote class="mt-10 border-l-2 border-copper pl-6">
                    <p class="font-display text-[1.5rem] font-medium leading-snug tracking-tight sm:text-[1.75rem]">
                        I come from a family that cares about two things: creating and helping. Those two values have
                        built many entrepreneurs in my family who have gone on to do amazing things.
                    </p>
                    <p class="mt-5 text-lede text-muted">
                        Bell Web Agency is my way of helping my community and beyond reach the goals they’re working
                        toward — and I’m happy to use my creativity to do it.
                    </p>
                </blockquote>
            </div>
        </section>

        <section class="section border-t border-line bg-paper-deep/60" aria-labelledby="why-title">
            <div class="container grid gap-12 lg:grid-cols-12 lg:gap-10">
                <div class="lg:col-span-5" data-reveal>
                    <p class="eyebrow mb-5">Why we exist</p>
                    <h2 id="why-title" class="text-display-lg">
                        A better path to a <span class="accent">great website.</span>
                    </h2>
                </div>
                <div class="space-y-6 text-lede text-ink/80 lg:col-span-6 lg:col-start-7" data-reveal>
                    <p>
                        Most small businesses end up choosing between two frustrating options: a do-it-yourself builder
                        that never quite looks right, or an agency process that takes months and more budget than the
                        project needs.
                    </p>
                    <p>
                        Bell Web Agency exists to offer a better path — a website that looks the part, a simple process
                        to get there, and a studio that handles the technical side long after launch.
                    </p>
                    <p>We’re a small business, too. And just like you, we expect big things.</p>
                </div>
            </div>
        </section>

        <section class="section" aria-labelledby="principles-title">
            <div class="container">
                <h2 id="principles-title" class="eyebrow" data-reveal>How we work</h2>
                <ul class="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                    <li v-for="principle in principles" :key="principle.title" class="bg-paper p-8 sm:p-10" data-reveal>
                        <h3 class="text-display-sm">{{ principle.title }}</h3>
                        <p class="mt-3 max-w-md text-muted">{{ principle.text }}</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="container pb-24 sm:pb-32" aria-labelledby="project-zero-title">
            <div class="grid gap-8 rounded-[20px] border border-line p-8 sm:p-12 lg:grid-cols-12" data-reveal>
                <p class="font-display text-display-lg font-semibold text-copper-deep lg:col-span-3" aria-hidden="true">
                    #0
                </p>
                <div class="lg:col-span-8">
                    <h2 id="project-zero-title" class="text-display-sm">This website is Project #0.</h2>
                    <p class="mt-4 max-w-prose text-muted">
                        It’s the first project built with our current process — the same structure, standards, and
                        workflow we use for client websites. If you like how it looks and works, that’s the point.
                    </p>
                </div>
            </div>
        </section>

        <ProofSection :testimonials="testimonials ?? []" />
        <FinalCta />
    </div>
</template>
