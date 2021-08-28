<template>
  <font-awesome-icon :class="`${classes}`" :icon="['fas', i]" />
</template>

<script>
export default {
  props: {
    i: {
      type: String,
      required: true,
      default: 'arrow-down',
    },
    classes: {
      type: String,
      required: false,
      default: 'icon is-medium',
    },
  },
}
</script>