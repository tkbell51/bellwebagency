<template>
    <section class="section-about-block">
        <div class="container">
            <div class="about-block">
                <div class="about-block__title">

                <p class="orange">{{subtitle}}</p>
                <h2 class="section-title">{{title}}</h2>
                </div>
                <div class="about-block__text">
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['subtitle','title']
    }
</script>

<style lang="scss" scoped>
    .about-block {
        @apply flex justify-between ;
        &__title {
            flex: 45%;
        }
        .section-title {
            margin-top: 3px;
        }
        &__text {
            flex: 55%;
        }
    }
</style>