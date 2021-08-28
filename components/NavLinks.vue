<template>
    <ul class="nav-menu">
        <li class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" to="/">Home</NuxtLink>
        </li>
        <li class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" to="/about">About</NuxtLink>
        </li>
        <li class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" to="/services">Services</NuxtLink>
        </li>
        <li class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" to="/process">Process</NuxtLink>
        </li>
        <li class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li class="nav-menu__item">
            <NuxtLink class="nav-menu__link nav-menu__link--ltr" to="/blog">Blog</NuxtLink>
        </li>
        <li class="nav-menu__item">
            <NuxtLink class="primary-btn inline-block ml-5" to="/contact-us">Contact Us</NuxtLink>
        </li>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .nav-menu {
        display: flex;
        justify-content: center;
        align-content: center;
        &__item {
        }
        &__link {
            display: inline-block;
            opacity: 0.8;
            transition: $transition;
            position: relative;
            padding: 15px 0;
            margin: 0 20px;
            &:link,
            &:visited {
                
                color: $header-font-color;
            }
            &:hover,
            &:active {
                opacity: 1;
            }

            
            &::before {
            transition: 300ms;
            height: 5px;
            content: "";
            position: absolute;
            background-color: $secondary-color;
            }
            &.nuxt-link-exact-active::before {
                width: 100%;
            }
        

            &--ltr{
                &::before {
                    width: 0%;
                    bottom: 10px;
                }
                &:hover::before{
                    width: 100%;
                }
                
            }

        }
    }
</style>