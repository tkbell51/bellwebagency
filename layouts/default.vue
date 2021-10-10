<template>
  <div class="page">
    <div class="overlay"></div>
    <Header />

    <Nuxt class="content" />
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
html {
  //This defines what 1rem is
  font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%
  @include respond(tab-land) {
    font-size: 60%; //1rem = 9px, 9/16 = 56.25%
  }
  @include respond(tab-port) {
    font-size: 65%; //1rem = 8px, 8/16 = 50%
  }
  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12px, 12/16 = 75%
  }
}
body {
  font-family: "Montserrat Regular";
  position: relative;
  line-height: 1.6;
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
  color: $white;
  backface-visibility: hidden;
  display: block;
  font-size: 5rem;
  font-weight: 400;
  @include respond(tab-port) {
    letter-spacing: 0.2rem;
    font-size: 4rem;
    line-height: 4.2rem;
  }
}
.heading-secondary {
  font-size: 3.5rem;
  font-family: "Montserrat SemiBold";
  color: $primary-color;
  margin-bottom: 4rem;
  @include respond(tab-port) {
    font-size: 3rem;
  }
  @include respond(phone) {
    font-size: 2.5rem;
  }
}
.heading-tertiary {
  font-size: $default-font-size;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.container {
  margin: 0 auto;
  @include respond(phone){
    padding: 0 3rem;
  }
}
.primary-btn {
  @apply text-white rounded inline-block text-base font-bold;
  background: $secondary-color;
  padding: 16px 28px;
  box-shadow: $box-shadow;
  transition: 0.1s;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: $default-font-size;
  &:hover {
    transform: $raise-btn;
  }
  &:focus {
    transform: translateY(-4px);
  }
}

.btn {
  @apply text-white rounded  font-bold;

  display: inline-flex;
  align-items: center;
  background: darken($secondary-color, 5%);
  box-shadow: $box-shadow;
  
  height: 4rem;
  padding: 0 2.5rem;
  
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
  padding: 8rem 0;
  @include respond(phone) {
    padding: 3rem 0;
  }
}
h1,
h2,
h3 {
  font-family: "Montserrat SemiBold";
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
.subtitle {
  @apply text-2xl;
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

.font-bold {
  font-family: "Montserrat Bold";
}
.white {
  color: $white;
}
.orange {
  color: $secondary-color;
}
p,li {
  
  font-size: $default-font-size;
}
p{
  color: $font-color;

}

</style>
