<template>
  <div class="section-link">
    <NuxtLink class="link" :to="`/${link}`"
      ><span class="link-text">{{ name }}</span></NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: ["link", "name"],
};
</script>

<style lang="scss" scoped>
.section-link {
  @apply text-center;
  margin-top: 4rem;
  .link {
    &-text {
      @apply font-bold;
      color: $secondary-color;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 18px;
      letter-spacing: 2px;
      transition: $transition;
      margin: 0 13px 18px;

      &::before {
        height: 2px;
        width: 100%;
        left: 0;
        bottom: 10px;
        content: "";
        position: absolute;
        background-color: $secondary-color;
        z-index: 0;
        transition: $transition;
      }
      &:hover {
        color: $white;
        transform: translateY(-5px);
        margin: 0;
        padding: 0 13px 18px;
        &::before {
          @apply rounded;
          height: 100%;
          z-index: -1;
        }
      }
    }
  }
}
</style>
