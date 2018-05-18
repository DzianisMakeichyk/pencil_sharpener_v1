<template>
  <div id="app">
    <localizer>
      <Header />
      <Transitions></Transitions>
    </localizer>
  </div>
</template>

<script>
import Header from './components/Header'
import Transitions from './components/Transitions'
import localizer from './components/Localizer'
// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Header,
    Transitions,
    localizer
  },
  methods: {
    handleWindowResize (event) {
      this.$store.state.windowWidth = event.currentTarget.innerWidth
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted: function () {
    window.addEventListener('resize', this.handleWindowResize)
  }
}
</script>

<!--scoped-->
<style lang="scss">
  @import 'assets/scss/functions';
  @import 'assets/scss/helpers';
  @import 'assets/scss/typography';

  // No Hover
  .disable-hover,
  .disable-hover * {
    pointer-events: none !important;
  }

</style>
