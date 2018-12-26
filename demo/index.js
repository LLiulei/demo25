import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/month/index.vue'

import Community from '../components/month/first/community'
import Match from '../components/month/first/match.vue'
import Home from '../components/month/first/home.vue'
import Literacy from '../components/month/first/literacy.vue'
import More from '../components/month/first/more.vue'


import Plate from '../components/month/second/plate.vue'
import Movie from '../components/month/second/movie.vue'
import Recom from '../components/month/second/recom.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: Index,
        children: [{
            path: '',
            redirect: '/community'
        }, {
            path: '/community',
            component: Community,
            children: [{
                path: '',
                redirect: '/plate'
            }, {
                path: '/plate',
                name: 'plate',
                component: Plate
            }, {
                path: '/recom',
                name: 'recom',
                component: Recom
            }, {
                path: '/movie',
                name: 'movie',
                component: Movie
            }]
        }, {
            path: '/match',
            component: Match
        }, {
            path: '/home',
            component: Home
        }, {
            path: '/literacy',
            component: Literacy
        }, {
            path: '/more',
            component: More
        }]
    }]
})