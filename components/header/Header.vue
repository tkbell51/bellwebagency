<template>
    <header class="header">
        <div class="container">
            <nav class="nav">
                <NuxtLink to="/">
                    <LogoTextLogo class="header-logo desktop" />
                    <Logo class="header-logo mobile" />
                </NuxtLink>
                <div class="flex items-center">
                    <HeaderNavLinks />
                </div>
                <HeaderNavLinksMobile :show-nav="showNav" />
                <div class="nav__mobile" @click="toggleMenu">
                    <span></span>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            // mobileView: true,
            showNav: false,
        }
    },
    mounted() {},
    methods: {
        toggleMenu() {
            this.showNav = !this.showNav
            const navMobile = document.querySelector('.nav__mobile')
            const overlay = document.querySelector('.overlay')
            const body = document.querySelector('body')
            // const hamMenu = document.querySelector('.nav__menu')
            // hamMenu.classList.toggle('show')
            overlay.classList.toggle('show')
            navMobile.classList.toggle('clicked')
            body.classList.toggle('overflow')
            // event.stopPropagation()
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    padding: 2rem 3rem 0;
    background: transparent;
    position: absolute;
    width: 100%;
    z-index: 100;
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        background: transparent;
        @include respond(tab-port) {
            width: 100%;
            padding: 0 2rem;
        }

        .header-logo {
            height: 10rem;
            @include respond(tab-port) {
                height: 8rem;
            }
            &.desktop {
                @include respond(tab-port) {
                    display: none;
                }
            }
            &.mobile {
                @media only screen and(min-width: 56.25em) {
                    display: none;
                }
            }
        }
    }

    &.fixed {
        background: $white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
        transform: translate(0, -200px);
        @include respond(tab-port) {
            position: fixed;
            opacity: 1;
            visibility: visible;
            transform: translate(0, 0);
        }
    }
    &.in-view {
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
        transform: translate(0, 0);
        @include respond(tab-port) {
            transition: none;
        }
        .nav .logo {
            width: 8rem;
        }
        .nav__link,
        .nav__btn {
            &,
            &:link,
            &:visited {
                color: $primary-color;
            }
        }
    }
    .nav__mobile {
        display: none;
        width: 50px;
        height: 50px;
        position: fixed;
        top: 0;
        right: 0;
        border-radius: 4px;
        z-index: 10;
        &:hover {
            cursor: pointer;
        }
        span {
            position: relative;
            margin-top: 9px;
            margin-bottom: 9px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -15px;
            margin-top: -1.5px;
            &,
            &:before,
            &:after {
                display: block;
                width: 30px;
                height: 4px;
                background-color: $white;
                outline: 1px solid transparent;
                -webkit-transition-property: background-color, -webkit-transform;
                -moz-transition-property: background-color, -moz-transform;
                -o-transition-property: background-color, -o-transform;
                transition-property: background-color, transform;
                -webkit-transition-duration: 0.3s;
                -moz-transition-duration: 0.3s;
                -o-transition-duration: 0.3s;
                transition-duration: 0.3s;
            }
            &:before,
            &:after {
                position: absolute;
                content: '';
            }
            &:before {
                top: -9px;
            }
            &:after {
                top: 9px;
            }
        }
        &.clicked span {
            background-color: transparent;
            &::before {
                -webkit-transform: translateY(9px) rotate(45deg);
                -moz-transform: translateY(9px) rotate(45deg);
                -ms-transform: translateY(9px) rotate(45deg);
                -o-transform: translateY(9px) rotate(45deg);
                transform: translateY(9px) rotate(45deg);
            }
            &::after {
                -webkit-transform: translateY(-9px) rotate(-45deg);
                -moz-transform: translateY(-9px) rotate(-45deg);
                -ms-transform: translateY(-9px) rotate(-45deg);
                -o-transform: translateY(-9px) rotate(-45deg);
                transform: translateY(-9px) rotate(-45deg);
            }
            &::before,
            &::after {
                background-color: $white;
            }
        }
        @include respond(tab-port) {
            display: block;
            position: relative;
            top: 0;
            right: 0;
        }
    }

    @include respond(tab-port) {
        position: fixed;
        background: $primary-color;
        display: flex;
        box-shadow: 0 4px 2px -2px $primary-color;
        padding: 2rem 0;
    }
    @include respond(tab-port) {
        .nav-menu {
            display: none;
        }
    }
}
</style>
