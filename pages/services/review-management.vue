<template>
    <main>
        <PageHeader title="Review Lead Reputation Management" />

        <ServiceContent
            class="reviewLead"
            :title="'Review Reputation Management'"
            :listHeader="'Review Reputation Management'"
            :direction="'ltr'"
            :services="[
                'Boost your average star rating',
                'Promote positive reviews',
                'Trap bad reviews before they hit review sites',
                'Take Control of your online reputation',
                'Review monitoring and alerting',
                'Remind happy customers to leave reviews',
            ]"
            :subtitle="'Turn positive reviews into more business'"
            :description="'Have a strategy to get more 5 star revies from your real customers on sites like Google, Facebook, and Yelp!'"
            isHref
            link="https://www.honeybook.com/widget/bell_web_agency_191036/cf_id/6102d705963bdd07eaf2f19f"
            :linkCTA="'Manage the Feedback'"
            image="5-star-bubble.jpg"
            imageAlt="message bubbles with 5 stars"
        />
        <section class="section__stats">
            <div class="container">
                <div
                    class="
                        grid grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-4
                        gap-12
                        py-8
                    "
                >
                    <review-stat
                        number="95"
                        stat="Search for local businesses online"
                    ></review-stat>
                    <review-stat
                        number="91"
                        stat="Read online reviews about local business"
                    ></review-stat>
                    <review-stat
                        number="84"
                        stat="people trust online reviews as much as a personal recommendation"
                    ></review-stat>
                    <review-stat
                        number="73"
                        stat="of consumers think that reviews older than 3 months aren’t relevant"
                    ></review-stat>
                </div>
                <small
                    >Source:
                    https://www.brightlocal.com/learn/local-consumer-review-survey/</small
                >
            </div>
        </section>

        <section class="section__review-testimonials"></section>
    </main>
</template>

<script>
import ReviewStat from '~/components/ReviewStat.vue'
export default {
    components: { ReviewStat },
    data() {
        return {
            brandInclude: [
                {
                    title: 'Website Design',
                    description:
                        'This includes the custom design of any website pages or features from basic pages to portfolio galleries, blogs, landing pages, testimonials, product pages, questionnaires, video or motion graphic needs, and beyond.',
                },
                {
                    title: 'Website Development',
                    description:
                        'This includes the complete build-out of your website from basic pages to custom forms, questionnaires, eCommerce capabilities, shop integrations, responsive development, custom site functionality, language translations, and any critical development assets including SSL Certificate set up.',
                },
                {
                    title: 'Fundamental SEO',
                    description:
                        'This includes keyword and market content research, content structure and keyword implementation, image optimization, all metadata and alt text, installment of Google Analytics and Search Console, as well as the submission of your website to Google post-launch.',
                },
                {
                    title: 'Copywriting',
                    description:
                        'We take care of all the content needs for your project through custom content questionnaires to help strategize and organize website page content and marketing funnels to professional copywriters that curate original engaging website copy infused with the SEO keywords and hierarchy.',
                },
                {
                    title: 'Responsive Mobile Site Design',
                    description:
                        'All websites are completely responsive across all devices, ensuring that your clients’ online experience is consistent no matter how they view your site.',
                },
                {
                    title: 'Custom Forms',
                    description:
                        'Custom on-site forms or questionnaires for your services or client intake process, as well as the customization of intake forms or questionnaires embedded via external programs.',
                },
                {
                    title: 'External Program Integrations',
                    description:
                        'We will connect and integrate any external email subscription programs, Client Management Systems, or social media feeds that you use for your business in order to streamline your onboarding/subscription process.',
                },
            ],
        }
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
        // background: $primary-color;
    }
}
</style>
