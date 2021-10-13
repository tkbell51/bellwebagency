<template>
  <div class="service-card rounded" >
    <div>
    <svg-icon :name="icon" :class="`service-card__icon ${icon}`" />
    
    <h4>{{ title }}</h4>
    <slot></slot>
    </div>
    <NuxtLink class="service-card__link mt-4" :to="`/services/${link}`"><span>Learn More</span><Fas i="arrow-right"  /></NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["icon", "title","link"],
  
};
</script>

<style lang="scss">
.service-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  transition: $transition;
  box-shadow: $box-shadow;
  border: 0.1px solid rgba($primary-color, 0.1);

  
  &__icon {
    height: 70px;
    width: 70px;
    margin-bottom: 1rem;
    &.reviewlead {
  width: 270px;
}
  }
  &__link {
    .icon {
      color: $font-color;
    margin-left: 1rem;
    transition: $transition;
  }
  &:hover span, &:hover .icon{
    color: $secondary-color !important;
  }
  &:hover .icon {
    transform: translateX(5px);
  }
  }
  h4 {
    @apply font-bold my-3;
    font-family: "Montserrat Bold";
    font-size: 1.7rem;
  }
   @media only screen and(min-width: 56.25em) {
      
  &:hover {
    background: linear-gradient(45deg, lighten($primary-color,10%),$primary-color,);
    transform: translateY(-10%);
    h4,
    p, a, .icon {
      color: $white;
    }
    
 
}
    }
  }
</style>
