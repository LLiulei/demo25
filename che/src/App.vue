<template>
  <div id="app">
    <div id="header" ref="header" :class="state ? 'actH' : ''">
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
        <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" id="tabImg">
    </div>
    <div id="content">
        <ul class="tablist">
          <li v-for="(item,index) in list" :key="index" @click="getTab(item.id)" :class="ind === item.id ? 'active' : ''">{{item.name}}</li>
        </ul>
        <Comment :class="ind === 1 ? 'show' : 'hide'"/>
        <Trend  :class="ind === 2 ? 'show' : 'hide'"/>
        <Report  :class="ind === 3 ? 'show' : 'hide'"/>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  import Vue from "vue";
  import Comment from "./components/comment";
  import Trend from "./components/trend";
  import Report from "./components/report";
  export default {
    name: 'app',
    data () {
      return {
        ind: 1,
        state: false,
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
    beforeMount() {
      
    },
    created() {
      this.getTab
      this.scroll()
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
      },
      scroll() {
        // 获取到节点
        // let header = document.getElementById("header");
        // 滚动的距离
        window.onscroll = (e) => {
          let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          // 判断滚动的距离 改变状态
          if(scrollTop >= 200) {
            this.state = true;
          }else{
            this.state = false;
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  // 全局样式
  @import "./common/style.scss";
  // 手机版样式
  @import "./common/phone.scss";
  // 电脑版样式
  @import "./common/computer.scss";
</style>
