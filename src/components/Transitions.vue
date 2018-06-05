<template>
  <transition
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
  >
  <!--<transition-->
    <!--v-on:enter="leave"-->
    <!--v-on:leave="enter"-->
    <!--v-on:after-enter="afterEnter"-->
  <!--&gt;-->
    <router-view/>
  </transition>

</template>

<script>
import TweenMax from 'gsap'
let firstEnter = false

export default {
  name: 'transitionTM',
  methods: {
    enter: function enter (el, done) {
      let mainAnia = el.getElementsByClassName('animation')
      // Sub Header
      let subHeaderBox = el.getElementsByClassName('sub-header-box')
      let subHeaderWrapper = el.getElementsByClassName('sub-header-wrapper')
      // Photo Container
      // About Page
      let photoContainer = el.getElementsByClassName('photo-container')
      // Partner Box
      let boxReveal = el.getElementsByClassName('box-reveal')
      let subHeader = el.getElementsByClassName('sub-header')
      if (firstEnter) {
        TweenMax.fromTo(mainAnia, 0.5, { opacity: 1, y: 0 }, {opacity: 0, y: -50, onComplete: done})
        firstEnter = false
      } else {
        TweenMax.to(mainAnia, 0.04, { onComplete: done })
        // About Page
        TweenMax.fromTo(photoContainer, 0.65, { x: '110%', y: 0 }, {delay: 0.5, x: '0%'})
        TweenMax.fromTo(subHeaderBox, 0.65, { x: '-110%', y: 0 }, {delay: 0.8, x: '0%', className: '+=box-shadow'})
        TweenMax.to(subHeaderWrapper, 0.65, {delay: 1.5, className: '+=box-shadow', onComplete: done})
        // Partner Box
        TweenMax.staggerTo(boxReveal, 0.65, {delay: 0.55, scaleX: 0}, 0.2)
        TweenMax.fromTo(subHeader, 0.65, { x: '-110%', y: 0 }, {delay: 0.8, x: '0%'})
        // One Project
      }
    },
    afterEnter: function leave (el, done) {
      let mainAnia = el.getElementsByClassName('animation')
      TweenMax.fromTo(mainAnia, 0.65, { opacity: 0, y: -50 }, {opacity: 1, y: 0, onComplete: done})
    }
  }
}
</script>

<style lang="scss">
  .container-reveal {
    width: 100%;
    max-width: 1000px;
    position: relative;
    margin: auto 0;
  }
</style>
