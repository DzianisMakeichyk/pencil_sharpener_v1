import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Portfolio from '@/pages/Portfolio'
import Transitions from '@/components/Transitions'
import Partners from '@/pages/Partners'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import OneProject from '@/pages/projects/OneProject'
import OneProjectWrapper from '@/pages/projects/OneProjectWrapper'
// import OneProjectWrapperNew from '@/pages/projects/OneProjectWrapperNew'
import { defaultLocale } from '../config/i18n'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/${defaultLocale}`
    },
    {
      path: '/:locale',
      component: Transitions,
      children: [
        {
          path: '',
          component: Index
        },
        {
          path: 'portfolio',
          component: Portfolio
        },
        {
          path: 'portfolio/:slug',
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
          path: 'partners',
          component: Partners
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'contact',
          component: Contact
        },
        {
          path: '*',
          name: 'NotFound',
          component: NotFound
        }
      ]
    }
  ]
})
