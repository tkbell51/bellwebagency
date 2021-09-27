<template>
    <main>
<PageHeader :title="'Portfolio'"/>
 <section class="section__portfolio">
      <div class="container">

      <div class="grid grid-cols-2">

              <PortfoliCard v-for="item in portfolio" 
                :key="item.title" 
                :slug="item.slug" 
                :title='item.title' 
                :category='item.category'/>
      </div>
      </div>

    </section>
    </main>
</template>

<script>
    export default {
        data() {
           return {
               portfolio: {}
           }
       },
        async asyncData({$content}) {
            const portfolio = await $content('portfolio').fetch()
            return {
                portfolio
            }
        },
        head() {
    return {
      title: 'Portfolio',
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>