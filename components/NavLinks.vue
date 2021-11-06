<template>
  <ul class="nav-menu">
    <li v-for="(item, index) in navLinks" :key="index" class="nav-menu__item">
      <a v-if="item.external === true" class="btn" target="_blank" :href="item.link">
        {{ item.title }}
      </a>
      <div
        v-else-if="item.submenu != undefined"
        @mouseenter="item.hover = true"
        @mouseleave="item.hover = false"
      >
        <NuxtLink class="nav-menu__link nav-menu__link--ltr" :to="item.link">
          {{ item.title }}
        </NuxtLink>
        <transition name="dropdown-fade">
          <ul v-if="item.hover" class="dropdown__menu" @click="item.hover = false">
            <li
              v-for="(sublink, index) in item.submenu"
              :key="index"
              class="dropdown__item"
            >
              <nuxt-link class="dropdown__link" :to="item.link + sublink.link">{{
                sublink.title
              }}</nuxt-link>
            </li>
          </ul>
        </transition>
      </div>
      <NuxtLink v-else class="nav-menu__link nav-menu__link--ltr" :to="item.link">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          title: "Home",
          link: "/",
          external: false,
        },
        { title: "About", link: "/about", external: false },
        {
          title: "Services",
          link: "/services",
          external: false,
          //if using a submenu the hover key is also needed
          hover: false,
          submenu: [
            { title: "Web Design & Development", link: "/web-design" },
            {
              title: "Review Repuration Management",
              link: "/review-management",
            },
            { title: "Brand & Logo Design", link: "/brand-logo-design" },
          ],
        },
        {
          title: "Portfolio",
          link: "/portfolio",
          external: false,
        },
        // { title: "Blog", link: "/blog", external: false },
        {
          title: "Start Project",
          link:
            "https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f",
          external: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  justify-content: center;
  align-content: center;
  &__item {
    align-self: center;
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

    &--ltr {
      &::before {
        width: 0%;
        bottom: 10px;
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
