<template>
    <header class="header">
        <nav class="nav">
            <NuxtLink to="/"><Logo /></NuxtLink>
            <NavLinks/>
        </nav>
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
        justify-content: space-around;
        align-items: center;
        height: 100%;
        background: transparent;

      
    }
}
</style>