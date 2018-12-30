<template>
    <div class="account">
        <header>账号</header>
        <div class="account-tab">
            <span>登录网易云音乐</span>
            <span>手机电脑多端同步，尽享海量高品质音乐</span>
            <div>立即登录</div>
        </div>
        <div class="account-x">
            <div class="imgs">
                <img src="../../image/xinfeng.png"/>
            </div>
            <span>我的消息</span>
            <p>&gt;</p>
        </div>
        <div class="account-cen">
            <dl class="cenDls" @click="getHui">
                <dt>
                    <img src="../../image/huiyuan.png"/>
                </dt>
                <dd>会员中心</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/shangcheng.png"/>
                </dt>
                <dd>商城</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/94.png"/>
                </dt>
                <dd>精品游戏推荐</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/zaixianzhidao.png"/>
                </dt>
                <dd>在线听歌免流量</dd>
                <p class="right">&gt;</p>
            </dl>
        </div>
        <div class="account-cen2">
            <dl class="cenDls">
                <dt>
                    <img src="../../image/shezhi.png"/>
                </dt>
                <dd>设置</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/saoyisao.png"/>
                </dt>
                <dd>扫一扫</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/huanfu.png"/>
                </dt>
                <dd>个性换肤</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/dengpao.png"/>
                </dt>
                <dd>夜间模式</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/xinfeng.png"/>
                </dt>
                <dd>定时关闭</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/xinfeng.png"/>
                </dt>
                <dd>音乐闹钟</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/chepai.png"/>
                </dt>
                <dd>驾驶模式</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/qinzi.png"/>
                </dt>
                <dd>亲子频道</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/binggun-.png"/>
                </dt>
                <dd>小冰电台</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/xinfeng.png"/>
                </dt>
                <dd>优惠券</dd>
                <p class="right">&gt;</p>
            </dl>
        </div>
        <div class="account-cen3">
            <dl class="cenDls">
                <dt>
                    <img src="../../image/share.png"/>
                </dt>
                <dd>分享网易云音乐</dd>
                <p class="right">&gt;</p>
            </dl>
            <dl class="cenDls">
                <dt>
                    <img src="../../image/guanyu.png"/>
                </dt>
                <dd>关于</dd>
                <p class="right">&gt;</p>
            </dl>
        </div>
        <div class="tui">
            退出登录
        </div>
        <div class="zero"></div>
    </div>
</template>

<script>
export default {
    created() {
        this.getHui
    },
    methods: {
        getHui() {      
            this.$router.push("/huiyuan")
        }
    }
}
</script>

<style>
    .account{
        width: 100%;
        height: 100%;
        background-color: #eee;
        overflow-y: scroll;
    }
    header{
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #fff;
        background-color: orangered;
        position: sticky;
        top: 0;
        z-index: 999;
    }
    .account-tab{
        width: 100%;
        height: 140px;
        background-color: #fff;
    }
    .account-tab span{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: inline-block;
        margin-top: 5px;
        font-size: 14px;
    }
    .account-tab div{
        width: 90%;
        margin-left: 5%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 30px;
        margin-top: 10px;
    }
    .account-x{
        width: 100%;
        height: 35px;
        line-height: 35px;
        background-color: #fff;
        display: flex;
        position: relative;
        margin-top: 10px;
    }
    .account-x .imgs{
        width: 10%;
        margin-left: 5px;
        box-sizing: border-box;
    }
    .account-x .imgs img{
        width: 90%;
        height: 90%;
        margin: 5%;
    }
    .account-x span{
        flex: 1;
        margin-left: 15px;
        box-sizing: border-box;
    }
    .account-x p{
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 0;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #ccc;
    }
    .account-cen{
        width: 100%;
        height: auto;
        margin-top: 10px;
    }
    .account-cen2{
        width: 100%;
        margin-top: 10px;
    }
    .account-cen3{
        width: 100%;
        margin-top: 10px!important;
    }
    .cenDls{
        width: 100%;
        height: 35px;
        line-height: 35px;
        background-color: #fff;
        display: flex;
        position: relative;
    }
    .cenDls dt{
        width: 10%;
        margin-left: 5px;
        box-sizing: border-box;
    }
    .cenDls dt img{
        width: 80%;
        height: 80%;
        margin: 10%;
    }
    .cenDls dd{
        flex: 1;
        border-bottom: 1px solid #ccc;
        margin-left: 15px;
        box-sizing: border-box;
    }
    .right{
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 0;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #ccc;
        font-family: "楷体";
    }
    .account-cen .cenDls:last-child dd{
        border-bottom: 0!important;
    }
    .account-cen2 .cenDls:last-child dd{
        border-bottom: 0!important;
    }
    .account-cen3 .cenDls:last-child dd{
        border-bottom: 0!important;
    }
    .account .tui{
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: #fff;
    }
</style>
