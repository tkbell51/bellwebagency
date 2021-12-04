<template>
  <section class="gmb">
    <div class="container">
      <div class="gmb__content flex relative z-10">
        <div class="gmb__content--text">
          <h2 class="heading-secondary">
            Do customers know<br /><span class="is-outline">where to find you?</span>
          </h2>
          <p class="">
            Establish an online presence with the world's largest search engine.
          </p>
          <CheckList
            :list="[
              'Control the first impression',
              'Make it easy for customers to connect with you',
              'Show your services and products',
              'Know how customers are finding you',
            ]"
          />
          <a
            href="https://bellwebagency.clickfunnels.com/optin_box/3kinyim6cynkwpj8"
            class="btn"
            target="_blank"
            >Get Help With Google My Business</a
          >
        </div>
        <div class="gmb__img">
          <nuxt-img src="/img/gmb-photo.png" alt="Google my business" />
        </div>
      </div>
    </div>
    <bg-curve color="white" />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gmb {
  padding-top: 30rem;
  background: $section-gradient;

  position: relative;

  &__img {
    @include respond(tab-port) {
      display: none;
    }
  }
  &__content {
    position: relative;
    margin-bottom: 19rem;
    &--text {
      width: 95%;
      color: $white;
      .heading-secondary {
        color: $white;
      }
      p {
        color: $white;

        width: 65%;
        font-size: clamp(1.6rem, 2.5vw, 2rem);
        margin: 1rem 0;
        @include respond(phone) {
          width: 80%;
        }
      }

      @include respond(tab-port) {
        width: 100%;
      }
    }
  }
  @include respond(tab-port) {
    padding-top: 6rem;
  }
  .bg-curve {
    margin-top: 5rem;
    @include respond(tab-port) {
      margin-top: 8rem;
    }
  }
}
</style>
