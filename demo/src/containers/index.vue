<template>
    <div class="box">
        <div class="btn">
            <router-link to="/phone">手机号登录</router-link>
        </div>
        <div class="btn">注册</div>
        <div class="icons">
            <dl>
                <dt>
                    <img src="../image/weixin.png"/>
                </dt>
                <dd>微信</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../image/web-icon-.png"/>
                </dt>
                <dd>QQ</dd>
            </dl>
            <dl>
                <dt>
                    <img src="../image/weibo.png"/>
                </dt>
                <dd>微博</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            msg: ""
        }
    },
    methods: {
        // btn() {
        //     this.$router.push({
        //         path: "/phone"
        //     })
        // }
    }
}
</script>

<style>
    a{
        outline: none;
        text-decoration: none;
        color: orangered;
    }
    .box{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .btn{
        width: 90%;
        margin-left: 5%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 30px;
        border: 1px solid orangered;
        color: orangered;
        margin-top: 20px;
    }
    .btn:nth-child(1){
        margin-top: 60%;
        box-sizing: border-box;
    }
    .icons{
        width: 100%;
        height: 80px;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
    }
    .icons dl{
        flex: 1;
    }
    dl dt{
        width: 50%;
        height: 60%;
        margin-left: 25%;
        border: 1px solid #ccc;
        border-radius: 100%;
    }
    dl dt img{
        width: 80%;
        height: 80%;
        margin: 10%;
    }
    dl dd{
        width: 50%;
        height: 40%;
        margin-left: 25%;
        text-align: center;
        color: #ccc;
    }
</style>