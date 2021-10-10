<template>
  <div class="faq-accordion-combo">
    <button class="faq-accordion-combo__trigger" type="button" @click.prevent="toggle">
      <div class="faq-accordion-combo__trigger-inner">
        <h3 class="faq-accordion-combo__trigger-label heading-tertiary">{{ label }}</h3>
        <Fas class="header-icon orange" i="caret-down" :class="{ rotate: active }" />
      </div>
    </button>
    <Accordion :expanded="active" :duration="duration">
      <div class="faq-accordion-combo__content">
        <p>{{ description }}</p>
      </div>
    </Accordion>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: undefined,
    },
  },
  data: () => ({
    active: false,
  }),
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-accordion-combo {
  font-size: inherit;

  & + & {
    margin-top: 10px;
  }
  &__trigger {
    width: 100%;
    background: none;

    appearance: none;
    padding: 0;
  }
  &:focus {
    outline: none;
  }
  &__trigger-inner {
    @apply flex justify-between items-center py-4 px-4 cursor-pointer;
    border-bottom: 2px solid $secondary-color-light;
    .header-icon {
      font-size: 2.5rem;

      &.rotate {
        transform: rotate(180deg);
        transition-duration: 0.3s;
      }
    }
  }
  &__trigger-label {
    text-align: left;
    margin-right: 16px;
  }
  &__content {
    padding: 12px 16px;
    border-top: 1px solid orange;
  }
}
</style>
