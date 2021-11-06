<template>
  <main>
    <PageHeader title="Review Lead Reputation Management" />

    <ServiceContent
      class="reviewLead"
      title="Review Reputation Management"
      list-header="Review Reputation Management"
      direction="ltr"
      subtitle="Turn positive reviews into more business"
      description="Have a strategy to get more 5 star revies from your real customers on sites like Google, Facebook, and Yelp!"
      isHref
      link="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f"
      link-c-t-a="Manage the Feedback"
      image="5-star-bubble.jpg"
      image-alt="message bubbles with 5 stars"
      :services="[
        'Boost your average star rating',
        'Promote positive reviews',
        'Trap bad reviews before they hit review sites',
        'Take Control of your online reputation',
        'Review monitoring and alerting',
        'Remind happy customers to leave reviews',
      ]"
    />
    <section class="section__stats">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReviewStat number="95">
            Consumers that search online for local businesses and <strong>91%</strong> of
            them will also read online reviews about each local business.
          </ReviewStat>
          <ReviewStat number="84">
            people trust online reviews as much as a personal recommendation
          </ReviewStat>
          <ReviewStat number="73">
            of consumers think that reviews older than 3 months aren’t relevant
          </ReviewStat>
        </div>
        <!-- <small
                    >Source:
                    https://www.brightlocal.com/learn/local-consumer-review-survey/</small
                > -->
      </div>
    </section>

    <section class="section__review-testimonials" />
  </main>
</template>

<script>
import ReviewStat from "~/components/ReviewStat.vue";
export default {
  components: { ReviewStat },
  data() {
    return {};
  },
  head() {
    return {
      title: `Review Management Reputation`,
    };
  },
};
</script>

<style lang="scss">
.reviewLead img {
  width: 600px;
}
.section {
  &__stats {
    // background: $primary-color;
  }
}
</style>
