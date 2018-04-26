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

export default {
  name: 'transitionTM',
  methods: {
    enter: function enter (el, done) {
      //
    },
    leave: function leave (el, done) {
      //
    },
    afterEnter: function leave (el, done) {
      //
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
