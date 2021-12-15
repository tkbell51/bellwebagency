<template>
  <main class="strategy-page">
    <PageHeader firstTitle="Need Help with" secondTitle="Google My Business" />
    <section class="section__content">
      <div class="container">
        <h2 class="heading-secondary">
          Want Help Getting Your Google My Business Listing To Produce Results?
        </h2>
        <h4 class="text-5xl mb-16">
          Let Us Show You How To Use Your Google To Attract More Clients &amp; Customers
          And Answer All Your Questions During Your Free Virtual Strategy Session
        </h4>
        <div class="flex gap-12 mt-8 flex-col md:flex-row justify-between items-center">
          <div class="strategy__img w-1/3">
            <nuxt-img
              provider="cloudinary"
              src="headshot"
              alt="Tim Bell"
              class="rounded-lg"
            />
          </div>
          <div class="w-3/4">
            <p>
              I'd like to personally help you with your Google My Business listing by
              offering a free 1:1 strategy session. During this session, we&#39;ll cover
              the following...
            </p>
            <ul class="checklist__list">
              <li class="checklist__item">
                <span><svg-icon name="checkmark" /></span>
                <strong class="mr-3"
                  >Look at Your Business&#39;s Current Situation</strong
                >
              </li>
              <li class="checklist__item">
                <span><svg-icon name="checkmark" /></span>
                <strong class="mr-3"
                  >​Answer Your Questions about Using Google My Business</strong
                >
              </li>
              <li class="checklist__item">
                <span><svg-icon name="checkmark" /></span>
                <strong class="mr-3"
                  >Recommend strategies and tactics to help you get more customers</strong
                >
              </li>
            </ul>
            <a href="https://calendly.com/bellwebagency/strategy-session" class="btn"
              >Get Your Free Strategy Session<br />Your First Step to Getting More
              Customers Online</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section__content {
  padding-bottom: 2rem;
  .strategy__img {
    img {
      @apply rounded-xl shadow-xl m-auto;
      box-shadow: 10px 10px $secondary-color;
    }
  }
}
</style>
