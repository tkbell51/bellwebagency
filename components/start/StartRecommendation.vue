<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { customPlan, launchPlan } from '~/data/pricing'
import { budgetOptions, customNextSteps, recommendPath } from '~/data/project-start'
import type { ProjectFitAnswers } from '~/composables/useProjectStart'
import type { ProductPath } from '~/types'

/**
 * Step 3 of /start: recommend a path from the project-fit answers, make the offer and pricing explicit,
 * then either hand off to Stripe Checkout (Launch Website) or send a custom inquiry.
 */
const props = defineProps<{ answers: ProjectFitAnswers }>()
defineEmits<{ edit: [] }>()

const { track } = useFunnel()
const { submit, goToCheckout } = useProjectStart()

const recommended = recommendPath(props.answers)
const selected = ref<ProductPath>(recommended)
const budget = ref('')
const status = ref<'idle' | 'submitting' | 'redirecting' | 'sent' | 'error'>('idle')
const turnstileToken = ref('')
const turnstileWidget = ref<{ reset: () => void }>()
const verifyMessage = ref('')
const heading = ref<HTMLElement>()

const trackSelection = (path: ProductPath) =>
    track(path === 'launch' ? 'launch_website_selected' : 'custom_project_selected', {
        recommended: path === recommended,
    })

onMounted(() => {
    trackSelection(recommended)
    heading.value?.focus()
})
watch(selected, trackSelection)

async function send() {
    if (!turnstileToken.value) {
        verifyMessage.value = `Please wait a moment while we confirm you’re not a bot, then try again. If this keeps happening, email ${siteConfig.contact.email}.`
        return
    }
    verifyMessage.value = ''
    status.value = 'submitting'
    try {
        const id = await submit(props.answers, selected.value, {
            budget: budget.value,
            turnstileToken: turnstileToken.value,
        })
        if (selected.value === 'launch') {
            status.value = 'redirecting'
            if (import.meta.dev) {
                console.info('[start-project] dev: would open Stripe Checkout now')
                status.value = 'idle'
                return
            }
            goToCheckout(props.answers.email, id)
        } else {
            status.value = 'sent'
        }
    } catch (error) {
        console.error(error)
        status.value = 'error'
    } finally {
        // Tokens are single-use: get a fresh one before any retry
        turnstileWidget.value?.reset()
    }
}
</script>

