<template>
  <div class="review-stat">
    <h3 class="heading-secondary">
      <span class="is-outline">{{ number }}%</span>
    </h3>

    <p class="review-stat__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ["number"],
};
</script>

<style lang="scss" scoped>
.review-stat {
  background: $section-gradient;
  border-radius: 12px;
  padding: 4rem;
  .heading-secondary {
    font-size: 6rem;
    margin: 1rem 0;
  }
  &__text {
    color: $white;
    font-size: 2rem;
  }
}
</style>
