<script setup lang="ts">
import type { ProjectFitAnswers } from '~/composables/useProjectStart'
import { lookingForOptions, scopeOptions } from '~/data/project-start'

/**
 * Quick Project Fit: two short steps, then `complete`. Nothing is sent from here — the recommendation
 * step submits once the visitor chooses a path. Detailed content belongs in the post-purchase brief.
 */
const answers = defineModel<ProjectFitAnswers>({ required: true })
const emit = defineEmits<{ complete: [] }>()

const { track } = useFunnel()

const steps = [
    { id: 'business', title: 'You & your business' },
    { id: 'project', title: 'Your project' },
] as const

const current = ref(0)
const formEl = ref<HTMLFormElement>()
const headings: HTMLElement[] = []
const setHeading = (el: unknown, index: number) => {
    if (el && typeof el === 'object' && 'focus' in el) headings[index] = el as HTMLElement
}

let started = false
function markStarted() {
    if (started) return
    started = true
    track('project_fit_started')
}

/** Validate the visible step with the browser's built-in constraint validation. */
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
    headings[index]?.focus()
}

function finish() {
    if (!stepIsValid(current.value)) return
    track('project_fit_completed', { lookingFor: answers.value.lookingFor, scope: answers.value.scope })
    emit('complete')
}

const inputClass =
    'mt-2 block w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 transition-colors hover:border-ink/30 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2'
const choiceClass =
    'flex cursor-pointer items-start gap-3 rounded-xl border border-ink/15 bg-white p-4 transition-colors hover:border-ink/40 has-[:checked]:border-ink has-[:checked]:bg-ink/[0.03] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-copper-deep'
</script>

<template>
    <form
        ref="formEl"
        novalidate
        class="rounded-[20px] border border-line bg-white p-6 sm:p-10"
        @submit.prevent="current < steps.length - 1 ? goTo(current + 1) : finish()"
        @input.once="markStarted"
    >
        <ol class="mb-10 grid grid-cols-3 gap-2" aria-label="Progress">
            <li
                v-for="(step, index) in steps"
                :key="step.id"
                class="border-t-2 pt-3 text-sm"
                :class="index <= current ? 'border-ink font-medium text-ink' : 'border-ink/15 text-muted'"
                :aria-current="index === current ? 'step' : undefined"
            >
                <span class="tabular-nums text-muted">0{{ index + 1 }}</span>
                <span class="ml-1.5 hidden sm:inline">{{ step.title }}</span>
                <span v-if="index < current" class="sr-only">(completed)</span>
            </li>
            <li class="border-t-2 border-ink/15 pt-3 text-sm text-muted">
                <span class="tabular-nums">03</span>
                <span class="ml-1.5 hidden sm:inline">Recommendation</span>
            </li>
        </ol>

        <!-- Step 1 -->
        <fieldset v-show="current === 0" class="space-y-6">
            <legend class="contents">
                <h2 :ref="(el) => setHeading(el, 0)" tabindex="-1" class="text-display-sm focus:outline-none">
                    Tell us about you and your business
                </h2>
            </legend>
            <div class="grid gap-6 sm:grid-cols-2">
                <label class="block">
                    <span class="text-sm font-medium"
                        >Name <span class="text-copper-deep" aria-hidden="true">*</span></span
                    >
                    <input
                        v-model.trim="answers.name"
                        name="name"
                        type="text"
                        autocomplete="name"
                        required
                        maxlength="120"
                        :class="inputClass"
                    />
                </label>
                <label class="block">
                    <span class="text-sm font-medium"
                        >Email <span class="text-copper-deep" aria-hidden="true">*</span></span
                    >
                    <input
                        v-model.trim="answers.email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        maxlength="254"
                        :class="inputClass"
                    />
                </label>
            </div>
            <div class="grid gap-6 sm:grid-cols-2">
                <label class="block">
                    <span class="text-sm font-medium"
                        >Business name <span class="text-copper-deep" aria-hidden="true">*</span></span
                    >
                    <input
                        v-model.trim="answers.business"
                        name="business"
                        type="text"
                        autocomplete="organization"
                        required
                        maxlength="160"
                        :class="inputClass"
                    />
                </label>
                <label class="block">
                    <span class="text-sm font-medium"
                        >Current website <span class="font-normal text-muted">(if you have one)</span></span
                    >
                    <input
                        v-model.trim="answers.website"
                        name="website"
                        type="text"
                        inputmode="url"
                        autocomplete="url"
                        placeholder="yourbusiness.com"
                        maxlength="300"
                        :class="inputClass"
                    />
                </label>
            </div>
            <label class="block">
                <span class="text-sm font-medium"
                    >What does your business do? <span class="text-copper-deep" aria-hidden="true">*</span></span
                >
                <span class="mt-1 block text-sm text-muted">A sentence or two is plenty.</span>
                <textarea
                    v-model.trim="answers.businessDescription"
                    name="businessDescription"
                    rows="3"
                    required
                    maxlength="1000"
                    :class="inputClass"
                />
            </label>
        </fieldset>

        <!-- Step 2 -->
        <fieldset v-show="current === 1" class="space-y-8">
            <legend class="contents">
                <h2 :ref="(el) => setHeading(el, 1)" tabindex="-1" class="text-display-sm focus:outline-none">
                    What are you looking for?
                </h2>
            </legend>
            <div role="radiogroup" aria-labelledby="looking-for-label">
                <p id="looking-for-label" class="text-sm font-medium">
                    I’m looking for… <span class="text-copper-deep" aria-hidden="true">*</span>
                </p>
                <div class="mt-3 grid gap-3 sm:grid-cols-2">
                    <label v-for="option in lookingForOptions" :key="option.value" :class="choiceClass">
                        <input
                            v-model="answers.lookingFor"
                            type="radio"
                            name="lookingFor"
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
                <textarea
                    v-model.trim="answers.goals"
                    name="goals"
                    rows="3"
                    required
                    maxlength="2000"
                    :class="inputClass"
                />
            </label>
            <div role="radiogroup" aria-labelledby="scope-label">
                <p id="scope-label" class="text-sm font-medium">
                    Do you think you need… <span class="text-copper-deep" aria-hidden="true">*</span>
                </p>
                <div class="mt-3 grid gap-3 sm:grid-cols-2">
                    <label v-for="option in scopeOptions" :key="option.value" :class="choiceClass">
                        <input
                            v-model="answers.scope"
                            type="radio"
                            name="scope"
                            :value="option.value"
                            required
                            class="mt-1 size-4 accent-ink"
                        />
                        <span class="text-[0.9375rem]">{{ option.label }}</span>
                    </label>
                </div>
            </div>
            <label class="block">
                <span class="text-sm font-medium"
                    >Anything else we should know? <span class="font-normal text-muted">(optional)</span></span
                >
                <textarea v-model.trim="answers.notes" name="notes" rows="3" maxlength="2000" :class="inputClass" />
            </label>
        </fieldset>

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
                type="submit"
                class="group inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 font-medium text-paper transition-colors hover:bg-ink-soft"
            >
                {{ current < steps.length - 1 ? 'Continue' : 'See my recommendation' }}
                <BaseIcon name="arrow-right" class="size-[1.1em] transition-transform group-hover:translate-x-0.5" />
            </button>
        </div>
    </form>
</template>
