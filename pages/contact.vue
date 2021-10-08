<template>
  <main>
    <PageHeader :title="'Lets Get Started'" />
    <section>
      <div class="container">
        <!-- <div v-if="isHBLoaded"> -->
         <client-only>
           <HoneyBook/>
         </client-only>
        </div>
      <!-- </div> -->
    </section>
  </main>
</template>

<script>
export default {
  
  // key(route) {
  //   return route.fullPath;
  // },
  mounted() {
    if(process.BROWSER_BUILD && window){
      
    }
  },
  head() {
    return {
      title: "Contact | Bell Web Agency",
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
