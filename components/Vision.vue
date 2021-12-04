<template>
  <section class="vision">
    <bg-curve color="white" class="top-curve" />

    <div class="container">
      <div class="vision__content">
        <h2 class="heading-secondary">
          Don't Allow Your Vision<br /><span class="is-outline">To Be Left Behind</span>
        </h2>
        <p class="">
          Whether you have an existing business that needs a refresh or you’re starting a
          new venture, don't let your idea fade away. Get in touch for our branding,
          website and marketing packages.
        </p>

        <a
          href="https://calendly.com/bellwebagency/strategy-session"
          class="btn"
          target="_blank"
          >Schedule Call Today</a
        >
      </div>
    </div>
    <bg-curve color="white" />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vision {
  background: $hero-gradient,
    center / cover fixed no-repeat url("../assets/img/vision-bg.jpg");

  position: relative;

  &__content {
    position: relative;
    margin: 18rem 0;

    @include respond(tab-port) {
      margin: 10rem 0 8rem;
    }
    .heading-secondary {
      color: $white;
    }
    p {
      color: $white;
      width: 65%;
      font-size: clamp(1.6rem, 2.5vw, 2rem);
      margin: 1rem 0;
      @include respond(tab-port) {
        width: 100%;
      }
    }

    @include respond(tab-port) {
      width: 100%;
    }
  }

  .top-curve {
    transform: scaleY(-1);
    top: -12rem;
    bottom: auto;
    @include respond(tab-mid) {
      top: -10rem;
    }
    @include respond(tab-port) {
      top: -8rem;
    }
  }
  .bg-curve {
    margin-top: 5rem;
  }
}
</style>
