// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
import VueI18n from 'vue-i18n'

// import Pl from './assets/messages/pl.json'
// import En from './assets/messages/en.json'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Meta)
Vue.use(VueI18n)

// const messages = {
//   en: {
//     message: En
//   },
//   pl: {
//     message: Pl
//   }
// }

// Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'pl', // set locale
//   messages // set locale messages
// })
/* eslint-disable no-new */
new Vue({
  // i18n,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
