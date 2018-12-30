<template>
    <div class="swipers">
        <el-carousel indicator-position="outside" height="150px">
            <el-carousel-item v-for="(item,index) in swiperList" :key="index">
                <img :src="item.url"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    props: ['swiperList'],
    data () {
    return {
      
    }
  },
  methods: {
   
  },
  created () {
    console.log(this.swiperList)
  }
}
</script>
<style>
    .swipers{
      width: 100%;
      background-color: #fff;
    }
    .swipers .el-carousel{
        width: 90%;
        margin: 0 5%;
        box-sizing: border-box;
    }
    .swipers .el-carousel__container{
        border-radius: 5px;
        overflow: hidden;
    }
    .swipers .el-carousel__item img {
        width: 100%;
        height: 100%;
    }
</style>

