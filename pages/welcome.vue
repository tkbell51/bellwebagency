<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { onboarding } from '~/data/onboarding'
import { launchPlan } from '~/data/pricing'

/*
 * Where Stripe sends customers after checkout (Payment Link → After payment →
 * https://bellwebagency.com/welcome?session_id={CHECKOUT_SESSION_ID}).
 * This page doesn't verify payment; a future webhook will confirm sessions server-side.
 */
usePageSeo({ title: 'Welcome', noindex: true })

const route = useRoute()
const { track } = useFunnel()

onMounted(() => {
    if (typeof route.query.session_id === 'string') track('checkout_completed', { path: 'launch' })
})

const progress = [
    { title: 'Checkout', detail: `${launchPlan.name} and ${launchPlan.monthly.name}`, state: 'done' },
    { title: 'Website Brief', detail: 'A guided interview about your business', state: 'current' },
    { title: 'Brief approval', detail: 'Nothing is designed until you approve it', state: 'upcoming' },
    { title: 'Design & build', detail: 'We create your website', state: 'upcoming' },
    { title: 'Private preview', detail: 'Review your actual website before launch', state: 'upcoming' },
    { title: 'Revisions', detail: 'We refine it within the agreed scope', state: 'upcoming' },
    { title: 'Launch', detail: 'Domain, SSL, and go-live handled for you', state: 'upcoming' },
] as const

function startBrief() {
    track('onboarding_started')
}
</script>

<template>
    <div>
        <section class="container pb-16 pt-32 sm:pt-40">
            <p class="eyebrow animate-fade-up">Welcome</p>
            <h1 class="mt-6 max-w-3xl animate-fade-up text-display-lg [animation-delay:80ms]">
                You’re officially <span class="accent">on the list.</span>
            </h1>
            <p class="mt-6 max-w-xl animate-fade-up text-lede text-muted [animation-delay:160ms]">
                Your website project is ready to begin. Your receipt from Stripe is on its way to your inbox.
            </p>
        </section>

        <section class="container grid gap-12 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-7">
                <div class="rounded-[20px] border border-line bg-white p-7 sm:p-10">
                    <p class="eyebrow">Next step</p>
                    <h2 class="mt-4 text-display-md">Tell us about your business</h2>
                    <p class="mt-4 max-w-prose text-muted">
                        We’ll use your answers to build the foundation for your website.
                        {{ onboarding.interviewIntro.text }}
                    </p>
                    <ul class="mt-6 flex flex-wrap gap-2">
                        <li
                            v-for="topic in onboarding.briefCovers"
                            :key="topic"
                            class="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink/80"
                        >
                            {{ topic }}
                        </li>
                    </ul>

                    <div class="mt-10">
                        <CTAButton
                            v-if="onboarding.briefUrl"
                            :to="onboarding.briefUrl"
                            label="Start My Website Brief"
                            size="lg"
                            @click="startBrief"
                        />
                        <div v-else class="rounded-xl bg-paper p-5">
                            <p class="font-medium">Your private Website Brief link is on its way.</p>
                            <p class="mt-1 text-sm text-muted">
                                We’ll email it to the address you used at checkout.
                                {{ siteConfig.contact.responseTime }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <aside class="lg:col-span-5" aria-labelledby="progress-title">
                <h2 id="progress-title" class="eyebrow">Your project</h2>
                <ol class="mt-6 space-y-5">
                    <WelcomeStep v-for="step in progress" :key="step.title" v-bind="step" />
                </ol>
                <div class="mt-10 space-y-2 border-t border-line pt-6 text-sm text-muted">
                    <p>
                        Questions?
                        <a :href="`mailto:${siteConfig.contact.email}`" class="text-ink underline underline-offset-4">{{
                            siteConfig.contact.email
                        }}</a>
                    </p>
                    <p>
                        <a
                            :href="siteConfig.support.manageBilling.to"
                            target="_blank"
                            rel="noopener"
                            class="text-ink underline underline-offset-4"
                            >Manage billing<span class="sr-only"> (opens in a new tab)</span></a
                        >
                        ·
                        <NuxtLink to="/terms" class="text-ink underline underline-offset-4"
                            >Terms &amp; Refund Policy</NuxtLink
                        >
                    </p>
                </div>
            </aside>
        </section>
    </div>
</template>
