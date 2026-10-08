<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { launchPlan } from '~/data/pricing'
import {
    budgetOptions,
    budgetRules,
    needOptions,
    nextSteps,
    projectFormEndpoint,
    projectTypeOptions,
} from '~/data/project-start'

/**
 * Guided project start. Submissions go to the Cloudflare Worker (worker/start-project.ts),
 * which saves them to D1 and emails the studio. Without JavaScript the form still posts normally.
 * Future: a `launch` submission can hand off to checkout and onboarding instead of the email confirmation.
 */
const route = useRoute()

const steps = [
    { id: 'about', title: 'About you' },
    { id: 'project', title: 'Your project' },
    { id: 'path', title: 'Choose a path' },
] as const

const form = reactive({
    name: '',
    email: '',
    business: '',
    website: '',
    need: '',
    goals: '',
    projectType: '',
    budget: '',
})

// Links like /start?plan=launch or /start?need=update preselect an answer.
// Applied after mount so the prerendered HTML and the first client render match.
onMounted(() => {
    const plan = route.query.plan
    const need = route.query.need
    if (typeof plan === 'string' && projectTypeOptions.some((o) => o.value === plan)) form.projectType = plan
    if (typeof need === 'string' && needOptions.some((o) => o.value === need)) form.need = need
})

const current = ref(0)
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const formEl = ref<HTMLFormElement>()
const stepHeadings: HTMLElement[] = []
const setHeading = (el: unknown, index: number) => {
    if (el && typeof el === 'object' && 'focus' in el) stepHeadings[index] = el as HTMLElement
}
const resultHeading = ref<HTMLElement>()

const result = computed(() => nextSteps[form.projectType] ?? nextSteps.default)
const isLaunch = computed(() => form.projectType === launchPlan.id)
const budgetRule = computed(() => budgetRules[form.projectType])

// Budget only applies to some project types; drop a stale answer when the type changes
watch(budgetRule, (rule) => {
    if (!rule) form.budget = ''
})

/** Validate the visible step using the browser's built-in constraint validation. */
function stepIsValid(index: number) {
    const fieldset = formEl.value?.querySelectorAll('fieldset')[index]
    if (!fieldset) return true
    const fields = Array.from(fieldset.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'))
    const invalid = fields.find((field) => !field.checkValidity())
    invalid?.reportValidity()
    return !invalid
}

async function goTo(index: number) {
    if (index > current.value && !stepIsValid(current.value)) return
    current.value = index
    await nextTick()
    stepHeadings[index]?.focus()
}

async function submit() {
    if (!stepIsValid(current.value) || !formEl.value) return
    status.value = 'submitting'

    const data = new FormData(formEl.value)
    try {
        if (import.meta.dev) {
            // `nuxt dev` doesn't run the Worker; use `npm run cf:dev` to test real submissions locally.
            console.info('[start-project] dev submission (not sent):', Object.fromEntries(data))
        } else {
            const response = await fetch(projectFormEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(Object.fromEntries(data)),
            })
            const result = (await response.json().catch(() => null)) as { ok?: boolean } | null
            if (!response.ok || !result?.ok) throw new Error(`Form submission failed (${response.status})`)
        }
        status.value = 'success'
        await nextTick()
        resultHeading.value?.focus()
    } catch (error) {
        console.error(error)
        status.value = 'error'
    }
}

const inputClass =
    'mt-2 block w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 transition-colors hover:border-ink/30 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2'
const choiceClass =
    'flex cursor-pointer items-start gap-3 rounded-xl border border-ink/15 bg-white p-4 transition-colors hover:border-ink/40 has-[:checked]:border-ink has-[:checked]:bg-ink/[0.03] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-copper-deep'
</script>

