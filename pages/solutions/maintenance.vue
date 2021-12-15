<template>
  <main class="maintenance-page">
    <PageHeader
      firstTitle="Website"
      secondTitle="Maintenance"
      pageDescription="Spend your time on running your business and let us maintain your website. We will make sure it stays up to date and secure. You will receive monthly reports on site traffic."
      curve="grey"
    />
    <OfferSection :offer="info" />
    <section class="section__maintenance-cta">
      <div class="container">
        <h2 class="heading-secondary">
          Ready to start <br /><span class="is-outline">Your project?</span>
        </h2>
        <p>Let's start with a free strategy session.</p>
        <a
          href="https://calendly.com/bellwebagency/initial-discussion"
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
      info: [
        {
          title: "Content Updates",
          description:
            "As your audience grows so should your content. If you don't have the time to make the updates, we will handle it for you.",
        },
        {
          title: "Site Monitoring",
          description:
            "We will perform regular checks for performance, availability, and functions of all the web services of your website.",
        },
        {
          title: "Analytics",
          description:
            "We will provide detailed reports of all the traffice going on your website. ",
        },
        {
          title: "Security Monitoring",
          description: "We will monitor for anything that could compromise your website.",
        },
        {
          title: "Software Updates",
          description:
            "We will make sure your website is updated on a regular schedule. This will keep your website from being exposed to hacks.",
        },
        {
          title: "Support",
          description:
            "Once your website is live, we won't leave you to handle it alone. Here are areas we will support you: Data or content errors, providing feedback, system training, user access issues, system going offline",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.maintenance-page {
  .section__what-offer {
    margin-top: 0 !important;
    .what-offer {
      padding-bottom: 35rem;
    }
    .top-curve {
      display: none;
    }
  }
}
</style>
