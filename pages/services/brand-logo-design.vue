<template>
  <main>
    <PageHeader title="Brand &amp; Logo Design" />
    
    <ServiceContent
      title="Brand &amp; Logo Design"
      listHeader="Branding Design"
      direction="ltr"
      :services="[
        'Brand Development',
        'Visual Systems',
        'Logo Design',
        'Digital Collateral Design',
        'Pring Collateral Design',
        'Videos & Photos'
      ]"
      subtitle="Make it easy for customers to choose you."
      description="In a world full of brands, clients are overwhelmed with options. Manage the perception of your business and differentiate yourself from your competition through a compelling brand identity."
      link="contact"
      linkCTA="Build Your Brand"
    >
    
    </ServiceContent>
   <section class="section__quote">
      <div class="container">

       <div class="quote ">

    <h2 class="heading-secondary">
            "Your brand isn't what you say it is.<br/> It's what they say it is"
          </h2>
          <p class="">– Marty Neumeier</p>
      </div>
        </div>
    </section>
    <section class="section__include">
      <div class="container">
        <h2 class="heading-secondary text-center">All Brand Packages Are Custom</h2>
        <p class="text-center font-bold mb-24">Capabilities Include:</p>
        <AccordionBlock class="w-1/2 m-auto" :list="brandInclude" />
      </div>
    </section>
    <PortfolioSection />
    <section class="section__faq">
      <div class="container">
        <Tabs>
          <Tab title="General">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestionBlock
                question="How much does it cost to work with you?"
                answer="We offer 2 packages with the first package starting at $200. We're happy to work with you to add additionial assets if needed."
              />
              <QuestionBlock
                question="How many other clients do we work with at a time?"
                answer="In order to provide the level of quality and dedication that we believe our clients deserve, we only work with 2 - 3 clients at any given point. This allows us to work much more intimately with our clients and move much faster as our response time is sooner and our ability to implement changes or edits is almost immediate."
              />
              <QuestionBlock
                question="Do you offer any a la carte design services?"
                answer="Not at this time. We only offer full rebrands, complete site builds, or redesigns. However, we do offer separate, stand-alone projects to existing clients that have previously completed a brand and/or website with us."
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
                question="How long does each package take?"
                answer="Every Brand Design project takes approximately 1 week to complete; completely dependent upon client response time and project scope."
              />
              <QuestionBlock
                question="What is included in each package?"
                answer="All of our brand packages include a set number of logo designs, collateral items, and design revisions. You can expand upon our starting package in order to create the perfect brand package for your business."
              />
              <QuestionBlock
                question="How do we communicate through the design process?"
                answer="We will have one initial design meeting before we begin any design work, followed by unlimited email, phone, and video call support during the duration of your design project’s timeline."
              />
              <QuestionBlock
                question="How will I receive each design phase?"
                answer="We use a program called HoneyBook to conduct and submit each phase of your design project. This program will allow you to select, reply, and comment on each phase of your design work via email so that we can streamline each phase and provide complete clarity and transparency as we move through the design process."
              />
            </div>
          </Tab>
          <Tab title="Deliverables">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestionBlock
                question="What files are included in each brand package?"
                answer="All final logo designs come in all popular file formats, including JPG, PDF, PNG, AI, EPS, and SVG files. Depending on your specific package additional files may be included for your brand collateral items."
              />
              <QuestionBlock
                question="Are the files editable?"
                answer="All final logo designs, business cards, and social media graphics will be finalized set pieces (not editable). Some package add-ons come with brand collateral items that will include editable files – those will always be notated in your project proposal."
              />
              <QuestionBlock
                question="Who orders my business cards?"
                answer="You are responsible for ordering any printing of your brand collateral items including business cards, stationery, stickers, etc… but we are happy to assist you in placing these orders at the end of your project if you would like our assistance."
              />
              <QuestionBlock
                question="How will I receive my final files?"
                answer="You will receive your digital design files and images in all popular file formats through email."
              />
            </div>
          </Tab>
          <Tab title="Responsibilities">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestionBlock
                question="How much work do I have to do upfront before my project?"
                answer="Every brand package includes one Brand Questionnaire that must be completed first to begin the design process"
              />
              <QuestionBlock
                question="What do I need to have ready by my project start date?"
                answer="Be sure to have your professional email address, professional phone number (if relevant) and any other contact information or marketing media such as brand photography or headshots prepared before our design start date."
              />
            </div>
          </Tab>
        </Tabs>
      </div>
      <SectionLink link="contact" name="Build your brand" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      brandInclude: [
        {
          title: "Logo Design",
          description:
            "This includes any identifiable company logos; your primary logo, any secondary logos, custom marks and/or brand icons.",
        },
        {
          title: "Brand Identity",
          description:
            "This includes custom color palettes, typography styling, font pairings and hierarchy, color usage guidelines, and any other details that define the tone and mood of your brand.",
        },
        {
          title: "Digital Marketing Assets",
          description:
            "Any items to assist in your brand’s marketing via digital platforms such as social media, online directories, email marketing, and other online advertising; social media graphics, social media templates, profile and cover photos, email marketing templates, and beyond.",
        },
        {
          title: "Print Marketing Assets",
          description:
            "Any items to assist in your brand’s marketing through the use of printed items; business cards, brand stationery, packaging, signage, or other physical merchandise.",
        },
        {
          title: "Videography & Photography",
          description: ""
        }
      ],
    };
  },
   head() {
    return {
      title: `Brand & Logo Design | Bell Web Agency`,
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  &__quote {
    background: linear-gradient( to right,lighten($primary-color, 10%), $primary-color );
    h2, p{

      color: $white;
    }
  }
}
</style>
