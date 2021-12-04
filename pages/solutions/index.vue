<template>
  <main class="solutions-page">
    <PageHeader
      firstTitle="We'll Help you"
      secondTitle="Grow your Reach"
      pageDescription="If you're in need of an awesome webiste or need digital marketing to reach your target audience, we have the expertise to help you reach your goals!"
    />

    <section class="section__web-design">
      <div class="container">
        <nuxt-img src="img/design.jpg" class="mx-auto w-full rounded-2xl" />
        <div class="service__text">
          <div>
            <h2 class="heading-secondary mt-4">
              Web Design &amp; <br /><span class="is-outline">Branding</span>
            </h2>
            <p>
              A great looking design doesn't only look nice, it will help your brand reach
              new levels. A custom build website for your unique business is not only
              functional, but moves your audience and customers to action.
            </p>
          </div>
          <div class="service__list whitespace-nowrap relative py-8">
            <span class="include">Services Include</span>
            <ul class="mt-8 px-12">
              <li v-for="item in webDesign" :key="item.title">
                <NuxtLink :to="`solutions/${item.link}`"
                  ><span class="arrow mr-4">-</span>{{ item.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section__web-design">
      <div class="container">
        <nuxt-img src="img/marketing.jpg" class="mx-auto w-full rounded-2xl" />
        <div class="service__text">
          <div class="service__list whitespace-nowrap relative py-8">
            <span class="include">Services Include</span>
            <ul class="mt-8 px-12">
              <li v-for="item in marketing" :key="item.title">
                <NuxtLink :to="`solutions/${item.link}`"
                  ><span class="arrow mr-4">-</span>{{ item.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="heading-secondary mt-4">
              Digital <br /><span class="is-outline">Marketing</span>
            </h2>
            <p>
              Your passion and vision needs an audience. We construct strategies and
              campaigns to reach everyone looking for what you have to offer.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Vision />
    <PortfolioSection />
  </main>
</template>

<script>
export default {
  data() {
    return {
      webDesign: [
        { title: "Branding", link: "branding" },
        { title: "Custom Web Design", link: "web-design" },
        { title: "Web Maintenace", link: "maintenance" },
      ],
      marketing: [
        { title: "Review Reputation Management", link: "review-management" },
        { title: "Search Engine Optimization", link: "seo" },
      ],
    };
  },
  head() {
    return {
      title: `Solutions`,
    };
  },
};
</script>

<style lang="scss">
.solutions-page {
  .page-header {
    background: $hero-gradient,
      center / cover no-repeat url("~/assets/img/solutions-bg.jpg") !important;
  }
}
.service__text {
  @apply flex justify-between mx-auto gap-8;
  width: 90%;

  @include respond(tab-mid) {
    flex-direction: column;
    // width: 100%;
  }
  & > div {
    width: 50%;
    @include respond(tab-mid) {
      width: 100%;
    }
  }
}
.service__list {
  margin-top: -14rem;
  background: $section-gradient;
  align-self: center;
  border-radius: 12px;
  .include {
    background: $secondary-color;
    padding: 0.5rem 1rem;
    display: inline-block;
    font-size: $default-font-size;
  }
  a {
    color: $white;
    font-size: 2.2rem;
    transition: $transition;
    &:hover {
      color: $secondary-color;
    }
  }
  @include respond(tab-mid) {
    align-self: flex-start;
    margin-top: -5rem;
    margin-bottom: 2rem;
    order: -1;
  }
}
</style>
