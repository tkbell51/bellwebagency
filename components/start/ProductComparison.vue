<script setup lang="ts">
import type { ProductPath } from '~/types'

/** Launch Website vs Custom Project, with the questionnaire's recommendation highlighted. */
defineProps<{ recommended: ProductPath }>()
const selected = defineModel<ProductPath>({ required: true })

const paths: ProductPath[] = ['launch', 'custom']
</script>

<template>
    <fieldset>
        <legend class="eyebrow mb-4">Choose your website</legend>
        <div class="grid gap-3 sm:grid-cols-2">
            <ProductOption
                v-for="path in paths"
                :key="path"
                :path="path"
                :recommended="path === recommended"
                :selected="path === selected"
                @select="selected = $event"
            />
        </div>
    </fieldset>
</template>
