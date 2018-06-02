<template>
  <div id="app" :class="`locale-${this.$route.params.locale}`">
    <localizer>
      <Header/>
      <Transitions></Transitions>
    </localizer>
  </div>
</template>

<script>
import Header from './components/Header'
import Transitions from './components/Transitions'
import Localizer from './components/Locale/Localizer'
// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Transitions,
    Localizer,
    Header
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
