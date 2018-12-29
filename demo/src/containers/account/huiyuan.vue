<template>
    <div class="huiyuan">
        <div class="huiyuanTab">
            <span>←</span>
            <span>会员中心</span>
            <span>
                <img src="../../image/wode.png"/>
            </span>
        </div>
        <Swiper :swiperList="swiperList"/>
        this is huiyuan
    </div>
</template>
<script>
import Swiper from "../../components/swiper";
export default {
    name: "vip",
    components: {
        Swiper
    },
    data() {
        return {
            swiperList:[{
                id: 1,
                url: "../../image/img1.jpg"
            },{
                id: 2,
                url: "../../image/img2.jpg"
            },{
                id: 3,
                url: "../../image/img3.jpg"
            },{
                id: 4,
                url: "../../image/img4.jpg"
            },{
                id: 5,
                url: "../../image/img5.jpg"
            },{
                id: 6,
                url: "../../image/img6.jpg"
            }]
        }
    }
}
</script>
<style>
    .huiyuan{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .huiyuanTab{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
    }
    .huiyuanTab span{
        flex: 1;
    }
    .huiyuanTab span:nth-child(2){
        flex: 4;
    }
    .huiyuanTab span:nth-child(3){
        display: inline-block;
    }
    .huiyuanTab span:nth-child(3) img{
        width: 60%;
        height: 60%;
        margin: 10%;
    }
</style>

