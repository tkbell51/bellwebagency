<template>
  <div>
    <ul class="tabs__header gap-8 flex justify-center">
      <li
        v-for="(tab, index) in tabs"
        :id="tab.label"
        :key="tab.title"
        :class="{ tab__selected: index == selectedIndex }"
        class="text-3xl uppercase font-semibold"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    }
  },
  mounted() {
    this.selectTab(0)
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs__header {
  display: flex;

  padding: 0.5rem 0;
  margin-bottom: 1rem;

  li {
    @apply px-4 py-1 relative text-lg;
    cursor: pointer;
    color: $black;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $secondary-color;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    // color: #cacaca;
    &:hover {
      &::before {
        visibility: visible;
        transform: scaleX(1);
      }
      // color: $black;
    }
  }
  .tab__selected {
    @apply font-semibold rounded;
    background: $secondary-color;
    color: $white;
    // color: $black !important;
  }
}
.section_book-tabs {
  .book-tabs {
    &__btn {
      @apply px-4 py-1 relative text-lg;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: $secondary-color;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
      }
      &:hover {
        &::before {
          visibility: visible;
          transform: scaleX(1);
        }
      }
      &.selected {
        @apply font-semibold rounded;
        background: $secondary-color;
        color: $white;
      }
    }
  }
}
</style>
