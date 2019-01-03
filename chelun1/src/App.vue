<template>
  <!-- <button @click="login">点击登陆</button> -->
  <router-view></router-view>
</template>

<script>
import JSBridge from './utils/JSBridge.js';
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    login(){
      JSBridge.invoke('app', 'login', {
        loginCallBackName: (res)=>{
          console.log('res...', res);
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import './scss/common.scss';
*{
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
