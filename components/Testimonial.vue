<template>
    <section class="section__testimonials">
        <div class="container">
            <h2 class="section-title text-center mb-5">What Our Customers Are Saying</h2>

            <div class="testimonials-grid grid grid-cols-2 gap-8">

            <div
                    v-for="(item, index) in testimonials"
                    :key="index"
                    :title="item.name"
                    class="testimonials"
                    >
                    <div class="testimonials-content__header gap-4 mb-3">

                        <div class="testimonials-content__img">
                            <img  :src="require(`~/assets/img/testimonials/${item.imgSrc}`)" :alt="`${item.imgAlt}`">
                        </div>
                        <div>

                         <p class="testimonials-content__text--name font-bold">{{item.name}}</p>
                            <p class="testimonials-content__text--company mb-3">{{item.company}}</p>
                            <p class="subtitle font-bold mb-3">"{{item.headline}}"</p>

                        </div>
                    </div>
                        <div class="testimonials-content__text">
                        <svg-icon class="quotemark" name="quotemark"/>

                           
                            <div>
                           
                            </div>
                            
                            <p class="testimontals-content__text--full mb-5">{{item.text}}</p>
                        </div>
                        
                </div>
            </div>

           
        </div>
    </section>
</template>

<script>
    export default {
  
       data() {
           return {
             
               testimonials: [
                   {
                       id:0,
                       name:'Kervin K. Searles',
                       imgSrc:'kervin-searles.png',
                       imgAlt: 'Gravity Counseling Group',
                       headline: 'A website that is a reflection of our current identity and vision.',
                       text: 'Tim’s website design not only met my approval but exceeded my expectations. He is knowledgeable, creative, and personable. He is patient, understanding, and willing to provide revisions as needed, with a quick turnaround. The end result is a website that is a reflection of our current identity and vision. I am certain we will continue our partnership as we grow.',
                        company: 'Gravity Counseling Group'
                   },
                  
                   {
                       id:1,
                       name:'Liv Green',
                       imgSrc:'livish-profile.jpeg',
                       imgAlt: 'Livish Woodworks & Decor',
                       headline: 'He continued to follow up with me even after the project was complete to ensure my satisfaction.',
                       text: 'I was very pleased with my experience with Timothy from beginning to end. He asked probing questions that helped me to decide on the best flow and functionality for the website. He also actively listened to my requests and offered alternative solutions to work within my budget. Lastly, he continued to follow up with me even after the project was complete to ensure my satisfaction. Overall a great experience!',
                        company: 'Livish Woodworks & Decor'
                   }
               ]
           }
       }, 
        
    }
</script>

<style lang="scss" scoped>
.testimonials {
    @apply rounded; 
    position: relative;
    overflow: hidden;
    padding: 2rem;
    box-shadow: $box-shadow;
    .quotemark {
        position: absolute;
        right: 7rem;
        top: 5rem;
        z-index: -1;
        opacity: 0.1;
        width: 4rem;
        height: 4rem;
        display: inline-block;
        transform: scale(11);
        }
    
    &-content {
    //    width: 30rem;
    &__header {
        display: grid;
        grid-template-columns: 10rem 1fr;
    }
        &__img{
            // @apply px-4;
            width: 10rem;
            position: relative;
       
            img{
                @apply rounded-full max-w-full h-auto align-middle border-none;
                
            }
           
        }
        &__text {
        //    padding-right: 20%;
        }
    }
}
</style>