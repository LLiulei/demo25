<template>
  <div class="box">
    <!-- 头部 -->
    <header>
      <span>&lt;</span>
      <span>补换驾照</span>
      <span>···</span>
    </header>
    <!-- 状态显示 -->
    <nav>
      <span class="active">订单提交</span>
      <span>填写收货地址</span>
      <span>正在办理</span>
      <span>办理完成</span>
    </nav>
    <!-- 证件照片 -->
    <div class="tab">
      <dl>
        <dt><p>+</p></dt>
        <dd>身份证正面</dd>
      </dl>
      <dl>
        <dt><p>+</p></dt>
        <dd>身份证反面</dd>
      </dl>
      <dl>
        <dt><p>+</p></dt>
        <dd>驾驶证正页</dd>
      </dl>
      <dl>
        <dt><p>+</p></dt>
        <dd>驾驶证副页</dd>
      </dl>
      <dl>
        <dt><p>+</p></dt>
        <dd>白底半身照</dd>
      </dl>
    </div>
    <!-- 服务 -->
    <ul class="tabList">
      <li>服务类型</li>
      <li>当前驾照签发城市</li>
      <li>可补换的签发城市</li>
      <li>服务费</li>
    </ul>
    <!-- 会员 -->
    <div class="vip">成为车轮会员</div>
    <!-- 额度 -->
    <div class="price">
      <span>实付:<strong>￥399</strong></span>
      <span>立即支付</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: #eee;
  }
  header{
    width: 100%;
    height: 30px;
    display: flex;
    background-color: #fff;
  }
  header span{
    flex: 1;
    text-align: center;
    line-height: 30px;
  }
  header span:nth-child(2){
    flex: 3;
  }
  nav{
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    color: skyblue;
    display: flex;
    background-color: #fff;
    font-size: 12px;
  }
  nav span{
    flex: 1;
    text-align: center;
  }
  .active{
    background-color: skyblue;
    color: #fff;
  }
  .tab{
    width: 100%;
    height: 100px;
    background-color: #fff;
    font-size: 12px;
  }
  .tab dl{
    width: 17.5%;
    height: 100px;
    margin: 1.2%;
    float: left;
  }
  .tab dl dt{
    width: 100%;
    height: 55px;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  .tab dl dt p{
    margin: 25%;
    display: inline-block;
    width: 50%;
    height: 50%;
    border-radius: 100%;
    border: 1px solid #ccc;
    text-align: center;
  }
  .tabList{
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-top: 10px;
  }
  .tabList li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .vip{
    width: 100%;
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    line-height: 40px;
    margin-top: 10px;
    background-color: #fff;
  }
  .price{
    width: 100%;
    height: 40px;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }
  .price span:nth-child(1){
    width: 70%;
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
  }
  .price span:nth-child(1) strong{
    color: red;
    margin-left: 15px;
    box-sizing: border-box;
  }
  .price span:nth-child(2){
    flex: 1;
    font-size: 14px;
    background-color: #ccc;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
</style>
