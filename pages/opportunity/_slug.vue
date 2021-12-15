<template>
  <main>
    <section class="opportunity-header">
      <div class="container">
        <div class="opportunity-header__content w-full flex justify-between gap-16">
          <Logo class="w-24" />
          <div class="opportunity-header__text text-center">
            <p>Video Recorded LIVE On:</p>
            <p>
              {{ formatDate(comp.createdAt) }}
            </p>
            <p>for {{ comp.name }}</p>
            <p>By: Tim Bell</p>
          </div>
          <div class="opportunity-header__img">
            <nuxt-img
              provider="cloudinary"
              :src="`companies/${comp.img}`"
              class="shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h2 class="heading-secondary text-center">
          In this video, I'll show you how {{ comp.name }}'s <br />
          <span class="orange"> BIGGEST opportunity</span><br />
          is quick & easy to address
        </h2>
        <div class="flex flex-col lg:flex-row gap-8">
          <iframe
            width="640"
            height="328"
            :src="`https://www.loom.com/embed/${comp.video}`"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            class="mx-auto"
          ></iframe>
          <div class="mx-auto">
            <p class="font-bold">
              Watch the vide on the left. Here is my contact information
            </p>
            <p>Tim Bell</p>
            <p>Bell Web Agency</p>
            <a class="block" href="mailto.info@bellwebagency.com"
              >info@bellwebagency.com</a
            >
            <a class="block" href="tel:8643679008">864-367-9008</a>
            <a
              href="https://calendly.com/bellwebagency/initial-discussion"
              class="btn block"
              target="_blank"
              ><span class="text-5xl">Yes, Let's Talk About this</span><br />Click to
              Schedule a 15 Minute Call on My Calendar</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="section__footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Bell Web Agency. All Rights Reserved</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "opportunity",
  async asyncData({ $content, params, error }) {
    const comp = await $content("opportunity", params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      comp,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss" scoped>
.opportunity-header {
  background: $section-gradient;
  &__content {
    // margin: 4rem 0;
    @include respond(tab-port) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__text {
    color: $white;

    p {
      color: $white;
    }
  }
  &__img {
    @include respond(tab-port) {
      margin: 0 auto;
    }
  }
}
.section__footer {
  background: $section-gradient;
  p {
    color: $grey;
  }
}
</style>
