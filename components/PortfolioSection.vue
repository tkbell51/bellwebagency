<template>
  <section class="section__portfolio">
    <div class="container">
      <h2 class="heading-secondary text-center">
        Featured <span class="is-outline">Work</span>
      </h2>
      <div class="portfolio-row flex gap-8">
        <PortfolioCard
          v-for="item in portfolio"
          :key="item.title"
          :comp="item"
          class="lg:w-1/2"
        />
      </div>
      <SectionLink :isHref="false" link="portfolio" :name="'View Our Portfolio'" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [],
    };
  },
  async fetch() {
    this.portfolio = await this.$content("portfolio")
      .only(["slug", "title", "categories", "cardImage", "color"])
      .fetch();
  },
};
</script>

<style lang="scss" scoped>
.portfolio-row {
  @include respond(tab-mid) {
    flex-direction: column;
  }
}
</style>
