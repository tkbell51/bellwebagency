<template>
  <div class="hero">
    <div class="container">
      <div class="hero__content lg:text-left w-full lg:w-3/4">
        <div class="hero__content--text">
          <svg-icon class="dot-grid" name="orange-dots" />
          <h1 class="heading-primary">
            Creative digital solutions for business <span class="orange">growth</span>
          </h1>
          <p class="white">
            We will create a digital solution to help your company go beyond your goals!
          </p>
          <NuxtLink class="btn" to="/contact">Start your project</NuxtLink>
          <!-- <svg-icon name="orange-curve"/> -->
          <!-- <svg-icon name="ghost-curve"/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  background: url(~/assets/img/header-image.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba($primary-color, 0.89);
  }
  .container {
    height: 100%;
  }
  &__content {
    position: relative;
    height: 100%;

    &--text {
      position: relative;
      z-index: 1;
      top: 55%;
      transform: translateY(-50%);
      // width: 80%;
      .heading-primary {
        line-height: 5rem;
        margin-bottom: 3rem;
        position: relative;
        z-index: 2;
      }
      p {
        width: 50%;
        margin-bottom: 1rem;
        @include respond(phone) {
          width: 80%;
          margin-bottom: 2rem;
        }
      }
      .dot-grid {
        position: absolute;
        left: -13rem;
        bottom: 13rem;
        @include respond(tab-port) {
          display: none;
        }
      }
    }
   
  }
  @include respond(tab-port) {
    height: 55rem;
  }
  
}
</style>
