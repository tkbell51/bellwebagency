<template>
    <section class="section__project-cta ">
      <div class="container">
        <div class="project-cta text-center">

      <h2 class="section-title">Have a project in mind<span class="orange">?</span></h2>
      <p class="subtitle font-bold mb-6 white">Let's Get Started</p>
      <NuxtLink class="primary-btn  inline-block" to="/contact">Start project</NuxtLink>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.project-cta {
  background-color: $primary-color;
  color: $white;
  padding: 6rem 2rem 8rem;
  box-shadow: $box-shadow;
}
</style>