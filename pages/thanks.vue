<template>
    <main class="thanks-page">
        <PageHeader first-title="Thank You" />
        <section class="section__thank-you">
            <div class="container">
                <div class="flex justify-center items-center">
                    <div class="contact-card w-1/2 my-12">
                        <span><Fas i="check" /></span>
                        <h3 class="heading-tertiary">Thank you for your submission</h3>
                        <div class="contact-card__info">
                            <span><Fas i="info" /></span>
                            <p>We will respond withing 1 - 2 business days. Monday - Friday EST.</p>
                        </div>
                        <p>If your're ready to get started on a project, let's schedule a conversation</p>
                        <a
                            class="btn btn-primary w-full"
                            href="https://calendly.com/bellwebagency/initial-discussion"
                            target="_blank"
                            >Schedule Conversation</a
                        >
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    mounted() {
        document.querySelector('.page-header .bg-curve path').style.fill = '#dbdbdb'
    },
}
</script>

<style lang="scss">
.thanks-page {
    background: $grey;

    & + .footer .top-curve path {
        fill: $grey !important;
    }
}
.section__thank-you {
    background: $grey;
    margin: 0;
    padding: 0;
    .contact-card {
        @apply rounded-xl;
        align-self: flex-start;
        padding: 3rem;
        background: white;
        border-bottom: 1rem solid $secondary-color;
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
}
</style>
