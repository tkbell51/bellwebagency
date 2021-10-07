<template>
  <NuxtLink
    class="portfolio-card"
    :to="`/portfolio/${slug}`"
    :title="`${title}`"
    :style="{
      background: `url(${backgroundURL})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="portfolio-card__title heading-secondary font-bold"><span>{{ title }}</span><span></span></div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["title", "categories", "image", "slug"],
  computed: {
    backgroundURL() {
      return require(`~/assets/img/portfolio/${this.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-card {
  @apply relative;
  background-repeat: no-repeat;
  height: 28rem;
  position: relative;
  overflow: hidden;
  &__title {
    color: white;
    position: absolute;
    bottom: 0;
    background: $primary-color;
    height: 50%;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    transform: translateY(100%);
    transition: $transition;
  }
  &:hover &__title {
    transform: translateY(0%);
  }
}
</style>
