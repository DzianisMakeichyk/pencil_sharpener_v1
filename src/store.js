import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    isOpenMenu: false,
    isProjectLoad: true
  },
  mutations: {
    MenuToggle: (state) => {
      state.isOpenMenu = !state.isOpenMenu
    },
    isProjectLoad: (state) => {
      state.isProjectLoad = !state.isProjectLoad
      setTimeout(function () {
        state.isProjectLoad = !state.isProjectLoad
      }, 500)
    }
  }
})
