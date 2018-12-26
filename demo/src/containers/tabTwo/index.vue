<template>
    <div class="TwoList">
        <el-carousel indicator-position="outside" height="180px">
            <el-carousel-item v-for="(item,index) in twoList" :key="index">
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
        <h4>今日优选</h4>
        <div class="twoYou">
            <dl v-for="(item,index) in twoYou" :key="index">
                <dt>
                    <img :src="item.url" />
                </dt>
                <dd>
                    <h5>{{item.name}}</h5>
                    <span>节目:{{item.dress}}</span>
                    <span>{{item.time}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            twoList:[
                "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                "https://b-ssl.duitang.com/uploads/item/201503/14/20150314212812_kCLmy.jpeg",
                "http://pic1.win4000.com/wallpaper/5/5798158c16e9c.jpg",
                "http://img1.imgtn.bdimg.com/it/u=1993519481,1781222786&fm=26&gp=0.jpg",
                "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg",
                "http://www.pig66.com/uploadfile/2017/0511/20170511074941292.jpg",
            ],
            twoYou:[{
                id: 1,
                url: "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                name: "末那大叔",
                dress: 18,
                time: "愿你的故事有人能懂"
            },{
                id: 2,
                url: "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                name: "七月的风八月的雨，卑微的我喜欢遥远",
                dress: 281,
                time: "失去才懂 纯音乐 (完整版)"
            },{
                id: 3,
                url: "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                name: "认识杜航的陌生人",
                dress: 18,
                time: "愿你的故事有人能懂"
            },{
                id: 4,
                url: "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                name: "要做什么梦是每个人的自由",
                dress: 18,
                time: "愿你的故事有人能懂"
            }]
        }
    },
}
</script>
<style>
    .TwoList{
        width: 100%;
        height: 100%;
    }
    .twoYou{
        width: 100%;
        height: 100%;
    }
    .twoYou dl{
        width: 100%;
        height: 120px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
    }
    .twoYou dl dt {
        flex: 2;
        border-radius: 10px;
    }
    .twoYou dl dt img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .twoYou dl dd{
        flex: 4;
        margin-left: 15px;
        box-sizing: border-box;
    }
    .twoYou dl dd h5{
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .twoYou dl dd span{
        display: inline-block;
        font-size: 12px;
        color: #ccc;
        width: 100%;
        height: 25px;
        line-height: 25px;
    }
</style>
