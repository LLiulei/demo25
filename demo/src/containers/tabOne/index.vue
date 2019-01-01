<template>
    <div class="tabList">
        <!-- 发现的轮播图 -->
        <el-carousel indicator-position="outside" height="180px">
            <el-carousel-item v-for="(item,index) in oneList" :key="index">
                <img :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <!-- 发现的app -->
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
        <!-- 发现的推荐歌单部分 -->
        <h4>推荐歌单 > </h4>
        <div class="ge">
            <dl v-for="(lis,index) in oneGe" :key="index">
                <dt>
                   <img :src="lis.url"/>
                </dt>
                <dd>{{lis.name}}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
    data() {
        return {
            oneList:[
                "https://b-ssl.duitang.com/uploads/item/201503/14/20150314212812_kCLmy.jpeg",
                "http://www.pig66.com/uploadfile/2017/0511/20170511074941292.jpg",
                "http://img1.imgtn.bdimg.com/it/u=1993519481,1781222786&fm=26&gp=0.jpg",
                "http://pic1.win4000.com/wallpaper/5/5798158c16e9c.jpg",
                "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg"
            ],
            oneGe:[{
                id: 1,
                url: "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg",
                name: "要做什么梦是每个人的自由"
            },{
                id: 2,
                url: "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                name: "若不能一起，来世，你愿陪我看遍万水"
            },{
                id: 3,
                url: "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg",
                name: "我的民谣，你的故事"
            },{
                id: 4,
                url: "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                name: "要做什么梦是每个人的自由"
            },{
                id: 5,
                url: "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg",
                name: "要做什么梦是每个人的自由"
            },{
                id: 6,
                url: "http://img1.xiazaizhijia.com/walls/20151117/1440x900_905103645742a79.jpg",
                name: "要做什么梦是每个人的自由"
            },{
                id: 7,
                url: "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg",
                name: "要做什么梦是每个人的自由"
            }]
        }
    },
    mounted(){

    }
}
</script>
<style>
.tabList{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.ge{
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
}
.ge dl{
    float: left;
    margin: 1% 0 1% 2%;
    width: 30%;
    height: 80px;
    padding: 5px;
    box-sizing: border-box;
}
.ge dl dt {
    width: 100%;
    height: 60%;
}
.ge dl dt img{
    width: 100%;
    height: 100%;
}
.ge dl dd{
    width: 100%;
    height: 40%;
    font-size: 10px;
    text-align: center;
}
</style>
