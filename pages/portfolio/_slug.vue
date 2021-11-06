<template>
  <div>
    <PageHeader :title="project.title" />
    <section class="section__project-description">
      <div class="container">
        <div class="project-description flex gap-24">
          <div class="mb-12 w-full md:w-1/2">
            <div class="mb-8">
              <span
                v-for="category in project.categories"
                :key="category.id"
                class="categories font-bold px-2"
              >
                {{ category }}
              </span>
            </div>
            <nuxt-content class="description" :document="project" />

            <div class="section-link">
              <a class="link" :href="project.link" target="_blank"
                ><span class="link-text">Go to website</span></a
              >
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img
              :key="index"
              class="m-auto shadow-lg my-4"
              :src="require(`~/assets/img/portfolio/${project.images[0]}`)"
              :alt="`${project.title}`"
            />
          </div>
        </div>
        <div class="gap-8 grid lg:grid-cols-2 my-8">
          <img
            v-for="(image, index) in project.images.slice(1)"
            :key="index"
            class="m-auto shadow-lg my-4"
            :src="require(`~/assets/img/portfolio/${image}`)"
            :alt="`${project.title}`"
          />
        </div>
      </div>
    </section>
    <ProjectCTA />
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     project: {},
  //   };
  // },
  async asyncData({ $content, params, error }) {
    const project = await $content("portfolio", params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      project,
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
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.section__project-description {
  .categories {
    font-size: $default-font-size;
  }
  .section-link {
    text-align: left;
  }
}
.categories:not(:last-child) {
  border-right: 3px solid $primary-color;
}
.description {
  p {
    margin-bottom: 1rem;
  }
}
</style>
