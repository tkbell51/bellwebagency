<template>
  <main>
    <PageHeader :title="'About Us'" />
    <AboutBlock :subtitle="'About Me'" :title="'My Story'">
      <p>
        I come from a family that desires to do two things: Create and Help.
        Those two virtues have built many entrepreneurs that have gone on to do
        amazing things in my family. The Bell Web Agency is my way of helping my community
        and beyond reach the goals they desire. I’m happy to use my creativity
        to do that!
      </p>
      <p class="mt-3">This means I'll put forth every effort I can to help you reach your business goals and find digital solutions to problems you see need fixing!</p>
      <div class="about-img-wrapper w-full">
        <img src="" alt="" />
      </div>
    </AboutBlock>
    <AboutBlock :subtitle="'Best is the Standard'" :title="'Mission'">
      <p>
        At Bell Web Agency, our Mission is to provide the best digital tools to
        help assist our clients meet their goals and needs. After discussing
        your needs, we will present you with the best web design that promote
        growth in your business.
      </p>
    </AboutBlock>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'About Us | Bewll Web Agency',
    }
  },
 
  
}

</script>

<style lang="scss" scoped>


</style>