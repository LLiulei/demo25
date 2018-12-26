<template>
    <div class="tabList">
        <el-carousel indicator-position="outside" height="180px">
            <el-carousel-item v-for="(item,index) in list" :key="index">
                <img :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <div class="tabBtn">
            <dl>
                <dt>
                    <img src="../../image/faxian.png"/>
                </dt>
                <dd>私人FM</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/faxian.png"/>
                </dt>
                <dd>每日推荐</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/faxian.png"/>
                </dt>
                <dd>歌单</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/faxian.png"/>
                </dt>
                <dd>排行榜</dd>
            </dl>
        </div>
        this is 个性推荐
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
    data() {
        return {
            list:[
                "https://b-ssl.duitang.com/uploads/item/201503/14/20150314212812_kCLmy.jpeg",
                "http://www.pig66.com/uploadfile/2017/0511/20170511074941292.jpg",
                "http://img1.imgtn.bdimg.com/it/u=1993519481,1781222786&fm=26&gp=0.jpg",
                "http://pic1.win4000.com/wallpaper/5/5798158c16e9c.jpg",
                "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg"
            ]
        }
    },
    mounted(){

    }
}
</script>
<style>
.el-carousel__item img {
    width: 100%;
    height: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.tabList{
    width: 100%;
    height: 100%;
}
.tabBtn{
    width: 100%;
    height: 80px;
    display: flex;
}
.tabBtn dl{
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
}
.tabBtn dl dt{
    width: 60%;
    height: 60%;
    margin-left: 20%;
    border-radius: 100%;
    background-color: #333;
}
.tabBtn dl dt img{
    width: 80%;
    height: 80%;
    margin: 10%;
}
.tabBtn dl dd{
    width: 100%;
    height: 40%;
    line-height: 40%;
    padding-top: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 10px;
}
</style>
