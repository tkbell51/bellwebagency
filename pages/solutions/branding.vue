<template>
  <main class="branding-page">
    <PageHeader
      firstTitle="Logo Design &amp;"
      secondTitle="Branding"
      pageDescription="Your logo symbolizes the identity of your business. A cohesive brand identity is crucial for a business. Without a consistent identity your website might not be able obtain the audience you invision. Is your branding consistent? We will help you craft a modern brand strategy that embodies your passion and vision"
    />

    <section class="section__quote">
      <div class="container">
        <div class="quote">
          <h2 class="heading-secondary">
            "Your brand isn't what you say it is.<br />
            It's what they say it is"
          </h2>
          <p class="">– Marty Neumeier</p>
        </div>
      </div>
      <BgCurve color="grey" />
    </section>

    <OfferSection :offer="faq" />

    <section class="section__branding-cta">
      <div class="container">
        <div>
          <h2 class="heading-secondary">
            Ready to build up <br /><span class="is-outline">Your brand?</span>
          </h2>
          <p class="w-full md:w-4/6">
            A strong brand is more than just a logo and tagline. It’s the approach that
            unifies your company’s messaging and design for better results. Let’s get
            started.
          </p>
        </div>
        <a
          href="https://calendly.com/bellwebagency/strategy-session"
          class="btn"
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
      faq: [
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
      ],
    };
  },
  head() {
    return {
      title: `Brand & Logo Design`,
    };
  },
};
</script>

<style lang="scss">
.section {
  &__quote {
    .quote {
    }
    padding-bottom: 25rem;
    @include respond(tab-port) {
      padding-bottom: 15rem;
    }
    @include respond(phone) {
      padding-bottom: 10rem;
    }
  }
}
.branding-page {
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