<template>
    <div>
        <!-- Result -->
        <div v-if="status === 'success'" class="rounded-[20px] border border-line bg-white p-7 sm:p-10" role="status">
            <p class="eyebrow">Submitted</p>
            <h2 ref="resultHeading" tabindex="-1" class="mt-4 text-display-md focus:outline-none">
                {{ result.title }}
            </h2>

            <ol v-if="isLaunch" class="mt-8 grid grid-cols-3 gap-2" aria-label="Launch Website progress">
                <li
                    v-for="(stage, index) in ['Choose', 'Confirm', 'Onboard']"
                    :key="stage"
                    class="border-t-2 pt-3 text-sm font-medium"
                    :class="index === 0 ? 'border-ink text-ink' : 'border-ink/15 text-muted'"
                    :aria-current="index === 1 ? 'step' : undefined"
                >
                    <span class="sr-only">{{ index === 0 ? 'Done: ' : index === 1 ? 'Next: ' : 'Then: ' }}</span>
                    {{ stage }}
                </li>
            </ol>

            <h3 class="eyebrow mt-10">What happens next</h3>
            <ol class="mt-5 space-y-5">
                <li v-for="(step, index) in result.steps" :key="step" class="flex gap-4">
                    <span
                        class="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper"
                        aria-hidden="true"
                    >
                        {{ index + 1 }}
                    </span>
                    <span class="pt-1">{{ step }}</span>
                </li>
            </ol>
            <p class="mt-8 text-sm text-muted">
                {{ siteConfig.contact.responseTime }} Questions in the meantime?
                <a :href="`mailto:${siteConfig.contact.email}`" class="text-ink underline underline-offset-4">{{
                    siteConfig.contact.email
                }}</a>
            </p>
            <div class="mt-10">
                <CTAButton to="/work" label="Browse our work" variant="secondary" />
            </div>
        </div>

        <!-- Form -->
        <form
            v-show="status !== 'success'"
            ref="formEl"
            name="start-project"
            method="POST"
            :action="projectFormEndpoint"
            novalidate
            class="rounded-[20px] border border-line bg-white p-6 sm:p-10"
            @submit.prevent="submit"
        >
            <p class="hidden">
                <label>Leave this empty: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
            </p>

            <!-- Progress -->
            <ol class="mb-10 grid grid-cols-3 gap-2" aria-label="Form progress">
                <li
                    v-for="(step, index) in steps"
                    :key="step.id"
                    class="border-t-2 pt-3 text-sm transition-colors"
                    :class="index <= current ? 'border-ink font-medium text-ink' : 'border-ink/15 text-muted'"
                    :aria-current="index === current ? 'step' : undefined"
                >
                    <span class="tabular-nums text-muted">0{{ index + 1 }}</span>
                    <span class="ml-1.5 hidden sm:inline">{{ step.title }}</span>
                    <span v-if="index < current" class="sr-only">(completed)</span>
                </li>
            </ol>

            <!-- Step 1 -->
            <fieldset v-show="current === 0" class="space-y-6">
                <legend class="contents">
                    <h2 :ref="(el) => setHeading(el, 0)" tabindex="-1" class="text-display-sm focus:outline-none">
                        Tell us about you
                    </h2>
                </legend>
                <div class="grid gap-6 sm:grid-cols-2">
                    <label class="block">
                        <span class="text-sm font-medium"
                            >Name <span class="text-copper-deep" aria-hidden="true">*</span></span
                        >
                        <input
                            v-model.trim="form.name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            required
                            :class="inputClass"
                        />
                    </label>
                    <label class="block">
                        <span class="text-sm font-medium"
                            >Email <span class="text-copper-deep" aria-hidden="true">*</span></span
                        >
                        <input
                            v-model.trim="form.email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            :class="inputClass"
                        />
                    </label>
                </div>
                <label class="block">
                    <span class="text-sm font-medium"
                        >Business or organization name <span class="text-copper-deep" aria-hidden="true">*</span></span
                    >
                    <input
                        v-model.trim="form.business"
                        name="business"
                        type="text"
                        autocomplete="organization"
                        required
                        :class="inputClass"
                    />
                </label>
                <label class="block">
                    <span class="text-sm font-medium"
                        >Current website <span class="font-normal text-muted">(if you have one)</span></span
                    >
                    <input
                        v-model.trim="form.website"
                        name="website"
                        type="text"
                        inputmode="url"
                        autocomplete="url"
                        placeholder="yourbusiness.com"
                        :class="inputClass"
                    />
                </label>
            </fieldset>

            <!-- Step 2 -->
            <fieldset v-show="current === 1" class="space-y-8">
                <legend class="contents">
                    <h2 :ref="(el) => setHeading(el, 1)" tabindex="-1" class="text-display-sm focus:outline-none">
                        What are you working on?
                    </h2>
                </legend>
                <div role="radiogroup" aria-labelledby="need-label">
                    <p id="need-label" class="text-sm font-medium">
                        What do you need? <span class="text-copper-deep" aria-hidden="true">*</span>
                    </p>
                    <div class="mt-3 grid gap-3 sm:grid-cols-2">
                        <label v-for="option in needOptions" :key="option.value" :class="choiceClass">
                            <input
                                v-model="form.need"
                                type="radio"
                                name="need"
                                :value="option.value"
                                required
                                class="mt-1 size-4 accent-ink"
                            />
                            <span class="text-[0.9375rem]">{{ option.label }}</span>
                        </label>
                    </div>
                </div>
                <label class="block">
                    <span class="text-sm font-medium">
                        What are you hoping the website accomplishes?
                        <span class="text-copper-deep" aria-hidden="true">*</span>
                    </span>
                    <span class="mt-1 block text-sm text-muted"
                        >Plain answers are perfect — more calls, a clearer offer, a fresh look.</span
                    >
                    <textarea v-model.trim="form.goals" name="goals" rows="5" required :class="inputClass" />
                </label>
            </fieldset>

            <!-- Step 3 -->
            <fieldset v-show="current === 2" class="space-y-6">
                <legend class="contents">
                    <h2 :ref="(el) => setHeading(el, 2)" tabindex="-1" class="text-display-sm focus:outline-none">
                        Which path fits best?
                    </h2>
                </legend>
                <div role="radiogroup" aria-labelledby="type-label">
                    <p id="type-label" class="text-sm font-medium">
                        Preferred project type <span class="text-copper-deep" aria-hidden="true">*</span>
                    </p>
                    <div class="mt-3 space-y-3">
                        <label v-for="option in projectTypeOptions" :key="option.value" :class="choiceClass">
                            <input
                                v-model="form.projectType"
                                type="radio"
                                name="projectType"
                                :value="option.value"
                                required
                                class="mt-1 size-4 accent-ink"
                            />
                            <span>
                                <span class="block font-medium">{{ option.label }}</span>
                                <span class="mt-0.5 block text-sm text-muted">{{ option.description }}</span>
                            </span>
                        </label>
                    </div>
                </div>
                <div v-if="budgetRule" role="radiogroup" aria-labelledby="budget-label" aria-describedby="budget-hint">
                    <p id="budget-label" class="text-sm font-medium">
                        Roughly what budget do you have in mind?
                        <span v-if="budgetRule.required" class="text-copper-deep" aria-hidden="true">*</span>
                        <span v-else class="font-normal text-muted">(optional)</span>
                    </p>
                    <p id="budget-hint" class="mt-1 text-sm text-muted">
                        This helps us recommend the right scope. It’s not a quote.
                    </p>
                    <div class="mt-3 grid gap-3 sm:grid-cols-2">
                        <label v-for="option in budgetOptions" :key="option.value" :class="choiceClass">
                            <input
                                v-model="form.budget"
                                type="radio"
                                name="budget"
                                :value="option.value"
                                :required="budgetRule.required"
                                class="mt-1 size-4 accent-ink"
                            />
                            <span class="text-[0.9375rem]">{{ option.label }}</span>
                        </label>
                    </div>
                </div>
                <p v-if="isLaunch" class="rounded-xl bg-paper p-4 text-sm text-muted">
                    No payment is taken here. We’ll confirm the details with you by email before anything is charged.
                </p>
            </fieldset>

            <p
                v-if="status === 'error'"
                class="mt-8 rounded-xl border border-red-700/30 bg-red-50 p-4 text-sm text-red-900"
                role="alert"
            >
                Something went wrong sending your details. Please try again, or email us at
                <a :href="`mailto:${siteConfig.contact.email}`" class="underline">{{ siteConfig.contact.email }}</a
                >.
            </p>

            <p v-if="current === steps.length - 1" class="mt-8 text-sm text-muted">
                We’ll only use your details to respond to your request. See our
                <NuxtLink to="/privacy" class="text-ink underline underline-offset-4">privacy policy</NuxtLink>.
            </p>

            <div class="mt-10 flex items-center justify-between gap-4 border-t border-line pt-8">
                <button
                    v-if="current > 0"
                    type="button"
                    class="inline-flex h-12 items-center rounded-full px-2 font-medium text-ink/70 hover:text-ink"
                    @click="goTo(current - 1)"
                >
                    Back
                </button>
                <span v-else />

                <button
                    v-if="current < steps.length - 1"
                    type="button"
                    class="group inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 font-medium text-paper transition-colors hover:bg-ink-soft"
                    @click="goTo(current + 1)"
                >
                    Continue
                    <BaseIcon
                        name="arrow-right"
                        class="size-[1.1em] transition-transform group-hover:translate-x-0.5"
                    />
                </button>
                <button
                    v-else
                    type="submit"
                    class="group inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 font-medium text-paper transition-colors hover:bg-ink-soft disabled:opacity-60"
                    :disabled="status === 'submitting'"
                >
                    {{ status === 'submitting' ? 'Sending…' : 'Send project details' }}
                    <BaseIcon
                        name="arrow-right"
                        class="size-[1.1em] transition-transform group-hover:translate-x-0.5"
                    />
                </button>
            </div>
        </form>
    </div>
</template>
