<template>
    <main>
        <Hero />
        <section class="section__services">
            <div class="container">
                <h2 class="heading-secondary mb-8">
                    Promote your passion<br />
                    <span class="is-outline">with our digital services</span>
                </h2>
                <div class="services-grid flex justify-between">
                    <ServiceCard
                        class="w-1/3"
                        title="Web Design &amp; Development"
                        icon="website-design"
                        link="web-design"
                        text="We will create
          websites that are unique to your business with the goal of converting visitors
          in to customers!"
                    />

                    <ServiceCard
                        class="w-1/3"
                        link="branding"
                        icon="digital-marketing"
                        title="Logo Design &amp; Branding"
                        text="We will design a unique brand identity that symbolizes your company vision, goals, and establish trust"
                    />
                    <ServiceCard
                        class="w-1/3"
                        icon="star"
                        link="review-management"
                        title="Review Reputation Management"
                        text=" We will create strategies and solutions that will bring more people to your
              website."
                    />
                </div>
            </div>
            <bg-curve color="grey" />
        </section>
        <section class="section__get-started">
            <div class="container">
                <div class="get-started">
                    <div class="get-started__content">
                        <h2 class="heading-secondary">Your Online <span class="is-outline">Storefront</span></h2>
                        <p class="white mb-5">
                            Customers make their first impressions by viewing your website. Your website has now become
                            your digital storefront. BWA is determined to provide an online storefront that does
                            multiple things for your business:
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
                    <div class="get-started__img">
                        <nuxt-img
                            src="img/home-get-started.jpg"
                            alt="People looking at computer"
                            class="rounded-xl shadow"
                        />
                    </div>
                </div>
            </div>
            <!-- <bg-curve color="grey" class="bottom-curve" /> -->
        </section>
        <section class="section__gmb">
            <BgCurve color="grey" class="top-curve" />
            <div class="container">
                <div class="gmb__content flex relative z-10">
                    <div class="gmb__content--text">
                        <h2 class="heading-secondary">
                            Do customers know<br /><span class="is-outline">where to find you?</span>
                        </h2>
                        <p class="">Establish an online presence with the world's largest search engine.</p>
                        <CheckList
                            :list="[
                                'Control the first impression',
                                'Make it easy for customers to connect with you',
                                'Show your services and products',
                                'Know how customers are finding you',
                            ]"
                        />

                        <!-- <NuxtLink class="btn" to="/gmb-listing-free-guide">Get Help With Google My Business</NuxtLink> -->
                        <a class="btn" href="https://go.bellwebagency.com/google-guide-5051" target="_blank">
                            Get Help With Google My Business
                        </a>
                    </div>
                    <div class="gmb__img">
                        <nuxt-img src="/img/gmb-photo.png" alt="Google my business" />
                    </div>
                </div>
            </div>
            <bg-curve color="white" />
        </section>

        <Testimonial />
        <Vision />
        <PortfolioSection />
    </main>
</template>

<script>
export default {
    data() {
        return {
            hover: false,
        }
    },
    head() {
        return {
            title: 'Home',
            script: [
                {
                    type: 'text/javascript',
                    src: 'https://www.clickfunnels.com/assets/cf_modal.js',
                    'data-delay': 0,
                    'data-exit': false,
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.section {
    &__services {
        padding: 1rem 0 35rem;
        position: relative;
        .heading-secondary {
            margin: 0 auto 3rem;
        }
        .services-grid {
            margin-bottom: 5rem;
            @include respond(tab-mid) {
                flex-wrap: wrap;
            }
        }
        @include respond(tab-port) {
            padding: 1rem 0 15rem;
        }
        @include respond(tab-small) {
            padding: 1rem 0 10rem;
        }
    }
    &__get-started {
        position: relative;
        z-index: 5;
        padding-bottom: 1rem;
        background: $grey;
        padding: 0;

        .get-started {
            @apply flex justify-between items-center  gap-8;
            @include respond(tab-port) {
                flex-direction: column;
            }
            &__content {
                position: relative;
                flex: 50%;
                color: $font-color;
                p {
                    color: $font-color;
                    width: 70%;
                    @include respond(tab-port) {
                        width: 100%;
                    }
                }
            }
            &__img {
                flex: 50%;
                img {
                    @include respond(tab-port) {
                        width: 80%;
                    }
                }
            }
        }
    }
    &__gmb {
        padding-top: 36rem;
        background: $section-gradient;
        padding-bottom: 15rem;
        position: relative;
        .gmb {
            &__img {
                @include respond(tab-port) {
                    display: none;
                }
            }
            &__content {
                position: relative;
                margin-bottom: 15rem;
                @include respond(tab-port) {
                    margin-bottom: 0;
                }
                &--text {
                    width: 95%;
                    color: $white;
                    .heading-secondary {
                        color: $white;
                    }
                    p {
                        color: $white;

                        width: 65%;
                        font-size: clamp(1.6rem, 2.5vw, 2rem);
                        margin: 1rem 0;
                        @include respond(phone) {
                            width: 80%;
                        }
                    }

                    @include respond(tab-port) {
                        width: 100%;
                    }
                }
            }
            @include respond(tab-port) {
                padding-top: 6rem;
            }
        }
        .top-curve {
            transform: scaleY(-1);
            top: -1rem;
            bottom: auto;

            @include respond(tab-port) {
                top: -5px;
            }
        }
        @include respond(tab-port) {
            padding: 20rem 0;
        }
    }
    // &__gmb {
    //   position: relative;
    //   z-index: 5;
    //   margin-bottom: -20rem;
    //   padding-bottom: 1rem;
    //   .primary-bg {
    //     background-color: $primary-color;
    //     width: 60%;
    //     position: absolute;
    //     height: 100%;
    //     z-index: -1;
    //     @include respond(tab-port) {
    //       width: 100%;
    //     }
    //   }
    //   .gmb {
    //     @apply flex justify-between flex-wrap;
    //     padding: 5rem 0;
    //     .heading-secondary {
    //       color: $white;
    //       margin-bottom: 2rem;
    //     }
    //     &__content {
    //       position: relative;

    //       flex: 50%;
    //       @include respond(tab-port) {
    //         flex: 100%;
    //         margin-bottom: 3rem;
    //       }
    //       &.left {
    //         margin-top: 3rem;
    //         p {
    //           width: 70%;
    //         }
    //       }
    //     }
    //     &__item {
    //       @apply flex items-center;
    //       svg {
    //         width: 20.5px;
    //         height: 14px;
    //         margin-right: 0.5rem;
    //       }
    //     }
    //     &__img-wrapper {
    //       @apply rounded;
    //       display: inline-block;
    //       height: 28rem;
    //       position: relative;
    //       z-index: 5;
    //     }
    //     &__dots {
    //       position: absolute;
    //     }
    //   }
    // }
}
.port {
    &-desktop {
        @include respond(tab-port) {
            display: none;
        }
    }
    &-mobile {
        @media only screen and(min-width: 56.25em) {
            display: none;
        }
    }
}
</style>
