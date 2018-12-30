<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    html,
    body{
      width: 100%;
      height: 100%;
    }
    #app{
        width: 100%;
        height: 100%;
    }
    *{
      margin: 0;
      padding: 0;
    }
    .zero{
        width: 100%;
        height: 45px;
    }
</style>
