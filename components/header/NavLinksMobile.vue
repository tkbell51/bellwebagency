<template>
    <div v-if="showNav" class="mobile-nav">
        <div class="mobile-nav__logo" @click="closeMenu">
            <nuxt-link to="/" class="logo">
                <Logo />
            </nuxt-link>
        </div>

        <ul class="mobile-nav__menu">
            <div v-for="(item, index) in navLinks" :key="index">
                <li v-if="item.submenu != undefined" class="mobile-nav__item">
                    <HeaderDropdown :links="item.submenu" />
                </li>
                <li v-else @click="closeMenu">
                    <a
                        v-if="item.external === true"
                        class="mobile-nav__link mobile-nav__link--ltr"
                        target="_blank"
                        :href="item.link"
                    >
                        {{ item.title }}
                    </a>
                    <NuxtLink v-else class="mobile-nav__link mobile-nav__link--ltr" :to="item.link">
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </div>
        </ul>

        <div class="mobile-nav__social flex justify-around items-center my-8">
            <a
                v-for="(item, index) in socialLinks"
                :key="index"
                class="mobile-nav__item"
                :href="item.link"
                target="_blank"
            >
                <Fab class="mobile-nav__icon" :i="item.icon" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['showNav'],
    methods: {
        closeMenu() {
            this.$parent.toggleMenu()
        },
    },
    data() {
        return {
            navLinks: [
                {
                    title: 'Home',
                    link: '/',
                    external: false,
                },
                { title: 'About', link: '/about', external: false },
                {
                    title: 'Solutions',
                    link: '/solutions',
                    external: false,
                    submenu: [
                        {
                            title: 'Web Design & Development',
                            link: '/solutions/web-design',
                        },
                        {
                            title: 'Logo Design & Branding',
                            link: '/solutions/branding',
                        },
                        {
                            title: 'Web Maintenance',
                            link: '/solutions/maintenance',
                        },
                        {
                            title: 'Review Repuration Management',
                            link: '/solutions/review-management',
                        },
                        {
                            title: 'SEO',
                            link: '/solutions/seo',
                        },
                    ],
                },
                {
                    title: 'Portfolio',
                    link: '/portfolio',
                    external: false,
                },
                // { title: "Blog", link: "/blog", external: false },
                { title: 'Contact', link: '/contact', external: false },
                {
                    title: 'Schedule Conversation',
                    link: 'https://calendly.com/bellwebagency/initial-discussion',
                    external: true,
                },
            ],
            socialLinks: [
                { icon: 'facebook', link: 'https://www.facebook.com/bellwebagency' },
                { icon: 'instagram', link: 'https://www.instagram.com/bellwebagency/' },
                { icon: 'twitter', link: 'https://twitter.com/bellwebagency' },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.mobile-nav {
    position: fixed;
    background: $primary-color;
    z-index: 9;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 515px;
    width: 100%;
    padding-top: 5rem;
    overflow-y: auto;
    .logo {
        display: block;
        width: 13rem;
        margin: 0 auto;
    }
    &__menu {
        // display: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    &__link {
        &,
        &:link,
        &:visited {
            text-decoration: none;
            font-size: $default-font-size;
            color: $white;
            display: block;
            text-align: left;
            padding: 2rem 4rem;
        }
        &:hover,
        &:focus {
            background: $primary-color;
        }
    }
    &__link &__cta {
        margin-bottom: 0;
    }

    &__icon {
        font-size: 4rem;
        color: $white;
        &:hover,
        &:focus {
            background: $primary-color;
        }
    }
}
</style>
