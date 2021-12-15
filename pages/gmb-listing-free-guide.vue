<template>
  <main class="gmb-page">
    <PageHeader firstTitle="Google Business Profile" secondTitle="Free Guide" />
    <section class="pt-0">
      <div class="container">
        <h2 class="heading-secondary text-center">
          8 Simple Steps To Get Free Exposure From Google WITHOUT Paying For It
        </h2>

        <div class="flex gap-8 flex-col md:flex-row justify-between items-center">
          <div class="gmb__img w-1/3">
            <nuxt-img src="img/gmb-cover.webp" />
          </div>
          <div class="w-3/4">
            <h3 class="text-5xl mb-8">
              Download our free guide and you'll get access to...
            </h3>
            <ul class="checklist__list">
              <li class="checklist__item">
                <span><svg-icon name="checkmark" /></span>
                <p>
                  <strong class="mr-3">Step-By-Step Video Trainings: </strong> Break Down
                  The Most Important F-R-E-E Real Estate That Google Gives Businesses And
                  How To Optimize It For Your Company
                </p>
              </li>
              <li class="checklist__item">
                <span><svg-icon name="checkmark" /></span>
                <p>
                  <strong class="mr-3">Bonus! A Downloadable Guide: </strong> To Walk You
                  Through The Most Important Aspects Of This Platform
                </p>
              </li>
            </ul>
            <!-- <a
              href="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/619d106e95592206345acb35"
              class="btn"
              ><h2 class="text-4xl font-bold">Yes! Download My Google Training</h2>
              <p>Get Access to the FREE Video Guides and PDF Guide Immediately</p></a
            > -->
            <button class="btn" @click="showModal = true">
              <h2 class="text-4xl font-bold">Yes! Download My Google Training</h2>
              <p>Get Access to the FREE Video Guides and PDF Guide Immediately</p>
            </button>

            <p>
              Because Google Gives Away This Exposure - We're Giving Away This Inside
              Scoop Training Free Too!
            </p>
          </div>
        </div>
        <div class="flex items-center gap-8 mt-12">
          <div></div>
        </div>
      </div>
    </section>
    <section class="section__gmb-stats pb-0">
      <div class="container">
        <h2 class="heading-secondary text-center">
          What Can You Expect When You
          <span class="is-outline">Implement These Strategies</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReviewStat number="40"> Increase in Phone Calls! </ReviewStat>
          <ReviewStat number="64">
            in Exposure on Education related Searches!
          </ReviewStat>
          <ReviewStat number="143"> Increase in Maps Listings! </ReviewStat>
        </div>
        <button class="btn w-full" @click="showModal = true">
          <h2 class="text-4xl font-bold">Yes! Download My Google Training</h2>
          <p>Get Access to the FREE Video Guides and PDF Guide Immediately</p>
        </button>
      </div>
    </section>
    <transition name="fade">
      <Modal v-show="showModal" @close-modal="showModal = false">
        <GBPform />
      </Modal>
    </transition>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  head: {
    title: "8 Steps to Increase Expposure on Google",
    meta: [
      {
        description:
          "Insightful conversations and tools shared by local business leaders.",
      },
    ],
  },
};
</script>

<style lang="scss">
.gmb-page {
  .page-header {
    background: $hero-gradient,
      top right/ cover no-repeat url("~/assets/img/gmb-header.jpg") !important;
  }
}
.btn {
  .heading-secondary,
  p {
    color: $white;
    margin: 0;
  }
}
.section__gmb-stats {
  .btn {
    margin: 3rem auto;
    display: block;
  }
}
</style>
