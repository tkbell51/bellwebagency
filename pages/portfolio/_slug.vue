<template>
  <div>
    <PageHeader :title="project.title" />
    <section class="section__project-description ">
      <div class="container">
        <div class="project-descript__grid grid grid-cols-1 md:grid-cols-2">
          <div>
            <div class="flex ">
              <p
                v-for="category in project.categories"
                :key="category.id"
                class="categories font-bold px-2 border-r-2 border-black"
              >
                {{ category }}
              </p>
            </div>
            <p>{{ project.description }}</p>
          </div>
          <div>
            <img
              class="m-auto shadow-xl"
              :src="require(`~/assets/img/portfolio/${project.webImage}`)"
              :alt="`${project.title}`"
            />
          </div>
        </div>
      </div>
    </section>
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
    const project = await $content("portfolio", params.slug).fetch();
    return {
      project,
    };
  },
  head() {
    return {
      title: `${this.project.title} | Bell Web Agency`,
    }
  }
};
</script>

<style lang="scss" scoped>
.section__project-description {
  img {
    width: 100%;
  }
}
.categories:last-child {
  border: none;
}
</style>
