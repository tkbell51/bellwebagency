<template>
    <div>
        <PageHeader :title="project.title"/>
        <section class="section__project-description">
            <div class="container">

        <p>{{ project.description }}</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                project: {}
            }
        },
        async asyncData({$content, params}) {
            const project = await $content('portfolio', params.slug).fetch()
            return {
                project
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>