<template>
  <main class="videos-page">
    <PageHeader
      firstTitle="Google My Business"
      secondTitle="Training Videos"
      pageDescription="Watch these videos below. If you have questions, need help or want to
    know more – Call us at (864) 367-9008 or email info@bellwebagency.com"
    />
    <section class="section__gmb-videos">
      <div class="container">
        <h2 class="heading-secondary text-center">Welcome & Happy Learning</h2>
        <h3 class="heading-tertiary">Start Here! Important First Step</h3>
        <div style="padding: 56.25% 0 0 0; position: relative" class="my-24">
          <iframe
            src="https://player.vimeo.com/video/652068666?h=2af9573d18&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            title="2 - GMB | Primary Category"
          ></iframe>
        </div>
        <hr class="solid border-black mb-12" />
        <h3 class="heading-tertiary">Expand Your Strategy – Category Selection</h3>

        <div style="padding: 56.25% 0 0 0; position: relative" class="my-24">
          <iframe
            src="https://player.vimeo.com/video/652054416?h=56b9eff17c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            title="1 - GMB | Claim and Verify"
          ></iframe>
        </div>
        <hr class="solid border-black mb-12" />
        <h3 class="heading-tertiary">
          Super-Power Your GMB – Intermediate Tactics For A Competitive Edge
        </h3>

        <div style="padding: 56.25% 0 0 0; position: relative" class="my-24">
          <iframe
            src="https://player.vimeo.com/video/652055574?h=e9e1abce41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            title="3 - GMB | Posts Messages Insights"
          ></iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    script: [{ src: "https://player.vimeo.com/api/player.js" }],
  },
};
</script>

<style lang="scss" scoped></style>
