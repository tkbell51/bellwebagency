<template>
  <main>
    <PageHeader title="Web Design &amp; Development" />
    <ServiceContent
      class="section-header"
      title="Web Design Package"
      list-header="Web Design Package"
      direction="ltr"
      :services="[
        'Website Design',
        'Website Development',
        'Mobile Site Design',
        'Responsive Development',
        'Ecommerce Development',
        'Website SEO',
      ]"
      subtitle="Reach your clients where they are."
      description="Consider all the ways your clients use technology to engage with your brand; websites, social media, mobile devices, digital marketing, email marketing, podcasts, and beyond. The expansion of technology has blurred the lines between physical and digital – forcing businesses to rethink the way they engage their clients and emphasizing the importance of innovative virtual experiences."
      isHref
      link="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f"
      link-c-t-a="Let's Get Started"
      image="portfolio/gravity-home.jpg"
      image-alt="Gravity Counseling Group Present"
    />
    <!-- <section class="section__software">
      <div class="container">
        <h2 class="heading-secondary pt-6 text-center">Software Used</h2>
        <div class="software-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <svg-icon
            v-for="item in softwares"
            :key="`${item.name}`"
            :name="`${item.name}`"
            :id="`${item.name}`"
            class="software mx-auto"
          />
        </div>
      </div>
    </section> -->
    <section class="section__include">
      <div class="container">
        <h2 class="heading-secondary text-center">All Website Packages Are Custom</h2>
        <p class="text-center font-bold mb-24">Capabilities Include:</p>
        <AccordionBlock
          class="m-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          :list="brandInclude"
        />
      </div>
    </section>
    <ServiceContent
      title="Website Maintenance Package"
      list-header="Website Maintenace"
      subtitle="Let us take care of your website so you don't have to"
      direction="rtl"
      description="Spend your time on running your business and let us maintain your website. We will make sure it stays up to date and secure. You will receive monthly reports on site traffic."
      :services="[
        'Content and Image Updates',
        'Monthly Site Traffice Report',
        'Technical Support',
        'Security Monitoring',
        'Software Updates',
      ]"
      image="web-maint.png"
      image-alt="Web Maintenance"
    />

    <PortfolioSection />

    <section class="section__faq">
      <div class="container">
        <Tabs>
          <Tab title="General">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestionBlock
                question="How much does it cost to work with you?"
                answer="Every project is unique, so we always like to schedule an introduction call to meet and discuss in detail your unique design needs, business goals, and see if we are the right team for you. Then we’ll create a custom project proposal and quote unique to you and your project."
              />
              <QuestionBlock
                question="I'm ready to get started! Now what?"
                answer="Excellent! The first step is to reach out through our client inquiry form on the contact page. From there you’ll receive a link to schedule your first design consult with us where we’ll get to know each other, your business, your website design needs and make sure we’re the right team for you."
              />
              <QuestionBlock
                question="How soon can we begin?"
                answer="I typically book 3 - 4 web design projects per month. To get an idea of our current availability, fill out our client inquiry form on our contact page"
              />
              <QuestionBlock
                question="Do you offer payment plans?"
                answer="Yes. Working with a professional designer can be a significant investment, so we work to make payments as simple as possible for our clients. Most brand projects are paid in two installments, while website projects or combo brand and website projects can be broken down into 3, 4, or 6 payments. All payments are due before the completion of your project."
              />
            </div>
          </Tab>
          <Tab title="Experience">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestionBlock
                question="What if I need a more custom website package?"
                answer="While we begin with our starting base package, we work with you to expand and build up the perfect website design package for you. Our base packages are what we know are the bare minimum in order to provide you with the most effective starting point for your website. But we encourage you to bring your dream wish list so that we can build a unique package to best fit your needs."
              />
              <QuestionBlock
                question="How many rounds of edits do I get?"
                answer="As we build on staging sites, you have constant access to your site and therefore can make faster and more confident edits and changes. Because of this feature, we don’t have a cap on edits on our website projects. We encourage you to send any and all edits, questions, or changes as they come to you so that we can make updates as quickly as possible and you can reflect on those changes through the staging site."
              />
              <QuestionBlock
                question="How much access will I have during the build?"
                answer="We build all of our websites on what’s referred to as a “Staging” website. A staging site is a live site that allows you to track and follow along with each and every step of your new website’s build. The staging site also allows you to view your site, real-time, on any an all mobile devices so that you get the most accurate idea of exactly what your clients will experience when on your site."
              />
              <QuestionBlock
                question="Do you offer a la carte website design services?"
                answer="Not at this time. We only offer full rebrands, complete site builds, or redesigns. However, we do offer separate, stand-alone projects to existing clients that have previously completed a brand and/or website with us."
              />
            </div>
          </Tab>
          <Tab title="Deliverables">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestionBlock
                question="What additional costs might come up during a project?"
                answer="We work to be as transparent as possible during our builds so that there are no additional charges or surprise fees. The only additional costs that might come up would be any licensing fees for special plugins, artwork, or media, as well as any additional design time beyond your contracted timeframe. We try to provide both free and paid options before incurring any additional fees on top of a project total."
              />

              <QuestionBlock
                question="What happens after the website is launched?"
                answer="With education being one of our top goals, we will host what we call a “teaching session” during your launch week, where you will sit with your developer and walk through your site in order to help you maintain and manage your own website moving forward. We also offer technical support packages that we will discuss with you at the end of your project."
              />
            </div>
          </Tab>
          <Tab title="Responsibilities">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestionBlock
                question="How much work do I have to do upfront before my project?"
                answer="Every brand package includes one Brand Questionnaire and a Pinterest Inspiration Moodboard that must be completed by you by the Monday before your project start date."
              />
              <QuestionBlock
                question="What do I need to have ready by my project start date?"
                answer="Be sure to have your professional email address, professional phone number (if relevant) and any other contact information or marketing media such as brand photography or headshots prepared before our design start date."
              />
            </div>
          </Tab>
        </Tabs>
      </div>
      <SectionLink
        is-href
        link="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f"
        name="Let's Get Started"
      />
    </section>
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
        // {name:'wordpress'},{name:'elementor'},
        // { name: "ganalytics" },
        { name: "shopify" },
      ],
      brandInclude: [
        {
          title: "Website Design",
          description:
            "This includes the custom design of any website pages or features from basic pages to portfolio galleries, blogs, landing pages, testimonials, product pages, questionnaires, video or motion graphic needs, and beyond.",
        },
        {
          title: "Website Development",
          description:
            "This includes the complete build-out of your website from basic pages to custom forms, questionnaires, eCommerce capabilities, shop integrations, responsive development, custom site functionality, language translations, and any critical development assets including SSL Certificate set up.",
        },
        {
          title: "Fundamental SEO",
          description:
            "This includes keyword and market content research, content structure and keyword implementation, image optimization, all metadata and alt text, installment of Google Analytics and Search Console, as well as the submission of your website to Google post-launch.",
        },
        {
          title: "Copywriting",
          description:
            "We take care of all the content needs for your project through custom content questionnaires to help strategize and organize website page content and marketing funnels to professional copywriters that curate original engaging website copy infused with the SEO keywords and hierarchy.",
        },
        {
          title: "Responsive Mobile Site Design",
          description:
            "All websites are completely responsive across all devices, ensuring that your clients’ online experience is consistent no matter how they view your site.",
        },
        {
          title: "Custom Forms",
          description:
            "Custom on-site forms or questionnaires for your services or client intake process, as well as the customization of intake forms or questionnaires embedded via external programs.",
        },
        {
          title: "External Program Integrations",
          description:
            "We will connect and integrate any external email subscription programs, Client Management Systems, or social media feeds that you use for your business in order to streamline your onboarding/subscription process.",
        },
      ],
    };
  },
  head() {
    return {
      title: `Web Design`,
    };
  },
};
</script>

<style lang="scss">
section.section {
  &-header {
    .service__image {
      img {
        @apply rounded relative w-full shadow-xl;
      }
    }
  }
  &__software {
    background-color: $grey;
    .software-grid {
      .software {
        &#shopify {
          height: 3rem;
          margin: 3rem 0;
          @include respond(tab-port) {
            margin: 0 auto;
          }
        }
        &#nuxtjs {
          height: 12rem;
          margin-top: -17px;
          @include respond(tab-port) {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
