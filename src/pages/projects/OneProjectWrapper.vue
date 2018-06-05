<template>
    <div>
        <transition
        v-on:enter="enter"
        v-on:leave="leave"
        v-on:after-enter="afterEnter"
        v-bind:css="false"
        mode="out-in"
        appear
        >
            <router-view v-bind:key="$route.params.slug"/>
        </transition>
    </div>
</template>

<script>
import TweenMax from 'gsap'
let firstEnter = false

export default {
  name: 'OneProject',
  metaInfo: {
    title: 'Portfolio | Dzianis Makeichyk'
  },
  data () {
    return {
      loading: false
    }
  },
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
    },
    leave: function leave (el, done) {
      // Sub Header
      let subHeaderBox = el.getElementsByClassName('sub-header-box')
      let subHeaderWrapper = el.getElementsByClassName('sub-header-wrapper')
      let photoContainer = el.getElementsByClassName('photo-container')
      let boxReveal = el.getElementsByClassName('box-reveal')
      // About Page
      TweenMax.fromTo(photoContainer, 0.65, { x: '0%', y: 1 }, {delay: 0.5, x: '110%', onComplete: done})
      TweenMax.fromTo(subHeaderBox, 0.65, { x: '0%', y: 0 }, {delay: 0.8, x: '-110%', className: '+=box-shadow'})
      TweenMax.fromTo(boxReveal, 0.55, { scaleX: 0 }, {scaleX: 1}, 0.2)
      TweenMax.to(subHeaderWrapper, 0.65, {delay: 0.05, className: '-=box-shadow'})
    }
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
</style>
