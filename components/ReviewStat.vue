<template>
  <div class="review-stat m-4 w-full md:w-1/2 lg:w-1/4">
    <h3 class="text-6xl orange">{{ number }}%</h3>
    <p class="text-xl">{{ stat }}</p>
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
  background: $primary-color;
  padding: 2rem;
  transition: $transition;
  box-shadow: $box-shadow;
  border: 0.1px solid rgba($primary-color, 0.1);
    p {
        color: $white;
    }
  &:hover {
    background: $white;
    transform: translateY(-10%);
    p {
      color: $font-color;
    }
    
  }
}
</style>
