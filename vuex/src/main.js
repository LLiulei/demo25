import Vue from 'vue'
// import Vuex from 'vuex'
// import App from '../src/components/App.vue'
import store from './store'
import App from './components/App.vue'
// Vue.use(Vuex)
// const store = new Vuex.Store({ // store对象
//     state: {
//       show: false
//     }
// });

new Vue({
  el: '#app',
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
