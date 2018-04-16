import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    isOpenMenu: false
  },
  mutations: {
    MenuToggle: (state) => {
      state.isOpenMenu = !state.isOpenMenu
    }
  }
})
