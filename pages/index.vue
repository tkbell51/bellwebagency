<script setup lang="ts">
usePageSeo()

const { data: projects } = await useProjects({ featured: true })
const { data: testimonials } = await useTestimonials()
</script>

<template>
    <div>
        <HomeHero :projects="projects ?? []" />
        <ProofSection :testimonials="testimonials ?? []" />
        <WorkSection :projects="projects ?? []" />
        <ServicesSection />

        <section class="section" aria-labelledby="process-title">
            <div class="container">
                <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end" data-reveal>
                    <div>
                        <p class="eyebrow mb-5">Process</p>
                        <h2 id="process-title" class="text-display-lg">
                            A simple process, <span class="accent">built to ship.</span>
                        </h2>
                    </div>
                    <CTAButton to="/process" label="How it works" variant="text" class="shrink-0" />
                </div>
                <div class="mt-16 lg:mt-20">
                    <ProcessSteps />
                </div>
            </div>
        </section>

        <AssistSection class="border-t border-line" />
        <PricingSection />
        <CareSection />
        <FaqSection />
        <FinalCta />
    </div>
</template>
