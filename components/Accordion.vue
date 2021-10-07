<template>
    <div class="accordion" :class="{show: show}">
    <div class="header" @click="toggle">
      <h3 name="header" class="font-bold mb-0">{{title}}</h3>
      <Fas class="header-icon orange" i="caret-down"  :class="{ rotate: show}"/>
    </div>
    <transition name="accordion"
      @before-enter="beforeEnter" @enter="enter"
      @before-leave="beforeLeave" @leave="leave">
      <div class="body" v-show="show">
        <div class="body-inner">
          <p>{{description}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        props: ['title','description'],
        data() {
            return {
                show: false
            }
        },
        methods: {
    toggle: function() {
      this.show = !this.show;
    },
    // enter: function(el, done) {
    //   $(el).slideDown(150, done);
    // },
    // leave: function(el, done) {
    //   $(el).slideUp(150, done);
    // },
    beforeEnter: function(el) {
      el.style.height = '0';
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  }
    }
</script>

<style lang="scss" scoped>
.accordion {
    margin-bottom: 1rem;
    .header-icon{
    // transform: rotate(270deg);
    &.rotate {
        transform: rotate(180deg);
        transition-duration: 0.3s;
        }
    }
    &.show .header p{
        color: $secondary-color;
    }
    .header {
        @apply flex justify-between items-center py-4 cursor-pointer ;
        border-bottom: 2px solid $secondary-color-light;

    }
    .body {
        @apply pr-6 py-4;
        transition: 150ms ease-out;
    }
}
    
</style>