<template>
  <main>
    <PageHeader :title="'Services'" />
     <AboutBlock :title="'Brand &amp; Logo Design'" :subtitle="''">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur
        quasi magnam esse similique, veniam, iste praesentium laboriosam atque
        exercitationem at impedit illum asperiores et! Accusamus sint porro odit
        molestiae!
      </p>
    </AboutBlock>
    <AboutBlock :title="'Web Design'" :subtitle="''">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur
        quasi magnam esse similique, veniam, iste praesentium laboriosam atque
        exercitationem at impedit illum asperiores et! Accusamus sint porro odit
        molestiae!
      </p>

      <div class="software-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <svg-icon
          v-for="item in softwares"
          :key="`${item.name}`"
          :name="`${item.name}`"
          :id="`${item.name}`"
          class="software"
        />
      </div>
    </AboutBlock>
   
    <AboutBlock :title="'Web Maintenance'" :subtitle="''">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur
        quasi magnam esse similique, veniam, iste praesentium laboriosam atque
        exercitationem at impedit illum asperiores et! Accusamus sint porro odit
        molestiae!
      </p>
    </AboutBlock>
    <AboutBlock :title="'Customer Reviews'" :subtitle="''">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur
        quasi magnam esse similique, veniam, iste praesentium laboriosam atque
        exercitationem at impedit illum asperiores et! Accusamus sint porro odit
        molestiae!
      </p>
    </AboutBlock>
  </main>
</template>

<script>
export default {
  data() {
    return {
      softwares: [
        { name: "xd" },
        { name: "photoshop" },
        { name: "ai" },
        { name: "nuxtjs" },
        { name: "netlifycms" },
        //   1{name:'wordpress'},{name:'elementor'},
        //   {name:'ganalytics'},
        { name: "shopify" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
