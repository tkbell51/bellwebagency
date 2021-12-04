<template>
  <main>
    <PageHeader firstTitle="Featured" secondTitle="Work" />
    <section class="section__portfolio">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PortfolioCard v-for="item in portfolio" :key="item.title" :comp="item" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const portfolio = await $content("portfolio")
      .only(["slug", "title", "categories", "cardImage", "color"])
      .fetch();
    return {
      portfolio,
    };
  },
  head() {
    return {
      title: "Portfolio",
    };
  },
};
</script>

<style lang="scss" scoped></style>
