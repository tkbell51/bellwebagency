<template>
  <footer class="footer">
    <bg-curve color="white" class="top-curve" />

    <div class="footer__top">
      <div class="container">
        <div class="footer__top--content">
          <nuxt-link to="/" class="footer-logo">
            <Logo />
          </nuxt-link>

          <div>
            <h3 class="heading-primary text-white">
              Get in <br />
              <span class="is-outline">Touch</span>
            </h3>
            <ul class="footer__contact">
              <li class="footer__contact--item">
                <a
                  class="footer-email flex justify-center"
                  href="mailto:info@bellwebagency"
                >
                  info@bellwebagency
                </a>
              </li>
              <li>
                <ul class="social__list">
                  <li class="social__item">
                    <a
                      class="social__link"
                      href="https://www.facebook.com/bellwebagency"
                      target="_blank"
                    >
                      <Fab class="social__nav--icon" i="facebook" />
                      <span class="hidden">Bell Web Agency Facebook</span>
                    </a>
                  </li>
                  <li class="social__item">
                    <a
                      class="social__link"
                      href="https://www.instagram.com/bellwebagency/"
                      target="_blank"
                    >
                      <Fab class="social__nav--icon" i="instagram" />
                      <span class="hidden">Bell Web Agency Instagram</span>
                    </a>
                  </li>
                  <li class="social__item">
                    <a
                      class="social__link"
                      href="https://twitter.com/bellwebagency"
                      target="_blank"
                    >
                      <Fab class="social__nav--icon" i="twitter" />
                      <span class="hidden">Bell Web Agency Twitter</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom mt-8">
          <div class="footer__bottom--content uppercase">
            <p>
              &copy; {{ new Date().getFullYear() }} Bell Web Agency. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  color: $white;
  position: relative;
  background-image: $section-gradient;
  .top-curve {
    transform: scaleY(-1);
    top: -1rem;
    bottom: auto;

    @include respond(tab-port) {
      top: -5px;
    }
  }
  &-logo {
    .mobile-logo {
      width: 11rem;
      @include respond(tab-port) {
        margin: 0 auto;
      }
    }
    @include respond(tab-port) {
      margin-bottom: 2rem;
    }
  }

  &-email {
    font-size: 2.5rem;
    letter-spacing: 1px;
    color: $grey;
  }

  &__top {
    padding-top: 25rem;
    margin-bottom: 4rem;

    @include respond(tab-port) {
      padding-top: 15rem;
    }

    &--content {
      @apply flex justify-between items-center;
      @include respond(tab-port) {
        display: block;
        text-align: center;
      }

      .social {
        &__list {
          @apply flex items-center mt-5;
          @include respond(tab-port) {
            justify-content: center;
          }
        }
        &__link {
          transition: $transition;
          margin-right: 2rem;
          @include respond(tab-port) {
            margin: 0 1rem;
          }
          svg {
            height: 4rem;
            width: 4rem;
            color: $grey;

            transition: $transition;
          }
          &:hover svg {
            color: $secondary-color;
          }
        }
      }
    }
  }
  &__bottom {
    padding: 4rem 0;

    &--content {
      color: $grey;
      opacity: 0.5;
      p {
        color: $grey;
      }
      a {
        margin: 0 1rem;
      }
      @include respond(tab-port) {
        text-align: center;
      }
    }
  }
  &-email {
    transition: $transition;
    margin-bottom: 1rem;
    display: inline-block;
    &:hover {
      color: $secondary-color;
    }
  }
}
</style>
