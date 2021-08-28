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
</style>