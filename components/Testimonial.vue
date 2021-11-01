<template>
  <section class="section__testimonials">
    <div class="container">
      <h2 class="heading-secondary text-center white">
        What our <span class="orange">customers</span> are saying
      </h2>
      <!-- <svg-icon class="quotemark" name="quotemark" /> -->

      <VueSlickCarousel ref="slick" v-bind="settings">
        <div v-for="(item, index) in testimonials" :key="index" :title="item.name">
          <div class="quote">
            <p class="quote__text">"{{ item.text }}"</p>

            <div class="quote__header gap-4 mb-3">
              <div class="quote__img">
                <img
                  :src="require(`~/assets/img/testimonials/${item.imgSrc}`)"
                  :alt="`${item.imgAlt}`"
                />
              </div>
              <div>
                <p class="quote__text--name font-bold">{{ item.name }}</p>
                <p class="quote__text--company mb-3">{{ item.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 0,
          name: "Kervin K. Searles",
          imgSrc: "kervin-searles.png",
          imgAlt: "Gravity Counseling Group",
          text:
            "Tim’s website design not only met my approval but exceeded my expectations. He is knowledgeable, creative, and personable. He is patient, understanding, and willing to provide revisions as needed, with a quick turnaround. The end result is a website that is a reflection of our current identity and vision. I am certain we will continue our partnership as we grow.",
          company: "Gravity Counseling Group",
        },

        {
          id: 1,
          name: "Liv Green",
          imgSrc: "livish-profile.jpeg",
          imgAlt: "Livish Woodworks & Decor",
          text:
            "I was very pleased with my experience with Timothy from beginning to end. He asked probing questions that helped me to decide on the best flow and functionality for the website. He also actively listened to my requests and offered alternative solutions to work within my budget. Lastly, he continued to follow up with me even after the project was complete to ensure my satisfaction. Overall a great experience!",
          company: "Livish Woodworks & Decor",
        },
      ],
      settings: {
        fade: true,
        autoplay: true,
        autoplaySpeed: 12000,
        arrows: false,
      },
    };
  },
  methods: {
    reInit() {
      this.$refs.slick.reSlick();
    },
  },
};
</script>

<style lang="scss" scoped>
.section__testimonials {
  background: $primary-very-light;
  padding-top: 35rem;
  padding-bottom: 7rem;
  .quotemark {
    position: absolute;
    right: 7rem;
    top: 5rem;
    // z-index: -1;
    opacity: 0.1;
    width: 4rem;
    height: 4rem;
    display: inline-block;
    transform: scale(11);
  }
  .quote {
    &__text {
      font-size: clamp(1.8rem, 2vw, 2.5rem);
      margin-bottom: 2rem;
      &--name,
      &--company,
      & {
        color: $white;
      }
      // @include respond(tab-port) {
      //   font-size: 2rem;
      // }
    }

    //    width: 30rem;
    &__header {
      display: grid;
      grid-template-columns: 7rem 1fr;
      align-items: center;
      margin-bottom: 2rem;
      color: $white;
    }
    &__img {
      // @apply px-4;
      width: 6rem;
      position: relative;

      img {
        @apply rounded-full max-w-full h-auto align-middle shadow-lg;
      }
    }
  }
  @include respond(phone) {
    .slick-slider {
      width: 40rem;
      margin: 0 auto;
    }
  }
}
</style>
