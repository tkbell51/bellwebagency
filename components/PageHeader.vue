<template>
    <section class="page-header">
        <div class="container">

        <h1 class="heading-primary">{{title}}</h1>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['title'],
    }
</script>

<style lang="scss" scoped>
    .page-header {
        @apply flex items-end;
        background: $primary-color;
        height: 30rem;
        margin-top: 0;
        background:url(~/assets/img/header-image.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 0; right: 0;
            top: 0; bottom: 0;
            background: rgba($primary-color,.89);
        }
        .heading-primary {
            margin-top: 6rem;
            position: relative;
            z-index: 45;
            margin-bottom: -6rem;

        }
    }
</style>