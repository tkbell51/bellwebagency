<template>
  <svg
    enable-background="new 0 0 1920 300"
    viewBox="0 0 1920 300"
    xmlns="http://www.w3.org/2000/svg"
    class="bg-curve"
  >
    <defs>
      <style>
        .grey {
          fill: #dbdbdb;
        }
        .white {
          fill: #fcfcfc;
        }
        .gold {
          fill: #d5893d;
        }
      </style>
    </defs>
    <path
      d="m.1 0h-.1v300h1920v-119.1c-900.9 0-1103.9-180.9-1919.9-180.9z"
      :class="color"
    />
  </svg>
</template>

<script>
export default {
  props: ["color"],
};
</script>

<style lang="scss" scoped>
.bg-curve {
  position: absolute;
  bottom: -5px;
  width: 100%;
  transform: scaleX(-1);
}
</style>
