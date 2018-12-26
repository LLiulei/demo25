import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '@/containers'
import Phone from '@/containers/phone'
import Home from '@/containers/home'
import Find from '@/containers/find'
import TabOne from '@/containers/tabOne'
import TabTwo from '@/containers/tabTwo'
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
        component: Find,
        children:[{
          path: '',
          redirect: '/find/tabOne'
        },{
          path: '/find/tabOne',
          name: 'TabOne',
          component: TabOne
        },{
          path: '/find/tabTwo',
          name: 'TabTwo',
          component: TabTwo
        }]
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
