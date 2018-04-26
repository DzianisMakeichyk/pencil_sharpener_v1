<template>
  <transition
    v-on:enter="enter"
    v-on:leave="leave"
    v-on:after-enter="afterEnter"
    v-bind:css="false"
    mode="out-in"

    appear
  >
    <router-view></router-view>
  </transition>

</template>

<script>
import TweenMax from 'gsap'
let firstEnter = false

export default {
  name: 'transitionTM',
  methods: {
    enter: function enter (el, done) {
      let firstBg = el.getElementsByClassName('reveal-me')
      if (!firstEnter) {
        TweenMax.fromTo(firstBg, 0.4, {
          scaleX: 0
        }, {
          scaleX: 1,
          onComplete: done
        })
        firstEnter = true
      } else {
        TweenMax.to(firstBg, 0.04, {
          onComplete: done
        })
      }
    },
    leave: function leave (el, done) {
      let firstBg = el.getElementsByClassName('reveal-me')
      TweenMax.fromTo(firstBg, 0.4, {
        scaleX: 0
      }, {
        scaleX: 1,
        onComplete: done
      })
    },
    afterEnter: function leave (el, done) {
      let firstBg = el.getElementsByClassName('reveal-me')
      TweenMax.fromTo(firstBg, 0.4, {
        scaleX: 1
      }, {
        scaleX: 0,
        onComplete: done
      })
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
