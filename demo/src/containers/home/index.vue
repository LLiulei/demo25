<template>
    <div class="box">
        <router-view></router-view>
        <div class="footer">
            <router-link to="/find">
                <dl>
                    <dt>
                        <img src="../../image/faxian.png"/>
                    </dt>
                    <dd>发现</dd>
                </dl>
            </router-link>
            <router-link to="/video">
                <dl>
                    <dt>
                        <img src="../../image/shipin.png"/>
                    </dt>
                    <dd>视频</dd>
                </dl>
            </router-link>
            <router-link to="/my">
                <dl>
                    <dt>
                        <img src="../../image/yinyue.png"/>
                    </dt>
                    <dd>我的</dd>
                </dl>
            </router-link>
            <router-link to="/friend">
                <dl>
                    <dt>
                        <img src="../../image/mn_pengyou.png"/>
                    </dt>
                    <dd>朋友</dd>
                </dl>
            </router-link>
            <router-link to="/account">
                <dl>
                    <dt>
                        <img src="../../image/wode.png"/>
                    </dt>
                    <dd>账号</dd>
                </dl>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.box{
    width: 100%;
    height: 100%;
}
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    background-color: #eee;
    display: flex;
}
.footer a{
    flex: 1;
    display: inline-block;
    text-decoration: none;
}
.footer a dl{
    width: 100%;
    height: 100%;
    margin-top: 5px;
    box-sizing: border-box;
}
.footer a dl dt{
    width: 100%;
    height: 60%;
}
.footer a dl dt img{
    width: 60%;
    height: 90%;
    margin-left: 20%;
}
.footer a dl dd{
    width: 100%;
    height: 40%;
    line-height: 40%;
    text-align: center;
    color: #ccc;
    font-size: 12px;
}
.router-link-active dl dd{
    color: orangered!important;
}
</style>
