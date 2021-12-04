<template>
  <div>
    <section class="portfolio-header">
      <div class="container">
        <div class="portfolio-header__content w-full flex justify-between gap-16">
          <div class="portfolio-header__content--text">
            <h1 class="heading-primary">
              {{ project.firstTitle }}<br /><span
                v-if="project.secondTitle"
                class="is-outline"
              >
                {{ project.secondTitle }}
              </span>
            </h1>
            <p class="text-white">
              {{ project.description }}
            </p>
          </div>
          <div v-if="project.headerImage" class="portfolio-header__img mx-auto">
            <nuxt-img
              provider="cloudinary"
              :src="`portfolio/${project.headerImage}`"
              class="shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
      <bg-curve color="white" />
    </section>
    <section>
      <div class="container">
        <nuxt-img provider="cloudinary" :src="`portfolio/${project.mockImage}`" />
      </div>
    </section>
    <section class="section__project-description">
      <div class="container">
        <div class="flex gap-4">
          <nuxt-img
            provider="cloudinary"
            class="m-auto shadow-lg my-4 w-full md:w-3/5"
            :src="`portfolio/${project.fullImg}`"
            :alt="`${project.title}`"
          />
          <div class="">
            <nuxt-img
              v-for="(image, index) in project.images"
              :key="index"
              provider="cloudinary"
              class="m-auto shadow-lg my-4"
              :src="`portfolio/${image}`"
              :alt="`${project.title}`"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex justify-around">
          <div class="text-center">
            <p class="heading-tertiary">URL</p>
            <a :href="project.link" target="_blank">{{ project.link }}</a>
          </div>
          <div class="text-center">
            <p class="heading-tertiary">Launched</p>
            <p>{{ project.year }}</p>
          </div>
        </div>
      </div>
    </section>
    <Vision />
    <!-- <PortfolioSection /> -->
    <section class="section__pagination">
      <div class="container">
        <div class="pagination">
          <NuxtLink
            v-if="prev"
            :to="{ name: 'portfolio-slug', params: { slug: prev.slug } }"
            class="prev heading-secondary text-right"
          >
            <p>Previous Website</p>
            <span class="is-outline">{{ prev.title }}</span>
          </NuxtLink>
          <Logo color="color-black" class="pagination__logo" />
          <NuxtLink
            v-if="next"
            :to="{ name: 'portfolio-slug', params: { slug: next.slug } }"
            class="next heading-secondary"
          >
            <p>Next Website</p>

            <span class="is-outline">{{ next.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const project = await $content("portfolio", params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });
    const [prev, next] = await $content("portfolio")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      project,
      prev,
      next,
    };
  },
  head() {
    return {
      title: `${this.project.title}`,
      meta: [
        {
          hid: "title",
          name: "title",
          content: `${this.project.title}`,
          description: this.project.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.portfolio-header {
  background: $section-gradient;
  position: relative;

  &__content {
    position: relative;
    margin: 13rem 0 15rem;
    @include respond(tab-mid) {
      flex-wrap: wrap;
    }

    &--text {
      width: 85%;
      padding-bottom: 5rem;

      .heading-primary {
        font-size: clamp(5rem, 8vw, 9rem);

        line-height: 1;
        margin-bottom: 3rem;
        position: relative;
        z-index: 2;
      }
      p {
        width: 65%;
        font-size: clamp(1.6rem, 2.5vw, 2rem);
        margin: 4rem 0;
        @include respond(tab-port) {
          width: 80%;
        }
      }

      @include respond(tab-port) {
        width: 100%;
        padding-bottom: 0;
      }
    }

    @include respond(tab-port) {
      margin: 10rem 0 11rem;
    }
  }
  &__img {
    @include respond(tab-port) {
      width: 65%;
      margin: 0;
    }
  }
  .bg-curve {
    margin-top: 5rem;
  }
}
.section__pagination {
  padding: 2rem 0;
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    @include respond(tab-small) {
      display: block;
    }

    &__logo {
      width: 8rem;
      @include respond(tab-small) {
        display: none;
      }
    }

    .prev,
    .next {
      width: 45%;
      &:hover .is-outline {
        color: $black;
      }
    }

    .is-outline {
      transition: $transition;
    }
  }
}
</style>
