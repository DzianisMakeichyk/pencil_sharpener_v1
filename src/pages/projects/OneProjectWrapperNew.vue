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
import find from 'lodash/find'
import TweenMax from 'gsap'
let firstEnter = false

export default {
  name: 'OneProjectNew',
  metaInfo: {
    title: 'Portfolio | Dzianis Makeichyk'
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    currentProject: function () {
      return find(this.dates, (project) => (
        project.slug === this.$route.params.slug
      ))
    }
  },
  methods: {
    isProject () { this.$store.commit('isProjectLoad') },
    enter: function enter (el, done) {
      let subHeader = el.getElementsByClassName('sub-header')
      if (!firstEnter) {
        // sub-header
        TweenMax.fromTo(subHeader, 0.65, { y: 100 }, {y: 0, onComplete: done}, 0.7)
        firstEnter = true
      } else {
        //
      }
    },
    leave: function leave (el, done) {
      let subHeader = el.getElementsByClassName('sub-header')
      // sub-header
      TweenMax.fromTo(subHeader, 0.65, { y: 0 }, { y: 100, onComplete: done })
    },
    afterEnter: function leave (el, done) {
      let subHeader = el.getElementsByClassName('sub-header')
      // sub-header
      TweenMax.fromTo(subHeader, 0.65, { y: 100 }, {y: 0, onComplete: done}, 0.7)
    }
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
</style>
