<template>
    <main class="contact-page">
        <PageHeader :firstTitle="'Lets Get Started'" />
        <section class="section__contact">
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-24">
                    <ContactForm class="col-span-2" />
                    <div class="contact-card">
                        <span><Fas i="envelope" /></span>
                        <h3 class="heading-tertiary">Get In Touch</h3>
                        <div class="contact-card__info">
                            <span><Fas i="info" /></span>
                            <p>We will respond withing 1 - 2 business days. Monday - Friday EST.</p>
                        </div>
                        <div class="contact-card__info">
                            <span><Fas i="info" /></span>
                            <p>Please include as much detail as possible regarding your project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    head() {
        return {
            title: 'Contact',
        }
    },
    mounted: function () {
        document.querySelector('.page-header .bg-curve path').style.fill = '#dbdbdb'
    },
}
</script>

<style lang="scss">
.contact-page {
    background: $grey;

    & + .footer {
        & .top-curve path {
            fill: $grey !important;
        }
    }
}
.section__contact {
    margin-top: -12rem;
    margin-bottom: -0.2rem;
    padding: 10rem 0 5rem;
    .contact-card {
        @apply rounded-xl;
        align-self: flex-start;
        padding: 3rem;
        background: white;
        border-bottom: 1rem solid $primary-color;
        .heading-tertiary {
            text-align: center;
            margin: 1rem auto;
        }
        & span {
            @apply rounded-full flex items-center justify-center;
            background: $secondary-color;
            margin-right: 1rem;
            padding: 2rem;
            width: 8rem;
            // margin: 0 auto;
            .icon {
                color: $white;
            }
        }
        & > span {
            margin: 0 auto;
            margin-bottom: 2rem;
            margin-right: auto;
            .icon {
                height: 4rem;
                width: 4rem;
            }
        }

        &__info {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            & span {
                padding: 1rem;
                width: 4rem;
                .icon {
                    height: 2rem;
                    width: 2rem;
                }
            }
        }
    }
    .top-curve {
        top: -8rem;
        bottom: auto;
        @include respond(tab-mid) {
            top: -10rem;
        }
        @include respond(tab-port) {
            top: -8rem;
        }
    }
}
</style>
