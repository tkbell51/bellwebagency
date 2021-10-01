<template>
    <div class="hero">
        <div class="container">
        <div class="hero__content">

        <svg-icon class="dot-grid" name="orange-dots"/>
        <div class="hero__content--text">

        <h3 class="subtitle orange">Welcome to BWA</h3>
        <h1 class="title white ">Creative digital solutions for business <span class="orange">growth</span></h1>
        <p class="white subtitle">We will create a digital solution to help your company go beyond your goals!</p>
        <NuxtLink class="primary-btn" to="/contact">Start your project</NuxtLink>
        <!-- <svg-icon name="orange-curve"/> -->
        <!-- <svg-icon name="ghost-curve"/> -->
        </div>
        </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.hero {
    background:url(~/assets/img/header-image.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50rem;
    position: relative;
    &::before {
        content: "";
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    background: rgba($primary-color,.89);
    }

    &__content {
        position: relative;
        padding-top: 18rem;
        .primary-btn {
            display: inline-block;
        }
        .dot-grid {
            position: absolute;
            left: -8rem;
            bottom: 13rem;
        }
        &--text {
            position: relative;
            z-index: 1;
            width: 80%;
            .title {
                line-height: 5rem;
                margin-bottom: 1rem;
            }
            p {
                width: 50%;
                margin-bottom: 1rem;
            }
        }
    }
    
}
</style>