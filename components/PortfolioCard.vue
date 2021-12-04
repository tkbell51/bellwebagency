<template>
  <NuxtLink
    class="portfolio-card shadow-lg hover:shadow-xl"
    :to="`/portfolio/${comp.slug}`"
    :title="`${comp.title}`"
  >
    <div class="portfolio-card__img" :style="cssVars">
      <nuxt-img provider="cloudinary" :src="`portfolio/${comp.cardImage}`" />
    </div>
    <div class="portfolio-card__text z-20">
      <p>{{ comp.categories }}</p>
      <h3 class="portfolio-card__title">
        {{ comp.title }}
      </h3>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    comp: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.comp.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-card {
  border-radius: 12px;
  display: flex;
  position: relative;
  outline: none;
  margin: 0 1rem;
  overflow: hidden;
  height: 30rem;

  &__text {
    @include absCenter;
    z-index: 5;
    opacity: 0;
    transition: $transition;
  }
  &__title {
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 1;
    color: $white;
  }
  &__img {
    background: radial-gradient(rgba($black, 0), rgba($black, 0));
    z-index: 1;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: radial-gradient(rgba(var(--bg-color), 0.7), rgba(var(--bg-color), 1));

      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s;
    }

    img {
      position: relative;
      z-index: -2;
      transition: $transition;
    }
  }

  &:hover {
    .portfolio-card__text {
      opacity: 1;
    }
    .portfolio-card__img::before {
      opacity: 1;
    }
    img {
      filter: grayscale(100%);
    }
    .portfolio-card__overlay {
      display: block;
    }
  }
}
</style>
