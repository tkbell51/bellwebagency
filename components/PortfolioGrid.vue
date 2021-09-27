<template>
    <div>
        <PortfoliCard v-for="item in portfolio" :key="item.title" :title='item.title' :category='item.category'/>
    </div>
</template>

<script>
    export default {
       data() {
           return {
               portfolio: []
           }
       },
        async asyncData({$content}) {
            const portfolio = await $content('portfolio').fetch()
            return {
                portfolio
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>