<template>
    <div>
        <!-- Custom inquiry sent -->
        <div v-if="status === 'sent'" class="rounded-[20px] border border-line bg-white p-7 sm:p-10" role="status">
            <p class="eyebrow">Sent</p>
            <h2 class="mt-4 text-display-md">Thanks — we’ve got your project.</h2>
            <h3 class="eyebrow mt-10">What happens next</h3>
            <ol class="mt-5 space-y-5">
                <li v-for="(step, index) in customNextSteps" :key="step" class="flex gap-4">
                    <span
                        class="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper"
                        aria-hidden="true"
                    >
                        {{ index + 1 }}
                    </span>
                    <span class="pt-1">{{ step }}</span>
                </li>
            </ol>
            <p class="mt-8 text-sm text-muted">{{ siteConfig.contact.responseTime }}</p>
            <div class="mt-8">
                <CTAButton to="/work" label="Browse our work" variant="secondary" />
            </div>
        </div>

        <div v-else class="rounded-[20px] border border-line bg-white p-6 sm:p-10">
            <div class="flex flex-wrap items-baseline justify-between gap-3">
                <p class="eyebrow">Your recommendation</p>
                <button
                    type="button"
                    class="text-sm text-muted underline underline-offset-4 hover:text-ink"
                    @click="$emit('edit')"
                >
                    Edit my answers
                </button>
            </div>
            <h2 ref="heading" tabindex="-1" class="mt-4 text-display-md focus:outline-none">
                <template v-if="recommended === 'launch'">The Launch Website looks like a great fit.</template>
                <template v-else>Your project sounds more custom.</template>
            </h2>
            <p class="mt-4 max-w-prose text-muted">
                <template v-if="recommended === 'launch'">{{ launchPlan.summary }}</template>
                <template v-else>{{ customPlan.summary }}</template>
            </p>

            <div class="mt-10">
                <ProductComparison v-model="selected" :recommended="recommended" />
            </div>

            <!-- Launch Website -->
            <div v-if="selected === 'launch'" class="mt-10 space-y-10">
                <div>
                    <h3 class="eyebrow">What’s included</h3>
                    <ul class="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        <li v-for="feature in launchPlan.features" :key="feature" class="flex gap-3 text-[0.9375rem]">
                            <BaseIcon name="check" class="mt-0.5 size-5 text-copper-deep" />
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="eyebrow mb-4">Pricing</h3>
                    <PricingSummary />
                </div>

                <div class="rounded-2xl bg-ink p-6 text-paper sm:p-7">
                    <p class="font-display text-[1.375rem] font-semibold leading-snug tracking-tight">
                        You’ll review your actual website before it goes live.
                    </p>
                    <p class="mt-3 text-paper/75">
                        After checkout, we’ll learn about your business, create your website direction, build your site,
                        and give you a private preview to review before launch.
                    </p>
                </div>

                <div>
                    <h3 class="eyebrow mb-6">What happens after you start</h3>
                    <ProcessSteps variant="list" />
                </div>
            </div>

            <!-- Custom project -->
            <div v-else class="mt-10 space-y-8">
                <div>
                    <p v-if="customPlan.startingAt !== null" class="font-display text-display-sm font-semibold">
                        Custom websites starting at {{ formatPrice(customPlan.startingAt) }}
                    </p>
                    <p class="mt-2 text-muted">{{ customPlan.priceNote }}. We’ll reply with a recommended scope.</p>
                </div>
                <div role="radiogroup" aria-labelledby="budget-label" aria-describedby="budget-hint">
                    <p id="budget-label" class="text-sm font-medium">
                        Roughly what budget do you have in mind? <span class="font-normal text-muted">(optional)</span>
                    </p>
                    <p id="budget-hint" class="mt-1 text-sm text-muted">
                        This helps us recommend the right scope. It’s not a quote.
                    </p>
                    <div class="mt-3 grid gap-3 sm:grid-cols-2">
                        <label
                            v-for="option in budgetOptions"
                            :key="option.value"
                            class="flex cursor-pointer items-start gap-3 rounded-xl border border-ink/15 bg-white p-4 transition-colors hover:border-ink/40 has-[:checked]:border-ink has-[:checked]:bg-ink/[0.03] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-copper-deep"
                        >
                            <input
                                v-model="budget"
                                type="radio"
                                name="budget"
                                :value="option.value"
                                class="mt-1 size-4 accent-ink"
                            />
                            <span class="text-[0.9375rem]">{{ option.label }}</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="mt-10 border-t border-line pt-8">
                <TurnstileWidget ref="turnstileWidget" v-model="turnstileToken" />
                <p v-if="verifyMessage" class="mb-4 text-sm text-copper-deep" role="status">{{ verifyMessage }}</p>
                <p
                    v-if="status === 'error'"
                    class="mb-6 rounded-xl border border-red-700/30 bg-red-50 p-4 text-sm text-red-900"
                    role="alert"
                >
                    Something went wrong. Please try again, or email us at
                    <a :href="`mailto:${siteConfig.contact.email}`" class="underline">{{ siteConfig.contact.email }}</a
                    >.
                </p>

                <CheckoutCTA
                    v-if="selected === 'launch'"
                    :busy="status === 'submitting' || status === 'redirecting'"
                    @start="send"
                />
                <div v-else>
                    <button
                        type="button"
                        class="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-ink px-7 text-base font-medium text-paper transition-colors hover:bg-ink-soft disabled:opacity-60 sm:w-auto"
                        :disabled="status === 'submitting'"
                        @click="send"
                    >
                        {{ status === 'submitting' ? 'Sending…' : 'Start a Custom Project' }}
                        <BaseIcon
                            name="arrow-right"
                            class="size-[1.1em] transition-transform group-hover:translate-x-0.5"
                        />
                    </button>
                    <p class="mt-4 text-sm text-muted">No payment now. We’ll reply with next steps.</p>
                </div>

                <p class="mt-6 text-sm text-muted">
                    We’ll only use your details to respond to your request. See our
                    <NuxtLink to="/privacy" class="text-ink underline underline-offset-4">privacy policy</NuxtLink>.
                </p>
            </div>
        </div>
    </div>
</template>
