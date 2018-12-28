<template>
  <div id="app">
    <button @click="changeNum('-')">-</button>
    <span>{{this.$store.state.dialog.num}}</span>
    <button @click="changeNum('+')">+</button>
  </div>
</template>  

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    changeNum(type) {
      // this.$store.commit('changeNum', {payload: type});

      // 触发mutations
      // this.$store.commit({
      //   type: 'changeNum',
      //   payload: type
      // })

      // 触发actions
      this.$store.dispatch({
        type: 'changeNumAsync',
        payload: type
      }).then(res => {
        console.log("操作完成!")
      })
    }
  }
}
</script>

<style lang="scss">

</style>
