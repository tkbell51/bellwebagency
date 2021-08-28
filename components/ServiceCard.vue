<template>
    <div class="service-card text-center rounded">
        <svg-icon :name="`${icon}`" class="service-card__icon"/>
        <p >{{title}}</p>
    </div>
</template>

<script>
    export default {
        props:['icon','title']
    }
</script>

<style lang="scss" scoped>
    .service-card{
        // background: $primary-color;
        height: 254px;
        width: 284px;
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: $transition;
        box-shadow: $box-shadow;
        border: 0.1px solid rgba($primary-color,0.1);
        &__icon {
            height: 70px;
            width: 70px;
            margin-bottom: 1rem;
        }
        p{
            @apply text-xl font-bold;
            font-family: 'Montserrat Bold';
        }
        &:hover {
            background: $primary-color;
            transform: translateY(-10%);
            p {
            color: $white;
            }
    }
    }
</style>