<template>
  <div class="review-stat">
    <h3 class="orange">{{ number }}%</h3>
    <p class="">{{ stat }}</p>
  </div>
</template>

<script>
export default {
  props: ["number", "stat"],
};
</script>

<style lang="scss" scoped>
.review-stat {
  @apply rounded shadow-xl;
  background: linear-gradient(45deg, lighten($primary-color, 10%), $primary-color);
  padding: 2rem;
  transition: $transition;
  box-shadow: $box-shadow;
  border: 0.1px solid rgba($primary-color, 0.1);
  h3 {
    font-size: 4rem;
    margin: 2rem 0;
  }
  p {
    color: $white;
  }
  
}
</style>
