<template>
    <footer class="footer">
        <div class="footer__top">
        <div class="container">
            <div class="footer__top--content">
            <div>
            <div class="footer-logo"><Logo /></div>
             <ul class="social__list">
                    <li class="social__item">
                        <a class="social__link" href="https://www.facebook.com/bellwebagency" target="_blank">
                            <Fab class="social__nav--icon" i="facebook"/>
                            <span class="hidden">Bell Web Agency Facebook</span>
                        </a>
                    </li>
                    <li class="social__item">
                        <a  class="social__link" href="https://www.instagram.com/bellwebagency/" target="_blank">
                            <Fab class="social__nav--icon" i="instagram" />
                            <span class="hidden">Bell Web Agency Instagram</span>

                        </a>
                    </li>
                    <li class="social__item">
                        <a class="social__link" href="https://twitter.com/bellwebagency" target="_blank">
                            <Fab class="social__nav--icon" i="twitter" />
                            <span class="hidden">Bell Web Agency Twitter</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="white">Contact</p>
            <ul class="footer__contact">
                <li class="footer__contact--item">
                    
            <a class="footer-email" href="mailto:info@bellwebagency"><Fas i="envelope"/><span>info@bellwebagency</span></a>

                </li>
                <li class="footer__contact--item">
                    
            <a class="footer-email" href="https://goo.gl/maps/h8AVVADGpWUcP1oi6" target="_blank"><Fas i="map-marker-alt"/><span>Anderson, SC</span></a>

                </li>
            </ul>

            </div>
            <div>
                <p class="white">Quick Link</p>
                <ul class="footer-menu ">
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
            <NuxtLink class="footer-menu__link" to="/process">Process</NuxtLink>
        </li>
        <li class="footer-menu__item">
            <NuxtLink class="footer-menu__link" to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li class="footer-menu__item">
            <NuxtLink class="footer-menu__link" to="/blog">Blog</NuxtLink>
        </li>
        <li class="footer-menu__item">
            <NuxtLink class="footer-menu__link" to="/contact-us">Contact Us</NuxtLink>
        </li>
       
    </ul>
            </div>
            <div>
            <p class="white">Resources</p>
            <h3 class="text-5xl my-3">Get in <span class="orange">Touch</span></h3>
            <NuxtLink class="primary-btn" to="/start-project">Start your project</NuxtLink>

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
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .footer {
        color: $white;
        padding-top: 2rem;
        &-logo svg{
            height: 8rem;
        }
        &-menu {
            &__item {
            }
        }
        &__top{
            @apply py-8;
        background: $primary-color;

            &--content {
                  @apply flex justify-between;
                  p {
                      font-family: 'Montserrat Bold'
                  }
            .social {
                &__list {
                    @apply flex justify-end items-center mt-5;
                }
                &__link {
                        transition: $transition;
                        margin-right: 2rem;
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
            @apply py-8;
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