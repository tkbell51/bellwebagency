<template>
    <main>
<PageHeader :title="'Our Work'"/>
 <section class="section__portfolio">
      <div class="container">

      <div class="grid grid-cols-2 gap-4">

              <PortfolioCard v-for="item in portfolio" 
                :key="item.title" 
                :slug="item.slug" 
                :title='item.title' 
                :categories='item.categories'
                :image='item.cardImage'/>
      </div>
      </div>

    </section>
    <ProjectCTA />

    </main>
</template>

<script>
    export default {

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