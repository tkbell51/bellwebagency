<template>
  <section class="section__what-offer relative">
    <bg-curve color="grey" class="top-curve" />

    <div class="container">
      <div class="what-offer">
        <h2 class="heading-secondary">What we Offer</h2>
        <div class="grid">
          <OfferCard v-for="item in offer" :key="item.title" :info="item" />
        </div>
      </div>
    </div>
    <bg-curve color="white" class="bottom-curve" />
  </section>
</template>

<script>
export default {
  props: {
    offer: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.section__what-offer {
  background: $grey;
  padding: 0;
  margin-top: -22rem;
  .what-offer {
    // margin-bottom: rem;
    padding-top: 10rem;
    padding-bottom: 30rem;
    // padding-bottom: 20rem 0 4rem;
    .heading-secondary {
      margin-bottom: 4rem;
    }
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
      grid-gap: 4rem;
    }
  }
  .top-curve {
    // transform: scaleY(-1);

    top: -20rem;
    bottom: auto;
    @include respond(tab-mid) {
      top: -10rem;
    }
    @include respond(tab-port) {
      top: -8rem;
    }
  }
  .bottom-curve {
  }
  .bg-curve {
    // bottom: -19rem;
  }
}
</style>
