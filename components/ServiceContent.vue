<template>
  <section :class="`section__service ${direction}`">
    <div class="container">
      <div class="md:flex justify-content items-center gap-4">
        <div class="service__text md:w-3/4 relative">
          <!-- <svg-icon class="dot-grid absolute" name="orange-dots" /> -->
          <div class="relative z-1">
            <h2 class="heading-secondary">{{ title }}</h2>
            <h3 v-if="subtitle" class="heading-tertiary">
              {{ subtitle }}
            </h3>
            <p class="mb-3 w-3/4">{{ description }}</p>
            <p class="mb-3 italic">{{ listHeader }} Services Include:</p>
            <slot></slot>
            <CheckList :list="services" />
            <SectionLink :isHref="isHref" :link="link" :name="linkCTA" />
          </div>
        </div>
        <div class="service__image md:w-1/2 my-8 md:my-0">
          <img
            v-if="image"
            :src="require(`~/assets/img/${image}`)"
            :alt="`${imageAlt}`"
          />
          <slot v-else name="otherContent"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    listHeader: String,
    direction: String,
    subtitle: String,
    services: Array,
    description: String,
    link: String,
    linkCTA: String,
    image: String,
    imageAlt: String,
    isHref: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.section__service {
  .flex {
    gap: 4.5rem;
  }
  .service {
    &__text {
      .heading-secondary {
        margin-bottom: 2rem;
      }
      .heading-tertiary {
        margin-bottom: 2rem;
      }
      .dot-grid {
        left: -11rem;
        top: -6rem;
        @include respond(tab-port) {
          display: none;
        }
      }
    }
  }
  &.review {
    padding: 8rem 0;
  }
}
.rtl {
  .service {
    &__text {
      order: 1;
    }
    &__image {
      order: 0;
    }
  }
}
.section-link {
  text-align: left;
  margin-top: 1rem;
}
</style>
