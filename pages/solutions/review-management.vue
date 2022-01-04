<template>
    <main class="review-page">
        <PageHeader
            firstTitle="Review Lead "
            secondTitle="Reputation Management"
            pageDescription="Have a strategy to get more 5 star revies from your real customers on sites like Google, Facebook, and Yelp!"
        />
        <section class="section__stats">
            <div class="container">
                <h2 class="heading-secondary">
                    Why is review management now more
                    <span class="is-outline">important than ever before?</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ReviewStat number="95">
                        of consumers that search online for local businesses and
                        <strong class="orange">91%</strong> of them will also read online reviews about each local
                        business.
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
            <BgCurve color="white" class="bottom-curve" />
        </section>

        <section class="section__review-cards">
            <div class="container">
                <div
                    v-for="(card, index) in info"
                    :key="index"
                    class="review-card flex gap-2"
                    :class="index % 2 == 1 ? 'rtl' : ' '"
                >
                    <div class="review-card__img">
                        <nuxt-img class="review-card__img" v-if="card.image" :src="card.image" />
                    </div>
                    <div class="review-card__text self-center">
                        <h3 class="heading-tertiary">{{ card.title }}</h3>
                        <h4>{{ card.subtitle }}</h4>
                        <p>{{ card.description }}</p>
                    </div>
                </div>
            </div>
            <BgCurve color="grey" />
        </section>

        <!-- <section class="section__review-testimonials" /> -->

        <section class="section__review-cta">
            <div class="container">
                <h2 class="heading-secondary">
                    No more fear of<br /><span class="is-outline">asking for reviews</span>
                </h2>
                <a href="https://calendly.com/bellwebagency/initial-discussion" class="btn self-start" target="_blank"
                    >Schedule Call Today</a
                >
            </div>
        </section>
    </main>
</template>

<script>
import ReviewStat from '~/components/ReviewStat.vue'
export default {
    components: { ReviewStat },
    data() {
        return {
            info: [
                {
                    image: '/img/five-star-1.jpg',
                    title: 'Boost Your Average star rating',
                    subtitle: 'everywhere it matters',
                    description:
                        "Increase your organization's average star ratings across sites like Google, Facebook, Yelp! and everywhere else clients & customers are finding you.",
                },
                {
                    image: '/img/review-2.jpg',
                    title: 'GET MORE REAL 5-STAR REVIEWS NOW',
                    subtitle: 'GET CUSTOMERS TO HAPPILY LEAVE 5-STAR REVIEW',
                    description:
                        'The total number of reviews you have matters, especially if that number happens to be zero. Make it easy for your clients & customers to give you 5-Star reviews and outpace your competitors.',
                },
                {
                    image: '/img/review-3.jpg',
                    title: 'KEEP YOUR REVIEWS FRESH AND FREQUENT',
                    subtitle: "DON'T LET STALE REVIEWS HURT YOUR BUSINESS",
                    description:
                        'Never stop getting new reviews because 73% of consumers believe that reviews older than 3 months are not relevant.',
                },
                {
                    image: '/img/review-4.jpg',
                    title: 'REVIEW MONITORING & ALERTING',
                    subtitle: 'BE THE FIRST TO KNOW ABOUT NEW REVIEWS',
                    description:
                        'Know about your reviews as they get posted so you can CELEBRATE positive reviews and RESPOND to negative feedback before it does harm',
                },
                {
                    image: '/img/review-5.jpg',
                    title: 'AUTOMATICALLY SHARE 5-STAR REVIEWS',
                    subtitle: 'MAXIMIZE YOUR REPUTATION BY SHARING IT',
                    description:
                        'Your great reputation deserves to be seen! Maximize exposure by automatically sharing your 5-Star reviews in Facebook or Twitter. Plus, automatically update your website with REAL verifiable testimonials.',
                },
                {
                    image: '/img/review-6.jpg',
                    title: 'NEUTRALISE NEGATIVE REVIEWS IN THEIR TRACKS',
                    subtitle: 'AND GET VALUABLE CLIENT FEEDBACK IN PRIVATE',
                    description:
                        "Protecting your reputation isn't just about getting more positive reviews, it's about stopping most bad reviews before they get posted",
                },
                {
                    image: '/img/review-7.jpg',
                    title: 'MEASURE YOUR PROGRESS TOWARDS A HEALTHY REPUTATION',
                    subtitle: 'DEEP INSIGHTS & REPORTING ON YOUR REPUTATION',
                    description: 'We provide reporting so you can track your reviews and reputation health.',
                },
            ],
        }
    },
    mounted: function () {
        document.querySelector('.page-header .bg-curve path').style.fill = '#dbdbdb'
    },
    head() {
        return {
            title: `Review Management Reputation`,
        }
    },
}
</script>

<style lang="scss">
.reviewLead img {
    width: 600px;
}
.section {
    &__stats {
        background: $grey;
        padding-bottom: 46rem;
        @include respond(tab-port) {
            padding-bottom: 20rem;
        }
    }
    &__review-cards {
        padding-bottom: 40rem;
        @include respond(tab-port) {
            padding-bottom: 20rem;
        }
        .review-card {
            @apply shadow;
            background: $section-gradient;
            color: $white;
            margin: 1rem auto;
            border-radius: 12px;
            overflow: hidden;
            // height: 30rem;
            // width: 90%;

            .heading-tertiary {
                @apply uppercase;
                color: $secondary-color;
            }
            h4 {
                @apply font-bold uppercase;
                font-size: 1.8rem;
                color: $grey;
            }
            p {
                color: $white;
            }
            &.rtl {
                .review-card__img {
                    order: 1;
                }
            }
            &__text {
                margin: 0 auto;
                padding: 4rem 8rem;
                flex: 75%;
                @include respond(tab-mid) {
                    padding: 4rem 4rem;
                }
            }
            &__img {
                img {
                    height: 100%;
                }
            }
            @include respond(tab-port) {
                img {
                    display: none;
                }
            }
        }
    }
    &__review-cta {
        background: $grey;
        padding-bottom: 0rem;
    }
}
.review-page {
    & + .footer {
        & .top-curve path {
            fill: $grey !important;
        }
    }
}
</style>
