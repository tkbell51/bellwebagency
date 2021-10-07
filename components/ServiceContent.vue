<template>
  <section :class="`section__service ${direction}`">
    <div class="container">
      <div class="flex justify-content">
        <div class="service__text w-1/2 relative">
        <svg-icon class="dot-grid absolute" name="orange-dots"/>
          <div class="relative z-1">

          <h2 class="section-title">{{ title }}</h2>
          <h3>{{ subtitle }}</h3>
          <p class="mb-3">{{ description }}</p>
          <p class="mb-3 italic">{{ listHeader }} Services Include:</p>
        <slot></slot>
          <CheckList :list="services" />
          <SectionLink :link="`services/${link}`" :name="linkCTA"/>
          </div>
        </div>
        <div class="service__image w-1/2">
          <img v-if="image" :src="require(`~/assets/img/${image}`)" :alt="`${imageAlt}`" />
          <slot v-else name="otherContent"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    listHeader: String,
    direction: String,
    subtitle: String,
    services: Array,
    description: String,
    link: String,
    linkCTA: String,
    image: String,
    imageAlt: String
  },
};
</script>

<style lang="scss" scoped>
.section__service {
  .flex {
    gap: 4.5rem;
  }
  .service {
    &__text {
      .dot-grid {
        left: -8rem;
      }
    }
  }
}
.rtl {
    .service{
        &__text {
            order: 1;
        }
        &__image {
            order: 0;
        }
    }
}
.section-link{
    text-align: left;
    margin-top: 1rem;
}
</style>
