<template>
  <section class="page-header">
    <div class="container">
      <div class="page-header__content w-full flex justify-between gap-16">
        <div class="page-header__content--text">
          <h1 class="heading-primary">
            {{ firstTitle }}
            <br v-if="firstTitle != undefined || secondTitle == undefined" />
            <span v-if="secondTitle" class="is-outline">
              {{ secondTitle }}
            </span>
          </h1>
          <p class="text-white">
            {{ pageDescription }}
          </p>
        </div>
        <div v-if="image" class="portfolio-header__img mx-auto">
          <nuxt-img
            provider="cloudinary"
            :src="`portfolio/${image}`"
            class="shadow-xl rounded-xl"
          />
        </div>
      </div>
    </div>
    <bg-curve :color="curve" />
  </section>
</template>

<script>
export default {
  props: {
    firstTitle: String,
    secondTitle: String,
    pageDescription: String,
    image: String,
    curve: { type: String, default: "white" },
  },
};
</script>

<style lang="scss" scoped>
.page-header {
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
      margin-bottom: 2rem;

      .heading-primary {
        font-size: clamp(5rem, 8vw, 9rem);

        line-height: 1;
        margin-bottom: 3rem;
        position: relative;
        z-index: 2;
        // .heading-detail {
        //   float: left;
        //   width: auto;
        //   height: auto;
        //   clear: both;
        //   display: inline-block;
        //   position: relative;
        //   letter-spacing: 0;
        //   margin-left: -4px;
        //   letter-spacing: -1px;
        //   padding-bottom: 38px;
        //   &::before {
        //     content: "Show the world what you do";
        //     float: none;
        //     width: 100%;
        //     height: auto;
        //     position: absolute;
        //     left: 5px;
        //     top: 4px;
        //     z-index: 1;
        //     color: transparent;
        //     -webkit-text-stroke: 1px $secondary-alt-color;
        //     text-stroke: 1px $secondary-alt-color;
        //     -webkit-background-clip: text;
        //   }
        //   .heading-text {
        //     position: relative;
        //     z-index: 2;
        //     display: inline-block;
        //     clear: both;
        //   }
        // }
      }
      p {
        color: $grey;
        width: 65%;
        font-size: clamp(1.6rem, 2.5vw, 2rem);
        margin: 4rem 0;
        @include respond(tab-mid) {
          width: 90%;
        }
        @include respond(tab-port) {
          width: 100%;
        }
      }
      @include respond(tab-mid) {
        width: 90%;
      }
      @include respond(tab-port) {
        width: 100%;
      }
    }
    @include respond(tab-port) {
      margin: 10rem 0 2rem;
    }
  }

  .bg-curve {
    margin-top: 5rem;
  }
}
</style>
