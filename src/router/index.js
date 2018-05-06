import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Portfolio from '@/pages/Portfolio'
import Partners from '@/pages/Partners'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import OneProject from '@/pages/projects/OneProject'

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
      path: '/portfolio/:slug',
      name: 'OneProject',
      component: OneProject
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
