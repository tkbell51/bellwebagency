<template>
  <main>
    <Hero/>
    <section class="section__services">
      <div class="container">
        <h2 class="section-title text-center ">Digital Tools to get the <span class="orange">results</span> you're looking for!</h2>
        <div class="grid grid-flow-col md:grid-cols-2 lg:grid-cols-4 gap-4">

        <ServiceCard :icon="'digital-marketing'" :title="'Branding &amp; Logo Design'">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consectetur sunt labore blanditiis omnis, nemo quo, sapiente, voluptate a delectus soluta cum iusto enim distinctio ipsum! Vero, inventore sint! In.</p>
        </ServiceCard>
        <ServiceCard :icon="'logo-icon'" :title="'Website Design &amp; Development'">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consectetur sunt labore blanditiis omnis, nemo quo, sapiente, voluptate a delectus soluta cum iusto enim distinctio ipsum! Vero, inventore sint! In.</p>
        </ServiceCard>
        <ServiceCard :icon="'website-design'" :title="'Website Monitoring &amp; Maintenance'">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consectetur sunt labore blanditiis omnis, nemo quo, sapiente, voluptate a delectus soluta cum iusto enim distinctio ipsum! Vero, inventore sint! In.</p>
        </ServiceCard>
        <ServiceCard :icon="'website-design'" :title="'Review Reputation Management'">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consectetur sunt labore blanditiis omnis, nemo quo, sapiente, voluptate a delectus soluta cum iusto enim distinctio ipsum! Vero, inventore sint! In.</p>
        </ServiceCard>
        </div>
      </div>
    </section>

    <section class="section__get-started">
      <div class="primary-bg h-100"></div>
      <div class="container">
      <div class="get-started">
        <div class="get-started__content left white">

      <svg-icon class="get-started__dots " name="orange-dots"/>
      <h2 class="section-title ">Ready to get <span class="orange">started?</span></h2>
      <p class="white mb-5">Customers make their first impressions by viewing your website. Your website has now become your digital storefront. BWA is determined to provide an online storefront that does multiple things for your business:</p>
      <ul class="get-started__list">
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Clearly explains your business</li>
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Attract new customers via Google</li>
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Perfectly viewable on desktop and mobile devices</li>
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Take concerns away from current and potential clients</li>
      </ul>
        </div>
        <div class="get-started__content right">
          <div class="get-started__img-wrapper">
            <img src="~/assets/img/home-get-started.jpg" alt="People looking at computer">
          </div>

        </div>
      </div>
        </div>   
    </section>
    <Testimonial/>
    <section class="section__portfolio">
      <div class="container">

      <h2 class="section-title text-center">Want to see the websites we've designed?</h2>
      <div class="grid grid-cols-2 gap-4">

              <PortfolioCard v-for="item in portfolio" 
                :key="item.title" 
                :slug="item.slug" 
                :title='item.title' 
                :categories='item.categories'
                :image='item.cardImage'/>
                
      </div>
      </div>

    </section>
    <ProjectCTA />
    
  </main>
</template>

<script>
  export default {

        async asyncData({$content}) {
            const portfolio = await $content('portfolio').fetch()
            return {
                portfolio
            }
        },
    head() {
    return {
      title: 'Home',
    }
  },
  }
</script>

<style lang="scss" scoped>
  .section {
    &__services {
      .section-title {
        width: 40%;
        margin: 4rem auto;
      }
    }
    &__get-started {
      position: relative;
      z-index: 5;
      margin-bottom: -20rem;

      .primary-bg {
        background-color: $primary-color;
        width: 60%;
        position: absolute;
        height: 100%;
        z-index: -1;
      }
      .get-started{
         @apply flex justify-between items-center;
          padding: 5rem 0;

         &__content {
           position: relative;
           flex: 50%;
           &.left{
            
             p {
               width: 70%;
             }
              .get-started__dots {
                left: -8rem;
                z-index: -1;
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
