<template>
  <div class="tab  m-auto px-4 md:p-auto" :class="{ active: isActive }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  fetch() {
    this.isActive = false
  },
  data() {
    return {
      isActive: undefined,
    }
  },
}
</script>

<style lang="scss">
.tab {
  display: none;
  transition: $transition;
  &.active {
    display: block;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
