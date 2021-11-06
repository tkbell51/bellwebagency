<template>
  <main>
    <PageHeader :title="'About Us'" />
    <section class="section__mission">
      <div class="container">
        <div class="mission__flex flex gap-24 flex-col md:flex-row">
          <div>
            <p class="heading-secondary">
              We're a small business like you may be, but just like you, we expect BIG
              things!
            </p>
          </div>
          <div>
            <p>
              At Bell Web Agency, our Mission is to provide the best digital tools to help
              assist our clients meet their goals and needs. After discussing your needs,
              we will present you with the best web design that promote growth in your
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section__about">
      <div class="container">
        <div class="about__flex flex gap-24 flex-col md:flex-row">
          <div class="about__left w-10/12 mb-8">
            <h2 class="heading-secondary">Tim Bell</h2>
            <p class="heading-tertiary font-bold mb-3">Founder / Designer</p>

            <p>
              I come from a family that desires to do two things: Create and Help. Those
              two virtues have built many entrepreneurs that have gone on to do amazing
              things in my family. The Bell Web Agency is my way of helping my community
              and beyond reach the goals they desire. I’m happy to use my creativity to do
              that!
            </p>
          </div>
          <div class="about-img-wrapper">
            <img src="~assets/img/headshot.jpg" alt="Tim Bell" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "About Us",
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  &__left .heading-secondary {
    display: inline-block;
    border-bottom: 3px solid $secondary-color;
  }
  &-img-wrapper {
    img {
      @apply rounded-xl shadow-xl w-3/4 m-auto;
      box-shadow: 10px 10px $secondary-color;
    }
  }
}
</style>
