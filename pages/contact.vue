<template>
  <main>
    <PageHeader :title="'Lets Get Started'" />
    <section class="section__contact">
      <div class="container">
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> -->
        <ContactForm/>
        <!-- <div> -->
          <!-- <h3 class="heading-tertiary">Get In Touch</h3> -->
        <!-- </div> -->
        <!-- </div> -->
         
        </div>
    </section>
  </main>
</template>

<script>
export default {
  

  head() {
    return {
      title: "Contact | Bell Web Agency",
      
    };
  },
};
</script>

<style lang="scss" scoped>
.section__contact {
  background: $primary-color;
  padding: 0;
  margin: 0;
}
</style>
