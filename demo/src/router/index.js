import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers'
import Phone from '@/containers/phone'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    }
  ]
})
