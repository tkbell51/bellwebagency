<template>
  <div class="card">
    <div class="card__content">
      <h3>{{ info.title }}</h3>
      <hr class="card__border w-1/3 mt-4 mb-7 rounded" />
      <p>{{ info.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0;
  &__border {
    border-top: 4px solid $secondary-color;
  }
  h3 {
    font-size: 3rem;
    line-height: 1.2;
  }
  @media only screen and(min-width: 56.25em) {
    &:hover {
      p {
        color: $white;
      }
    }
  }
}
</style>
