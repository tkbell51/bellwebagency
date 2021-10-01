<template>
    <div class="page">
        <Header />

        <Nuxt class="content"/>
        <Footer />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
body {
    font-family: "Montserrat Regular";
    position: relative;
}
.page {
    display: grid;
    grid-template-areas: 
        
        "content"
        "footer";
    grid-template-row: 1fr auto;
    grid-gap: 10px;
    height: 100vh;

    .header {
        grid-area: content;
    }
    .footer {
        grid-area: footer;

    }
    .content {
        grid-area: content;

    }
}
.container {
    margin: 0 auto;
}
.primary-btn {
    @apply text-white rounded inline-block text-base font-bold;
    background: $secondary-color;
    padding: 16px 28px;
    box-shadow: $box-shadow;
    transition: .1s;
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover {
        transform: translateY(-5px);
    }
    &:focus {
        transform: translateY(-4px);
    }
}
section {
    margin: 8rem auto;
}
  h1,h2,h3{
      font-family: 'Montserrat SemiBold';
  }
  .title{
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
    @apply text-base;
  }
  .font-bold {
      font-family: 'Montserrat Bold'
  }
  .white {
      color: $white;
  }
  .orange {
      color: $secondary-color;
  }
  p {
    @apply text-base;
    color: $font-color;
  }
</style>