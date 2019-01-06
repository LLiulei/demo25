<template>
  <div id="app">
    <div id="head">
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
        <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" id="tabImg">
    </div>
    <div id="content">
        <ul class="tablist">
          <li v-for="(item,index) in list" :key="index" @click="getTab(item.id)">{{item.name}}</li>
        </ul>
        <Comment :class="{ind == 1 ? 'show' : 'hide'}"/>
        <Trend  :class="{ind == 2 ? 'show' : 'hide'}"/>
        <Report  :class="{ind == 3 ? 'show' : 'hide'}"/>
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
    created() {

    },
    component: {
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
    #head { 
      width: 100%;
      height: 900px;
      #tab{
        width: 100%;
        height: 1.1rem;
        line-height: 1.1rem;
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
      #tabImg {
        width: 100%;
        height: 100%;
      }
    }
    #content {  }
    #footer {  }
  }
  // 电脑版
  @media screen and (min-width: 1000px) {
    #head { 
      width: 100%;
      height: 700px;
      position: relative;
      #tab{
        z-index: 555;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
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
      #tabImg {
        z-index: 12;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
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
</style>
