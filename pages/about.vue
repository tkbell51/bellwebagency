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
    
    <AboutBlock :subtitle="'What do I use?'" :title="'Software'">
      <p>
        The latest software is used for the projects. Clients will get the best
        that BWA can give. These are the platforms that will be used.
      </p>
      <div class="software-grid grid grid-cols-3">
          <svg-icon v-for="item in softwares"
                    :key="`${item.name}`"
                    :name="`${item.name}`"
                    :id="`${item.name}`"
                    class="software"/>
      </div>
    </AboutBlock>
      <AboutBlock :subtitle="'Questions I get often'" :title="'F.A.Q'">
      <p>
        I often get asked the same questions. I’ve put the most common in this section.  
      </p>
      
  <Accordion v-for="item in faq"
      :key="item.question"
      :question="item.question"
      :answer="item.answer"/>
    </AboutBlock>
  
  </main>
</template>

<script>
export default {
  name: 'process-tabs',
  head() {
    return {
      title: 'About Us',
    }
  },
  data() {
    return {
      openTab: 0,
    
      softwares: [
          {name:'xd'},
          {name:'photoshop'},
          {name:'ai'},
          {name:'nuxtjs'},
          {name:'netlifycms'},
        //   1{name:'wordpress'},{name:'elementor'},
        //   {name:'ganalytics'},
          {name:'shopify' }],
     faq: [
          {
              question: 'Can I make changes to the website myself?',
              answer: 'Yes! I think this is one of the points that makes me stand out from other people who sell websites. Since I use the latest software it’s very easy to edit the text, images and other content on the pages. You can almost change everything if you want to.'
          },
          {
              question: 'Who owns the website after you\'re done?',
              answer: 'You. I don’t own anything of the website. If you want I can give you full admin rights, so you can even delete me as you want. You pay for the website, so it’s your property.'
          },
          {
              question: 'How long does it take to finish a website',
              answer: 'Approximately 2-3 months. This mainly depends on the different revisions rounds that we have to go through to get a good result. '
          }
      ]
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
  
  },
}

</script>

<style lang="scss" scoped>
.software-grid {
     .software {
         &#shopify{
        height: 4rem;
        margin: 3rem auto 0;
    }
     }
}
.tab {
    &__description {
        border: 1px solid $secondary-color;
        position: relative;
        z-index: -1;
    }
    &__title {
        margin-bottom: -1px;
        position: relative;
        z-index: 5;
    }
}
.active {
    border: 1px solid $secondary-color;
  color: $secondary-color;
  border-bottom: 1px solid white;
}
.in-active {
  color: $secondary-color-dark;
}

</style>