import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '@/containers'
import Phone from '@/containers/phone'
import Home from '@/containers/home'
import Find from '@/containers/find'
import Video from '@/containers/video'
import My from '@/containers/my'
import Friend from '@/containers/friend'
import Account from '@/containers/account'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children:[{
        path: '',
        redirect: '/find'
      },{
        path: '/find',
        name: 'Find',
        component: Find
      },{
        path: '/video',
        name: 'Video',
        component: Video
      },{
        path: '/my',
        name: 'My',
        component: My
      },{
        path: '/friend',
        name: 'Friend',
        component: Friend
      },{
        path: '/account',
        name: 'Account',
        component: Account
      }]
    },
    {
      path: '/index',
      name: 'Index',
      component: Indexs
    },
    {
      path: '/index/phone',
      name: 'phone',
      component: Phone
    }
  ]
})
