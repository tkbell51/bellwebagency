<template>
  <main>
    <Hero/>
    <section class="section__services">
      <div class="container">
        <h2 class="section-title text-center ">Digital Tools to get the <span class="orange">results</span> you're looking for!</h2>
        <div class="flex justify-center items-center">

        <ServiceCard :icon="'digital-marketing'" :title="'Digital Branding'"/>
        <ServiceCard :icon="'logo-icon'" :title="'Website Design & Development'"/>
        <ServiceCard :icon="'website-design'" :title="'Website Monitoring & Maintenance'"/>
        </div>
      </div>
    </section>
    <section class="section__get-started">
      <div class="primary-bg h-100"></div>
      <div class="container">
      <div class="get-started">
        <div class="get-started__content left white">

      <svg-icon class="get-started__dots " name="orange-dots"/>
      <h2 class="section-title ">Ready to get started?</h2>
      <p class="white mb-5">Customers make their first impressions by viewing your website. Your website has now become your digital storefront. BWA is determined to provide an online storefront that does multiple things for your business:</p>
      <ul class="get-started__list">
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Clearly explain your business</li>
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Can attract new customers via Google</li>
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Perfectly viewable on desktop and mobile devices</li>
        <li class="get-started__item"><span><svg-icon name="checkmark"/></span>Can take concerns right away</li>
      </ul>
        </div>
        <div class="get-started__content right">
      <svg-icon class="get-started__dots"  name="orange-dots"/>
          <div class="get-started__img-wrapper">
            <img src="~/assets/img/look-at-computer.png" alt="People looking at computer">
          </div>

        </div>
      </div>
        </div>   
    </section>
    <Testimonial/>
    <section class="section__portfolio">
      <h2 class="section-title text-center">Want to see the websites we've designed?</h2>
    </section>
    <ProjectCTA />
    
  </main>
</template>

<script>
  export default {
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
           &.right{
             .get-started__dots {
               right: 7rem;
                top: 15rem;
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
          width: 514px;
          height: 346px;
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
