<template>
  <div>
    <PageHeader :title="project.title" />
    <section class="section__project-description">
      <div class="container">
        <div class="flex justify-between">
          <div>
            <div class="flex">
              <p v-for="category in project.categories" :key="`${category.id}`" class="categories font-bold px-2 border-r-2 border-black">
                {{ category }}
              </p>
            </div>
          </div>
          <div>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
    };
  },
  async asyncData({ $content, params, error }) {
    const project = await $content("portfolio", params.slug).fetch();
    return {
      project,
    };
  },
};
</script>

<style lang="scss" scoped>
.categories:last-child{
    border: none;
}
</style>
