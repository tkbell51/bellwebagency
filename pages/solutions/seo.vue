<template>
  <main class="seo-page">
    <PageHeader
      firstTitle="Search Engine"
      secondTitle="Optimization"
      pageDescription="Is your website grabbing the attention of potential clients? Site Optimization is the art of discovering what your clients are searching for, structuring your website to bring value, and then convert potential customers into leads"
      curve="grey"
    />
    <OfferSection :offer="offer" />
    <section class="section__seo-cta">
      <div class="container">
        <h2 class="heading-secondary">
          Ready to rank <br /><span class="is-outline">higher on Google</span>
        </h2>
        <a
          href="https://bellwebagency.hbportal.co/schedule/608330e0ca6881002a936dee"
          class="btn self-start"
          target="_blank"
          >Schedule Call Today</a
        >
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      offer: [
        {
          title: "Keyword Research",
          icon: "key",
          description:
            "We research how people actually talk about your product or service, so that when they find your website, there's no need to look anywhere else.",
        },
        {
          title: "On-Page Recommendations",
          icon: "website-building",
          description:
            "Once we know how people are searching for you, we can make content changes so that you will appear in search results. We'll work with you and make recommendations on page descriptions, titles, and headings that tell search engines and potential clients what you have to offer.",
        },
        {
          title: "Technical SEO",
          icon: "code-seo",
          description:
            "After scanning your site we will fix any technical issues that will stop search engines from finding you.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.section__seo-cta {
  padding-bottom: 0;
}
.seo-page {
  .section__what-offer {
    margin-top: 0;
    .what-offer {
      padding-bottom: 35rem;
    }
    .top-curve {
      display: none;
    }
  }
}
</style>
