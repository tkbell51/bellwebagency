<template>
<div>

    <Accordion v-for="item in list"
      :key="item.title"
      :title="item.title"
      :description="item.description"/>
 
</div>
</template>

<script>
    export default {
        props: {
            list: Array,
        },
        data() {
            return {
                opentTab: 0,
            }
        },
         methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
    }
    }
</script>

<style lang="scss" scoped>

</style>