<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { launchDueToday, launchPlan as plan } from '~/data/pricing'
</script>

<template>
    <article class="on-light rounded-[20px] bg-paper p-7 text-ink sm:p-10" aria-labelledby="launch-plan-title">
        <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 id="launch-plan-title" class="text-display-sm">{{ plan.name }}</h3>
            <span class="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-paper">
                Fixed price
            </span>
        </div>
        <p class="mt-3 max-w-md text-muted">{{ plan.summary }}</p>

        <div class="mt-8 grid gap-6 border-y border-line py-8 sm:grid-cols-2">
            <div>
                <p class="font-display text-[3.5rem] font-semibold leading-none tracking-[-0.04em]">
                    {{ formatPrice(plan.setup.amount) }}
                </p>
                <p class="mt-2 text-sm text-muted">{{ plan.setup.label }}</p>
            </div>
            <div class="sm:border-l sm:border-line sm:pl-6">
                <p class="font-display text-[3.5rem] font-semibold leading-none tracking-[-0.04em]">
                    {{ formatPrice(plan.monthly.amount)
                    }}<span class="text-xl font-medium tracking-tight text-muted">/mo</span>
                </p>
                <p class="mt-2 text-sm text-muted">{{ plan.monthly.name }} — {{ plan.monthly.covers.toLowerCase() }}</p>
            </div>
        </div>

        <h4 class="eyebrow mt-8">Included</h4>
        <ul class="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <li v-for="feature in plan.features" :key="feature" class="flex gap-3 text-[0.9375rem]">
                <BaseIcon name="check" class="mt-0.5 size-5 text-copper-deep" />
                {{ feature }}
            </li>
        </ul>

        <p class="mt-8 rounded-xl bg-white p-4 text-[0.9375rem]">
            <strong class="font-semibold">You’ll review your actual website before it goes live.</strong>
            <span class="text-muted">
                {{ formatPrice(launchDueToday) }} due at checkout<template v-if="plan.monthly.startsAt === 'checkout'">
                    (setup + first month)</template
                >, then {{ formatPrice(plan.monthly.amount) }}/month.</span
            >
        </p>

        <CTAButton
            :to="siteConfig.cta.primary.to"
            :label="siteConfig.cta.primary.label"
            size="lg"
            class="mt-8 w-full sm:w-auto"
        />
        <p class="mt-6 text-sm leading-relaxed text-muted">
            {{ plan.finePrint }}
            <NuxtLink to="/terms" class="underline underline-offset-4 hover:text-ink">See terms</NuxtLink>.
        </p>
    </article>
</template>
