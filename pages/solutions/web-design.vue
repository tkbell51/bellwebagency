<template>
  <main>
    <PageHeader
      firstTitle="Web Design &amp;"
      secondTitle="Development"
      pageDescription="Consider all the ways your clients use technology to engage with your brand; websites, social media, mobile devices, digital marketing, email marketing, podcasts, and beyond. The expansion of technology has blurred the lines between physical and digital – forcing businesses to rethink the way they engage their clients and emphasizing the importance of innovative virtual experiences."
    />

    <section class="section__offer">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="card">
            <div class="card__content">
              <h4 class="font-semibold uppercase text-2xl mb-4">Lead Focused</h4>
              <h2 class="heading-tertiary mb-4 orange">
                A good design not only looks good it will convert visitors into customers
              </h2>
              <p>
                Bell Web Agency will ask the important questions. We will make design
                decisions based on the vision and passion you want to display to your
                target audience. The process we put in place will help convert visitors
                into customers at a high conversion rate.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <h4 class="font-semibold uppercase text-2xl mb-4">Custom Design</h4>
              <h2 class="heading-tertiary mb-4 orange">
                All our designs are 100% custom. No Templates here.
              </h2>
              <p>
                Your company is unique, so why try to dress it up to match others? This
                allows us to work with you to design a creative and unique website for
                your company.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <h4 class="font-semibold uppercase text-2xl mb-4">Work With You</h4>
              <h2 class="heading-tertiary mb-4 orange">
                You are part of the process of designing your company's site
              </h2>
              <p>
                Every step of the process requires your approval to move forward. We will
                work with you from kick off to launch and make sure you're satisfied every
                step of the way.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <h4 class="font-semibold uppercase text-2xl mb-4">Mobile Responsive</h4>
              <h2 class="heading-tertiary mb-4 orange">
                If your site doesn't work on a phone, you are losing customers
              </h2>
              <p>
                Mobile users make up over 51% of total internet users. With mobile device
                usage increasing, it is important that websites conform to these devices
                for optimal viewing and user experience. Bell Web Agency wants your site
                to perform at its best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Vision />
    <PortfolioSection />
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: `Web Design`,
    };
  },
};
</script>

<style lang="scss">
.section__offer {
  .card {
    margin: 0;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
