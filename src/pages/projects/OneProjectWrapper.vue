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
let firstEnter = true

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
    isProject () { this.$store.commit('isProjectLoad') },
    enter: function enter (el, done) {
      let revealMe = el.getElementsByClassName('reveal-me')
      let subHeader = el.getElementsByClassName('sub-header')
      if (firstEnter) {
        // reveal-me
        TweenMax.fromTo(revealMe, 0.65, { scaleX: 0 }, {scaleX: 1, onComplete: done})
        // sub-header
        TweenMax.fromTo(subHeader, 0.65, { y: 100 }, {y: 0, onComplete: done}, 0.7)
        firstEnter = false
      } else {
        // reveal-me
        TweenMax.to(revealMe, 0.04, { onComplete: done })
      }
    },
    leave: function leave (el, done) {
      let revealMe = el.getElementsByClassName('reveal-me')
      let subHeader = el.getElementsByClassName('sub-header')
      // reveal-me
      TweenMax.fromTo(revealMe, 0.65, { scaleX: 0 }, { scaleX: 1, onComplete: done })
      // sub-header
      TweenMax.fromTo(subHeader, 0.65, { y: 0 }, { y: 100, onComplete: done })
    },
    afterEnter: function leave (el, done) {
      let revealMe = el.getElementsByClassName('reveal-me')
      let subHeader = el.getElementsByClassName('sub-header')
      // reveal-me
      TweenMax.fromTo(revealMe, 0.65, { scaleX: 1 }, {scaleX: 0, onComplete: done})
      // sub-header
      TweenMax.fromTo(subHeader, 0.65, { y: 100 }, {y: 0, onComplete: done}, 0.7)
    }
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
</style>
