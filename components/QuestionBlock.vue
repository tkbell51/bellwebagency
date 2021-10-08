<template>
    <div class="my-4 md:my-auto">
        <h3>{{question}}</h3>
        <p>{{answer}}</p>
    </div>
</template>

<script>
    export default {
        props: ['question','answer']
    }
</script>

<style lang="scss" scoped>
h3 {
    font-size: 1.9rem;
    line-height: 3rem;
}
</style>