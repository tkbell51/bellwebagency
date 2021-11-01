<template>
  <main>
    <Hero />
    <section class="section__services">
      <div class="container">
        <h2 class="heading-secondary text-center">
          Digital Tools to get the
          <span class="orange">results</span> you're looking for!
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon="logo-icon"
            title="Branding &amp; Logo Design"
            link="brand-logo-design"
          >
            <p>
              In a world full of brands, clients are overwhelmed with options. Manage the
              perception of your business and differentiate yourself from your competition
              through a compelling brand identity.
            </p>
          </ServiceCard>
          <ServiceCard
            icon="website-design"
            title="Website Design &amp; Development"
            link="web-design"
          >
            <p>
              Your business’s success is no longer bound by your physical location. We
              create innovative digital experiences that will transform the way you engage
              with your clients.
            </p>
          </ServiceCard>
          <ServiceCard
            class="reviewlead"
            icon="digital-marketing"
            link="review-management"
            title="Review Reputation Management"
          >
            <p>
              Create a review and lead generating system at the same time. Your reputation
              is shown in search engine results, and customers are now more likely to
              choose your business to spend their hard earned money.
            </p>
          </ServiceCard>
        </div>
      </div>
    </section>

    <section class="section__get-started">
      <div class="primary-bg"></div>
      <div class="container">
        <div class="get-started">
          <div class="get-started__content left white">
            <svg-icon class="get-started__dots" name="orange-dots" />
            <h2 class="heading-secondary">
              Ready to get <span class="orange">started?</span>
            </h2>
            <p class="white mb-5">
              Customers make their first impressions by viewing your website. Your website
              has now become your digital storefront. BWA is determined to provide an
              online storefront that does multiple things for your business:
            </p>
            <CheckList
              :list="[
                'Clearly explains your business',
                'Attract new customers via Google',
                'Perfectly viewable on desktop and mobile devices',
                'Take concerns away from current and potential clients',
              ]"
            />
          </div>
          <div class="get-started__content right">
            <div class="get-started__img-wrapper">
              <img
                src="~/assets/img/home-get-started.jpg"
                alt="People looking at computer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimonial />
    <PortfolioSection />

    <ProjectCTA />
  </main>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  head() {
    return {
      title: "Home",
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  &__services {
    .heading-secondary {
      width: 50%;
      margin: 4rem auto;
      @include respond(tab-port) {
        width: 80%;
      }
    }
  }
  &__get-started {
    position: relative;
    z-index: 5;
    margin-bottom: -20rem;
    padding-bottom: 1rem;
    .primary-bg {
      background-color: $primary-color;
      width: 60%;
      position: absolute;
      height: 100%;
      z-index: -1;
      @include respond(tab-port) {
        width: 100%;
      }
    }
    .get-started {
      @apply flex justify-between flex-wrap;
      padding: 5rem 0;
      .heading-secondary {
        color: $white;
        margin-bottom: 2rem;
      }
      &__content {
        position: relative;

        flex: 50%;
        @include respond(tab-port) {
          flex: 100%;
          margin-bottom: 3rem;
        }
        &.left {
          margin-top: 3rem;
          p {
            width: 70%;
          }
          .get-started__dots {
            left: -11rem;
            top: -2rem;
            z-index: -1;
            @include respond(tab-port) {
              display: none;
            }
          }
        }
      }
      &__item {
        @apply flex items-center;
        svg {
          width: 20.5px;
          height: 14px;
          margin-right: 0.5rem;
        }
      }
      &__img-wrapper {
        @apply rounded;
        display: inline-block;
        height: 28rem;
        position: relative;
        z-index: 5;
        img {
          @apply shadow-xl rounded-xl;
        }
      }
      &__dots {
        position: absolute;
      }
    }
  }
}
</style>
