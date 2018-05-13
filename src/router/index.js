import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Portfolio from '@/pages/Portfolio'
import Partners from '@/pages/Partners'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import OneProject from '@/pages/projects/OneProject'
import OneProjectWrapper from '@/pages/projects/OneProjectWrapper'
import OneProjectWrapperNew from '@/pages/projects/OneProjectWrapperNew'

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
      component: OneProjectWrapper,
      children: [
        {
          component: OneProject,
          name: 'OneProject',
          path: ''
        }
      ]
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
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/test',
      name: 'test',
      component: OneProjectWrapperNew
    }
  ]
})
