<template>
  <div class="box">
    <Head/>
    <Upload/>
    <ul>
      <li @click="typeClick">
        <span>{{form.type}}</span>
      </li>
      <CityPicker/>
    </ul>
    <section class="popup">
      <van-popup v-model="showType" position="bottom" overlay>
        <van-picker :columns="typeArray" show-toolbar title="服务类型" @cancel="cancelType" @confirm="confirmType"/>
      </van-popup>
    </section>
    <button @click="click">立即支付</button>
  </div>
</template>

<script>
import Upload from '@/components/Upload';
import Head from '@/components/head';
import CityPicker from '@/components/CityPicker';
import {isVip, goPay} from '@/api/index';
export default {
  data() {
    return {
      showType: false,
      typeArray: ['换驾照','补驾照'],
      form: {
        type: ''
      }
    }
  },
  components: {
    Head,
    Upload,
    CityPicker
  },
  methods: {
    typeClick(){
      this.showType = true;
    },
    cancelType(){
      this.showType = false;
    },
    confirmType(value){
      this.form.type = value;
      this.cancelType();
    }
  },
  mounted(){
    isVip().then(res=>{
      console.log('isVip...', res);
    })
    // fetch('/api/ExchangeJiaZhao/getCostList?order_type=1&city_id=110100000000&province_id=110')
  }
}
</script>

<style lang="scss" scoped>
    .box{
      width: 100%;
      height: 100%;
      background-color: #eee;
    }
    .popup{
      width: 100%;
    }
</style>
