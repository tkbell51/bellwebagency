<template>
  <div class="card service-card">
    <div class="card__content service-card__content">
      <svg-icon :name="icon" class="service-card__icon" />

      <h3 class="service-card__title">
        {{ title }}
      </h3>
      <p class="service-card__text">{{ text }}</p>
      <NuxtLink class="service-card__link mt-auto" :to="`/solutions/${link}`">
        Learn More
        <Fas class="service-card__arrow" i="arrow-right" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "link", "buttonText", "text", "img"],
};
</script>

<style lang="scss">
.service-card {
  &__icon {
    width: 6rem;
    height: 6rem;
    margin-bottom: 3rem;
    @include respond(tab-port) {
      display: none;
    }
  }

  &__title {
    font-size: 3rem;
    width: 80%;
    line-height: 1;
    margin-bottom: 2rem;
    @include respond(tab-mid) {
      width: 100%;
    }
  }

  &__text {
    margin-bottom: 2rem;
  }
  &__link {
    transition: $transition;
    color: $secondary-color;
    &:hover {
      margin-left: 0.5rem;

      .service-card__arrow {
        margin-left: 1.5rem;
      }
    }
  }

  &__arrow {
    transition: $transition;
    color: darken($secondary-color, 10%);
    margin-left: 0.5rem;
    margin-bottom: 0 !important;
    height: 1em !important;
  }

  @include respond(tab-mid) {
    width: 100%;
    margin: 1rem auto;
  }
}
</style>
