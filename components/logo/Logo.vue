<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 728.7 1000"
    class="mobile-logo"
  >
    <defs>
      <style>
        .cls-1 {
          fill: #d5893d;
        }
        .color-white {
          fill: #fff;
        }
        .color-black {
          fill: #1a1918;
        }
      </style>
    </defs>
    <polygon
      class="cls-1"
      points="272.35 875.12 272.35 1000 0 1000 0 998.72 108.02 875.25 123.39 875.25 123.39 875.12 272.35 875.12"
    />
    <polygon class="cls-1" points="272.35 0 272.35 124.75 109.14 124.75 0 0 272.35 0" />
    <path
      :class="color"
      d="M728.93,599.62q-44.85-63.18-129.1-93.21c39.82-19,70.12-46.34,90.91-82.22S721.86,347,721.86,300.13q0-130.66-88.87-194.46-88.87-63.6-271.37-63.73H317.29V166.69h64.85q90.92,0,140.78,35.6T572.66,308q0,150.63-189.16,150.7H317.29V220.87h-149v642h149V582.77h62.27q123.32,0,182.09,40.77t58.7,123.79c0,49.47-12,86.57-36.14,111.16s-55.31,40.5-93.9,47.7-87.51,11-147.3,11H317.29v124.75h39q208.32,0,312.82-74.74t104.5-217.28Q773.64,663.09,728.93,599.62Z"
      transform="translate(-44.94 -41.94)"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "color-white",
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-logo {
}
</style>
