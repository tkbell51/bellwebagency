<template>
    <section class="hero">
        <div class="container">
            <div class="hero__content w-full">
                <div class="hero__content--text">
                    <h1 class="heading-primary">
                        Show the world<br /><span class="is-outline">what you do</span>
                        <!-- <span class="heading-detail">
              <span class="heading-text">Text Here</span>
            </span> -->
                    </h1>
                    <p class="text-white">
                        We're a web agency focused on designing and building the best websites, branding, and marketing
                        campaigns for success driven organizations wanting the world to know what they do best.
                    </p>
                    <a href="https://calendly.com/bellwebagency/initial-discussion" class="btn" target="_blank"
                        >Start a Conversation</a
                    >
                    <!-- <svg-icon name="orange-curve"/> -->
                    <!-- <svg-icon name="ghost-curve"/> -->
                </div>
            </div>
        </div>
        <bg-curve color="white" />
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
    background: $hero-gradient, center / cover no-repeat url('../assets/img/bwa-header.jpg');

    // clip-path: $section-polygon;
    position: relative;
    // text-align: center;

    &__content {
        position: relative;
        margin: 13rem 0 15rem;

        &--text {
            padding-bottom: 3rem;
            // width: 85%;
            .heading-primary {
                font-size: clamp(5rem, 8vw, 9rem);

                line-height: 1;
                margin-bottom: 3rem;
                position: relative;
                z-index: 2;
            }
            p {
                width: 65%;
                color: $body-text-dark-bg;
                font-size: clamp(2rem, 2.5vw, 2.5rem);
                margin: 4rem 0;
                @include respond(phone) {
                    width: 80%;
                }
            }

            @include respond(tab-port) {
                width: 100%;
            }
        }
        @include respond(tab-port) {
            margin: 10rem 0 11rem;
        }
    }

    .bg-curve {
        margin-top: 5rem;
    }
    @include respond(tab-port) {
        background-position: 85%;
    }
}
</style>
