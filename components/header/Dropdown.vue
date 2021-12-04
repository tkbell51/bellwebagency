<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="nav__btn">
      Solutions
      <Fas class="nav__icon" i="caret-down" />
    </button>
    <transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        ref="dropdown"
        v-on-clickaway="hideDropdown"
        class="dropdown__menu"
      >
        <li
      default: () => ({}),
          v-for="(item, index) in links"
          :key="index"
          class="dropdown__item"
          @click="closeMenu"
        >
          <nuxt-link class="dropdown__link" :to="item.link">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import Fas from "@/components/Fas";
export default {
  props: {
    links: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Fas,
  },
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isVisible = !this.isVisible;
      const icon = document.querySelector(".nav__mobile");
      icon.classList.toggle("open");
    },
    hideDropdown() {
      this.isVisible = false;
      const icon = document.querySelector(".nav__mobile");
      icon.classList.remove("open");
    },
    closeMenu() {
      if (this.$parent.showNav === true) {
        this.$parent.closeMenu();
      }
    },
  },
};
</script>

<style lang="scss" scope>
.nav__btn {
  padding: 0.5em;
  text-decoration: none;
  color: $white;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;
  border: none;
  background: none;
  font-size: $default-font-size;
  width: 100%;
  text-align: left;
  @include respond(tab-port) {
    text-decoration: none;
    font-size: $default-font-size;
    display: block;
    text-align: left;
    padding: 2rem 4rem;
  }
  &:hover,
  &:focus {
    color: $secondary-color;
    cursor: pointer;
    @include respond(tab-port) {
      background: $primary-color;
    }
  }
}
.nav__icon {
  margin-left: 3px;
  &.open {
    transform: rotate(180deg);
  }
}
.dropdown {
  position: relative;
  &:hover,
  &:focus {
    color: $secondary-color;
    cursor: pointer !important;
    @include respond(phone) {
      background: $primary-color;
    }
  }
  &__menu {
    overflow: hidden;
    position: absolute;
    z-index: 40;
    list-style-type: none;
    background: $white;
    box-shadow: 0px 3px 6px rgba($black, 0.5);
    width: 24rem;
    @include respond(tab-port) {
      position: relative;
      width: 100%;
      box-shadow: none;
      background: lighten($primary-color, 10%);
    }
  }
  &__link {
    &,
    &:link,
    &:visited {
      text-decoration: none;
      font-size: $default-font-size;
      color: $black;
      display: block;
      text-align: left;
      padding: 1rem 4rem;
      @include respond(tab-port) {
        color: $white;
      }
    }
    &:hover,
    &:focus {
      background: $primary-color;
      color: $white;
      border: 1px solid $primary-color;
      @include respond(tab-port) {
        color: $secondary-color;
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
