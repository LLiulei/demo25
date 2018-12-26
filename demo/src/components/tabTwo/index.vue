<template>
    <div><el-carousel indicator-position="outside" height="180px">
            <el-carousel-item v-for="(item,index) in list" :key="index">
                <img :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <div class="tabBtn">
            <dl>
                <dt>
                    <img src="../../image/shipin.png"/>
                </dt>
                <dd>电台分类</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/shipin.png"/>
                </dt>
                <dd>电台排行</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/shipin.png"/>
                </dt>
                <dd>DI电音</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/shipin.png"/>
                </dt>
                <dd>小冰电台</dd>
            </dl>
        </div>
        this is 主播电台
    </div>
</template>
<script>
export default {
    data() {
        return {
            twoList:[
                "https://b-ssl.duitang.com/uploads/item/201503/14/20150314212812_kCLmy.jpeg",
                "http://www.pig66.com/uploadfile/2017/0511/20170511074941292.jpg",
                "http://img1.imgtn.bdimg.com/it/u=1993519481,1781222786&fm=26&gp=0.jpg",
                "http://pic1.win4000.com/wallpaper/5/5798158c16e9c.jpg",
                "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg"
            ]
        }
    },
}
</script>
<style>

</style>
