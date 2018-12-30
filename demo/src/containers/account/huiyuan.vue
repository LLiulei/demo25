<template>
    <div class="huiyuan">
        <div class="huiyuanTab">
            <span>←</span>
            <span>会员中心</span>
            <span>
                <img src="../../image/wode.png"/>
            </span>
        </div>
        <!-- 头部轮播 -->
        <Swiper :swiperList="swiperList"/>
        <!-- app -->
        <div class="heiVip">
            <dl>
                <dt>
                    <img src="../../image/vip/yinle.png"/>
                </dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/vynil.png"/>
                </dt>
                <dd>无损音质</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/icon--.png"/>
                </dt>
                <dd>免费下载</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/ad.png"/>
                </dt>
                <dd>免广告</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/tubiaosheji_huaban.png"/>
                </dt>
                <dd>音画主题</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/toushi.png"/>
                </dt>
                <dd>头像挂件</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/jingzi.png"/>
                </dt>
                <dd>个性皮肤</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/shangcheng.png"/>
                </dt>
                <dd>商城折扣</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/ziyuan.png"/>
                </dt>
                <dd>票务特权</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../image/vip/youhuiquan.png"/>
                </dt>
                <dd>福利券</dd>
            </dl>
        </div>
        <h4>福利券: 麦当劳麦辣鸡翅买一送一券(浙江专...</h4>
        <!-- 会员精选 -->
        <h5>会员精选内容</h5>
        <Swiper :swiperList="tuijian"/>
        <!-- 曲库 -->
        <div class="library">
            <div class="left">
                <h4>会员曲库</h4>
                <span>海量会员专属付费歌曲</span>
            </div>
            <img src="https://bj.bcebos.com/v1/gaopin-preview/133202010552.jpg%40%21sougou305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-12-27T10%3A03%3A47Z%2F-1%2F%2F521295b1f12331f3161afe10dad87d82aeb4317e1dc97a84ce8372aa1843c03a" class="rights"/>
        </div>
        <div class="zero"></div>
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
                url: "http://p1.music.126.net/mrJLwxskaB_D7PsZReBVTA==/109951163751889323.jpg"
            },{
                id: 2,
                url: "http://p1.music.126.net/A_Ri0HMwTxwjaO4syVphiQ==/109951163756009748.jpg"
            },{
                id: 3,
                url: "http://p1.music.126.net/z8Bn9bSrTR7lCpwRTub6ig==/109951163756676043.jpg"
            },{
                id: 4,
                url: "http://p1.music.126.net/I-VdGC_Czs0mlBDTP2YVMw==/109951163756036366.jpg"
            },{
                id: 5,
                url: "http://p1.music.126.net/dzGRsYTiq66f9R944g3_FA==/109951163755394052.jpg"
            },{
                id: 6,
                url: "http://p1.music.126.net/B5wEFn4PWLQ1GpO8CvuIcA==/109951163756047039.jpg"
            }],
            tuijian:[
                {
                    id: 1,
                    url: "https://bj.bcebos.com/v1/gaopin-preview/133202010552.jpg%40%21sougou305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-12-27T10%3A03%3A47Z%2F-1%2F%2F521295b1f12331f3161afe10dad87d82aeb4317e1dc97a84ce8372aa1843c03a"
                },{
                    id: 2,
                    url: "https://bj.bcebos.com/v1/gaopin-preview/133105762232.jpg%40%21sougou305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-12-27T09%3A13%3A34Z%2F-1%2F%2Fcc2b6acde1ec489f3244400d017625c2a7fffda2297c6be278522f72a67012ed"
                },{
                    id: 3,
                    url: "https://bj.bcebos.com/v1/gaopin-preview/01291006727.jpg%40%21sougou305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-12-27T09%3A37%3A30Z%2F-1%2F%2Fc43e66d413733bc5080f8b3df1a2a93965b09fedea80b0dac76f0261aa3c512f"
                },{
                    id: 4,
                    url: "https://bj.bcebos.com/v1/gaopin-preview/133108884730.jpg%40%21sougou305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-12-27T09%3A14%3A15Z%2F-1%2F%2F237a5f9f879ad7ea2688df5ca6a6ac28be864e11e3b48beca9b70f2800d3c8fb"
                }
            ]
        }
    }
}
</script>
<style>
    .huiyuan{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background-color: #eee;
    }
    .huiyuanTab{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        background-color: #fff;
    }
    .huiyuan h4{
        width: 90%;
        padding: 0 5%;
        height: 35px;
        line-height: 35px;
        background-color: #fff;
        font-size: 14px;
        font-weight: normal;
    }
    .huiyuan h5{
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        margin-top: 10px;
        background-color: #fff;
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
    .heiVip{
        width: 100%;
        height: 170px;
        padding: 5px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        flex-wrap: nowrap;
    }
    .heiVip dl{
        width: 18%;
        float: left;
        height: 85px;
        margin-left: 1.5%;
    }
    .heiVip dl dt{
        width: 90%;
        height: 50px;
        margin-left: 5%;
        border-radius: 100%;
        background-color: #ffb3a7;
    }
    .heiVip dl dt img{
        width: 60%;
        height: 60%;
        text-align: center;
        line-height: 60%;
        margin: 20%;
    }
    .heiVip dl dd{
        width: 100%;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 12px;
    }
    .library{
        width: 100%;
        height: 70px;
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        border-top: 0.5px solid #eee;
        border-bottom: 0.5px solid #eee;
    }
    .library .left{
        width: 80%;
        height: 100%;
        float: left;
    }
    .library .left h4{
        width: 100%;
        height: 25px;
        line-height: 25px;
        padding: 0!important;
    }
    .library .left span{
        font-size: 12px;
        color: #ccc;
    }
    .library .rights{
        width: 20%;
        height: 80%;
        float: left;
    }
</style>

