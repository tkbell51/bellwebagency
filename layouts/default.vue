<template>
  <div class="page">
    <div class="overlay"></div>
    <Header />

    <Nuxt class="content" />
    <Footer />
    <script type="text/javascript">
      (function (e, t, o, n, p, r, i) {
        e.visitorGlobalObjectAlias = n;
        e[e.visitorGlobalObjectAlias] =
          e[e.visitorGlobalObjectAlias] ||
          function () {
            (e[e.visitorGlobalObjectAlias].q =
              e[e.visitorGlobalObjectAlias].q || []).push(arguments);
          };
        e[e.visitorGlobalObjectAlias].l = new Date().getTime();
        r = t.createElement("script");
        r.src = o;
        r.async = true;
        i = t.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(r, i);
      })(
        window,
        document,
        "https://diffuser-cdn.app-us1.com/diffuser/diffuser.js",
        "vgo"
      );
      vgo("setAccount", "477257887");
      vgo("setTrackByDefault", true);

      vgo("process");
    </script>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: "/bwa-logo.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  @include respond(tab-land) {
    font-size: 60%;
  }
  @include respond(tab-port) {
    font-size: 65%;
  }
  @include respond(big-desktop) {
    font-size: 75%;
  }
}
body {
  position: relative;
  line-height: 1.6;
  background: $bg-color;
}
.page {
  display: grid;
  grid-template-areas:
    "content"
    "footer";
  grid-template-rows: 1fr auto;
  // grid-gap: 10px;
  height: 100vh;

  .header {
    grid-area: content;
  }
  .footer {
    grid-area: footer;
  }
  .content {
    grid-area: content;
    @include respond(tab-port) {
      margin-top: 5rem;
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: rgba($black, 0.8);
    opacity: 0;
    visibility: hidden;
    &.show {
      opacity: 0.8;
      visibility: visible;
    }
  }
}
::selection {
  background-color: $primary-color !important;
  color: $white;
}

.heading-primary {
  font-family: "Montserrat Bold";
  color: $white;
  display: block;
  font-size: clamp(5rem, 8vw, 9rem);
  text-transform: uppercase;
  line-height: 1;
  @include respond(tab-port) {
    letter-spacing: 0.2rem;
    font-size: 4rem;
    line-height: 4.2rem;
  }
}
.heading-secondary {
  font-size: clamp(3.2rem, 6vw, 5rem);
  font-family: "Montserrat SemiBold";
  text-transform: uppercase;
  line-height: 1.25;
  color: $black;
  margin-bottom: 3rem;
}

.heading-tertiary {
  @apply uppercase;
  font-family: "Montserrat Regular";
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.2;
}

.is-outline {
  font-weight: 100;
  letter-spacing: 1px;
  margin-bottom: 0;
  color: transparent;
  font-size: 1em;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.035em #d5893d;
}
.container {
  margin: 0 auto;
  @include respond(phone) {
    padding: 0 3rem;
  }
}

.btn {
  @apply text-white font-bold;
  background: $secondary-color;

  border-radius: 8px;
  margin: 2rem 0;
  display: inline-block;
  text-align: center;

  // background: darken($secondary-color, 5%);
  box-shadow: $box-shadow;
  border: 1px solid $secondary-color;

  padding: 1rem 3rem;

  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  will-change: transform;
  &:hover {
    background: darken($secondary-color, 10%);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 1px, 0);
  }
  &.btn-transparent {
    background: transparent;
    border: 1px solid $white;
    &:hover {
      background: darken($secondary-color, 5%);
      border: 1px solid darken($secondary-color, 5%);
    }
  }

  @include respond(tab-port) {
    height: 35;
  }
}

section {
  position: relative;
  padding: 8rem 0;
  @include respond(phone) {
    padding: 3rem 0;
  }
  .section__title {
    position: absolute;
    top: -30rem;
    left: 50%;
    transform: translateX(-50%);
    color: rgba($primary-color, 0.1);
    font-size: 20vw;
    text-align: center;
    display: inline-block;
  }
}

h3 {
  @apply text-xl mb-3;
}
.title {
  @apply text-7xl;
}
.section-title {
  @apply text-4xl;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

a {
  font-size: $default-font-size;
  text-decoration: none;
  display: inline-block;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
}

.white {
  color: $white;
}
.orange {
  color: $secondary-color;
}
p,
li {
  font-size: $default-font-size;
}
p {
  color: $font-color;
  @apply mb-4;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: $transition;
  border-radius: 12px;
  margin: 0 2rem;
  background: $white;
  @apply shadow-md relative hover:shadow-sm;

  &__content {
    border-radius: 10px;
    position: relative;
    outline: none;
    height: 100%;
    padding: 2rem 2rem;
    @apply flex flex-col z-10;
    @include respond(tab-mid) {
      padding: 5rem;
      width: 100%;
    }
    @include respond(tab-small) {
      padding: 4rem;
      width: 100%;
    }

    svg {
      width: 6rem;
      height: 6rem;
      margin-bottom: 3rem;
    }
  }
  @media only screen and(min-width: 56.25em) {
    &::after {
      content: " ";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      border-radius: 10px;
      -webkit-box-shadow: 0 5px 35px rgb(166 209 237 / 20%);
      box-shadow: 0 5px 35px rgb(166 209 237 / 20%);
      z-index: 2;
      transition: $transition;
    }
    &::before {
      content: " ";
      width: 95%;
      height: 95%;
      z-index: 0;
      position: absolute;
      top: auto;
      bottom: 1px;
      left: 1px;
      border-radius: 12px;
      background-image: linear-gradient(
        100deg,
        $secondary-color-dark,
        $secondary-color,
        $secondary-color-light
      );
      background-repeat: repeat-x;
      outline: 1px solid transparent;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }

    &:hover {
      background: $primary-color;
      color: $white;
      p {
        color: $white;
      }
      &::before {
        transform: rotate(2deg) translateX(-5px) translateY(16px);
      }
      &::after {
        background: $primary-color;
      }
    }
  }
}
</style>
