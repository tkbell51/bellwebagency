<template>
  <section class="section__project-cta">
    <div class="container">
      <div class="project-cta text-center">
        <h2 class="heading-secondary white">
          Have a project in mind<span class="orange">?</span>
        </h2>
        <a
          class="btn"
          target="_blank"
          href="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f"
          >Start Project</a
        >
        <!-- <NuxtLink class="btn" to="/contact">Start Project</NuxtLink> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.project-cta {
  background: radial-gradient(lighten($primary-color, 10%), $primary-color);
  color: $white;
  padding: 6rem 2rem 8rem;
  box-shadow: $box-shadow;
  .heading-secondary {
    margin-bottom: 1rem;
  }
  .heading-tertiary {
    @apply font-bold text-white;
    margin-bottom: 2rem;
  }
}
</style>
