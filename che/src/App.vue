<template>
  <div id="app">
    <div id="header" ref="header">
      <div id="tab">
        <h5>车轮</h5>
        <ul>
          <li>产品</li>
          <li>关于我们</li>
          <li>大数据</li>
          <li>新闻</li>
          <li>招聘</li>
          <li>商城</li>
        </ul>
        <span id="login">登录/注册</span>
        <span id="more">≡</span>
      </div>
    </div>
    <div id="head">
        <img src="http://pic.sc.chinaz.com/files/pic/pic9/201811/bpic9257.jpg" id="tabImg">
    </div>
    <div id="content">
        <ul class="tablist">
          <li v-for="(item,index) in list" :key="index" @click="getTab(item.id)">{{item.name}}</li>
        </ul>
        <Comment :class="ind === 1 ? 'show' : 'hide'"/>
        <Trend  :class="ind === 2 ? 'show' : 'hide'"/>
        <Report  :class="ind === 3 ? 'show' : 'hide'"/>
    </div>
  </div>
</template>

<script>
  import Comment from "./components/comment";
  import Trend from "./components/trend";
  import Report from "./components/report";
  export default {
    name: 'app',
    data () {
      return {
        curHeight: 0,
        ind: 1,
        list: [{
          id: 1,
          name: "分析评论"
        },{
          id: 2,
          name: "趋势榜单"
        },{
          id: 3,
          name: "研究报告"
        }]
      }
    },
    beforeMount(height) {
        // let height = document.getElementById("header");
        //let h = document.documentElement.clientHeight || document.body.clientHeight;
        // this.curHeight = h - height; //减去页面上固定高度height
        // let height= this.$refs.header;  //100
        let header = document.getElementById("header");
        console.log(this)
        console.log(document.getElementById("header"))
    },
    created() {
      this.getTab
    },
    mounted() {

    },
    components: {
      Comment,
      Trend,
      Report
    },
    methods: {
      getTab(i) {
        this.ind = i;
      }
    }
  }
</script>

<style lang="scss">
  @import "./common/style.scss";
  // 手机版
  @media screen and (max-width: 1000px) {
    #header {
      width: 100%;
      height: 0.9rem;
      #tab {
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        border-bottom: solid 1px rgba(50,50,50,.2);
        display: flex;
        h5 {
          flex: 1;
          font-size: 0.4rem;
          padding-left: 0.5rem;
        }
        ul {
          display: none;
        }
        #login {
          display: none;
        }
        #more {
          width: 10%;
          text-align: center;
          margin-right: 0.5rem;
          color: blue;
          font-size: 0.8rem;
        }
      }
    }
    #head { 
      width: 100%;
      height: 900px;
      #tabImg {
        width: 100%;
        height: 100%;
      }
    }
    #content {  
      width: 100%;
      height: 100%;
    }
    #footer {  }
  }
  // 电脑版
  @media screen and (min-width: 1000px) {
    #header {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 100;
      height: 1rem;
      line-height: 1rem;
      border-bottom: solid 1px #d6d6d6;
      -webkit-transition: padding .3s,background-color .3s,box-shadow .3s,border-bottom .3s;
      -moz-transition: padding .3s,background-color .3s,box-shadow .3s,border-bottom .3s;
      transition: padding .3s,background-color .3s,box-shadow .3s,border-bottom .3s;
      #tab {
        width: 100%;
        border-bottom: solid 1px rgba(50,50,50,.2);
        display: flex;
        h5{
          flex: 1;
          font-size: 0.5rem;
          text-align: center;
        }
        ul{
          flex: 4;
          font-size: 0.2rem;
          padding-left: 1rem;
          box-sizing: border-box;
          li{
            padding: 0 0.08rem;
            float: left;
          }
        }
        #login{
          flex: 1;
          font-size: 0.1rem;
          text-align: center;
        }
        #more{
          display: none;
        }
      }
    }
    #head { 
      position: relative;
      margin: 0 auto;
      height: 700px;
      width: 100%;
      max-width: 1920px;
      #tabImg {
        position: absolute;
        left: 50%;
        top: 0;
        z-index: 10;
        margin-left: -960px;
        width: 1920px;
        height: 100%;
      }
    }
    #content {  
      width: 100%;
      height: 100%;
      .tablist {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.2rem;
        border-bottom: 0.01rem solid #ccc;
        color: #ccc;
        display: flex;
        li{
          width: 20%;
          text-align: center;
          .active{
            color: #000;
            border-bottom: 0.03rem solid blue;
          }
        }
      }
      .hide {
        display: none;
      }
      .show {
        display: block;
      }
    }
    #footer {  }
  }
  @media screen and (min-height: 731px) and (max-height: 800px){
    #header {
      height: 0.8rem;
      line-height: 0.8rem;
      z-index: 122;
      background-color: #fff;
      border-bottom: solid 1px #d6d6d6;
      box-shadow: 0 2px 6px rgba(0,0,0,.1);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }
</style>
