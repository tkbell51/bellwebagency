<template>
    <NuxtLink
        class="portfolio-card"
        :to="`/portfolio/${slug}`"
        :title="`${title}`"
        
    >
        <span class="portfoli-card__title font-bold">{{title}}</span></NuxtLink
    >
</template>

<script>
export default {
    props: ['title', 'category','image', 'slug'],
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