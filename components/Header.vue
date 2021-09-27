<template>
    <header class="header">
        <div class="container">

        <nav class="nav">
            <NuxtLink to="/"><Logo /></NuxtLink>
            <NavLinks/>
        </nav>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.header {
    padding: 1rem 0;
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

      
    }
}
</style>