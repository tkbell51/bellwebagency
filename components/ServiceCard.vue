<template>
  <div class="service-card rounded">
    <svg-icon :name="`${icon}`" :class="`service-card__icon ${icon}`" />
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["icon", "title"],
};
</script>

<style lang="scss">
.service-card {
  padding: 2rem 3rem;
  transition: $transition;
  box-shadow: $box-shadow;
  border: 0.1px solid rgba($primary-color, 0.1);
  &__icon {
    height: 70px;
    width: 70px;
    margin-bottom: 1rem;
  }
  h4 {
    @apply font-bold my-3;
    font-family: "Montserrat Bold";
    font-size: 1.7rem;
  }
  &:hover {
    background: $primary-color;
    transform: translateY(-10%);
    h4,
    p {
      color: $white;
    }
    & .reviewlead-logo-white {
      width: 270px;
    }
  }
  & .reviewlead .service-card__icon {
    width: 270px;
  }
}
</style>
