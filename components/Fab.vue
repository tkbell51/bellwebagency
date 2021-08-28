<template>
  <font-awesome-icon :class="`${classes}`" :icon="['fab', i]" />
</template>

<script>
export default {
  props: {
    i: {
      type: String,
      required: true,
      default: 'facebook',
    },
    classes: {
      type: String,
      required: false,
      default: 'icon is-medium',
    },
  },
}
</script>