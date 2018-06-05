// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Meta)
Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
