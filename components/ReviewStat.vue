<template>
  <div class="review-stat">
    <h3 class="orange">{{ number }}%</h3>

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
  @apply rounded shadow-xl;
  background: linear-gradient(45deg, lighten($primary-color, 10%), $primary-color);
  padding: 4rem;
  transition: $transition;
  box-shadow: $box-shadow;
  border: 0.1px solid rgba($primary-color, 0.1);
  h3 {
    font-size: 6rem;
    margin: 4rem 0;
  }
  &__text {
    color: $white;
    font-size: 2rem;
  }
}
</style>
