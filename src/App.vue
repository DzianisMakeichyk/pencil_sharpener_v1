<template>
  <div id="app">
    <Header />
    <router-view>

    </router-view>
  </div>
</template>

<script>
import Header from './components/Header'
// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
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
  },
  components: {
    Header
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
