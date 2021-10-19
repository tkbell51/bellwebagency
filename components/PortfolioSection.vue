<template>
    <section class="section__portfolio">
        <div class="container">
            <h2 class="heading-secondary text-center">
                Want to see the websites we've designed?
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PortfolioCard
                    v-for="item in portfolio"
                    :key="item.title"
                    :slug="item.slug"
                    :title="item.title"
                    :categories="item.categories"
                    :image="item.cardImage"
                />
            </div>
            <SectionLink
                :isHref="false"
                link="portfolio"
                :name="'View Our Portfolio'"
            />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            portfolio: {},
        }
    },
    async fetch() {
        this.portfolio = await this.$content('portfolio').fetch()
    },
}
</script>

<style lang="scss" scoped>
</style>