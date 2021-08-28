<template>
    <NuxtLink
        class="portfolio-card"
        :to="`/portfoli/${title}`"
        :title="`${title}`"
        :style="{
            background: `url(${backgroundURL})`,
            backgorundSize: 'cover',
        }"
    >
        <span class="portfoli-card__title font-bold">{title}</span></NuxtLink
    >
</template>

<script>
export default {
    props: ['title', 'category','image'],
    computed: {
        backgroundURL() {
            return require(`~/assets/img/portfolio/${this.image}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.portfolio-card {
    @apply relative;
    background-repeat: no-repeat;
}
</style>