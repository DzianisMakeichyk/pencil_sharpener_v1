import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Portfolio from '@/pages/Portfolio'
import Partners from '@/pages/Partners'
import slot from '@/pages/Slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/slot',
      name: 'slot',
      component: slot
    }
  ]
})
