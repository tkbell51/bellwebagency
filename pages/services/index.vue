<template>
  <main>
    <PageHeader :title="'Services'" />

    <ServiceContent
      :title="'Website Design & Development'"
      :listHeader="'Website Design'"
      :direction="'ltr'"
      :services="[
        'Website Design',
        'Website Development',
        'Mobile Site Design',
        'Responsive Development',
        'Ecommerce Development',
        'Fundamental SEO',
        'Website Maintenance Packaage',
      ]"
      :subtitle="'Reach your clients where they are.'"
      :description="'Your business’s success is no longer bound by your physical location. We create innovative digital experiences that will transform the way you engage with your clients.'"
      link="services/web-design"
      :linkCTA="'Expand your reach'"
      image="web-design.png"
      imageAlt="web design"
    />

    <ServiceContent
      class="review "
      :title="'Review Reputation Management'"
      :listHeader="'Review Reputation Management'"
      :direction="'ltr'"
      :services="[
        'Boost your average star rating',
        'Promote positive reviews',
        'Trap bad reviews before they hit review sites',
        'Take Control of your online reputation',
        'Review monitoring and alerting',
        'Remind happy customers to leave reviews',
      ]"
      :subtitle="'Turn positive reviews into more business'"
      :description="'Let BWA help you put your best foot forward by maximizing your good reviews and minimizing your bad reviews'"
      link="services/review-management"
      :linkCTA="'Manage the Feedback'"
      image="reviews-img.png"
      imageAlt="ReviewLead"
    />

    <ServiceContent
      class="brand"
      :title="'Brand &amp; Logo Design'"
      :listHeader="'Branding Design'"
      :direction="'ltr'"
      :services="[
        'Brand Development',
        'Visual Systems',
        'Logo Design',
        'Digital Collateral Design',
        'Print Collateral Design',
      ]"
      :subtitle="'Make it easy for customers to choose you.'"
      :description="'In a world full of brands, clients are overwhelmed with options. Manage the perception of your business and differentiate yourself from your competition through a compelling brand identity.'"
      link="services/brand-logo-design"
      :linkCTA="'Build Your Brand'"
      image="brand-image.jpg"
      imageAlt="brand &amp; logo design"
    />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `Services| Bell Web Agency`,
    };
  },
};
</script>

<style lang="scss">

section.review {
  background-color: $primary-color;
  padding: 4rem 0;
  color: $white;
  .heading-secondary {
    color: $white;
  }
  p {
    color: white;
  }
}
section.brand {
  .service__image {
    img {
      @apply rounded relative w-full shadow-xl;
      z-index: 2;
    }
   @include respond (tab-port) {
     margin: 4rem auto;
   }
  }
}
</style>
