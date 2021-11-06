<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="footer__top--content">
          <div>
            <div class="footer-logo">
              <Logo />
            </div>
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
          </div>

          <div>
            <p class="white mb-2">Quick Link</p>
            <ul class="footer-menu">
              <li class="footer-menu__item">
                <NuxtLink class="footer-menu__link" to="/">Home</NuxtLink>
              </li>
              <li class="footer-menu__item">
                <NuxtLink class="footer-menu__link" to="/about">About</NuxtLink>
              </li>
              <li class="footer-menu__item">
                <NuxtLink class="footer-menu__link" to="/services">Services</NuxtLink>
              </li>

              <li class="footer-menu__item">
                <NuxtLink class="footer-menu__link" to="/portfolio">Portfolio</NuxtLink>
              </li>
              <!-- <li class="footer-menu__item">
            <NuxtLink class="footer-menu__link" to="/blog">Blog</NuxtLink>
        </li> -->
              <li class="footer-menu__item">
                <a
                  href="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f"
                  class="footer-menu__link"
                  target="_blank"
                  >Start Project</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="white mb-2">Services</p>
            <ul class="footer-menu">
              <li class="footer-menu__item">
                <NuxtLink class="footer-menu__link" to="/services/web-design"
                  >Web Design &amp; Development</NuxtLink
                >
              </li>
              <li class="footer-menu__item">
                <NuxtLink class="footer-menu__link" to="/services/review-management"
                  >Review Repuration Management</NuxtLink
                >
              </li>
              <li class="footer-menu__item">
                <NuxtLink class="footer-menu__link" to="/services/brand-logo-design"
                  >Brand &amp; Logo Design</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <!-- <p class="white">Resources</p> -->
            <h3 class="text-5xl my-3">Get in <span class="orange">Touch</span></h3>
            <ul class="footer__contact">
              <li class="footer__contact--item">
                <a
                  class="footer-email flex justify-center"
                  href="mailto:info@bellwebagency"
                >
                  <Fas i="envelope" class="w-1/4 mr-3" /><span>info@bellwebagency</span>
                </a>
              </li>
              <li class="footer__contact--item">
                <a
                  class="footer-email flex justify-center"
                  href="https://goo.gl/maps/h8AVVADGpWUcP1oi6"
                  target="_blank"
                >
                  <Fas i="map-marker-alt" class="w-1/4 mr-3" /><span>Anderson, SC</span>
                </a>
              </li>
            </ul>
            <a
              class="btn"
              href="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f"
              >Start Project</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__bottom--content">
          <p class="white">&copy; {{ new Date().getFullYear() }} Bell Web Agency</p>
          <div>
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
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
  // padding-top: 2rem;
  &-logo svg {
    height: 8rem;
    @include respond(tab-port) {
      margin: 0 auto;
    }
  }
  &-menu {
    &__item {
      transition: $transition;
      &:hover {
        color: $secondary-color;
      }
    }
  }
  &__top {
    @apply py-9;
    background: $primary-color;

    &--content {
      @apply flex justify-between;
      @include respond(tab-port) {
        display: block;
        text-align: center;
        & > div {
          margin: 2rem auto;
        }
      }
      p {
        font-family: "Montserrat Bold";
      }
      .social {
        &__list {
          @apply flex justify-end items-center mt-5;
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
            height: 2rem;
            width: 2rem;
            opacity: 0.7;
            transition: $transition;
          }
          &:hover svg {
            opacity: 1;
            color: $secondary-color;
          }
        }
      }
    }
  }
  &__bottom {
    @apply py-4;
    background-color: $primary-light;

    &--content {
      @apply flex justify-between items-center;
      a {
        margin: 0 1rem;
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
