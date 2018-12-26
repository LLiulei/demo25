<template>
    <div>
        <div class="tab">
            <div class="back" @click="back">&lt;</div>
            <p>手机号的登录</p>
        </div>
        <input type="text" placeholder="手机号" value=""/>
        <input type="password" placeholder="密码"   value="" />
        <button @click="btn">登录</button>
        <div class="reset" @click="reset">重设密码</div>
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
    created() {
        this.back
        this.btn
        this.reset
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        btn() {
            let phone = document.getElementsByTagName("input")[0].value;
            let mima = document.getElementsByTagName("input")[1].value;
            let phoneMsg = /^[1][3,4,5,7,8][0-9]{9}$/;
            let mimaMsg = /^[a-zA-Z0-9]{4,10}$/;
            if(phoneMsg.test(phone) === false){
                return false;
            } else {
                console.log("成功")
            }
            console.log(document.getElementsByTagName("input")[0].value)
            console.log(document.getElementsByTagName("input")[1].value)
        },
        reset() {
            console.log(this)
        }
    }
}
</script>

<style>
    .tab{
        width: 100%;
        height: 30px;
        background-color: #000;
        color: #fff;
        position: relative;
    }
    .tab p{
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 100%;
        text-align: center;
    }
    .back{
        width: 30px;
        height: 30px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 4px;
    }
    input{
        border: 0;
        border-bottom: 1px solid #ccc;
        width: 90%;
        height: 20px;
        margin: 5%;
        outline: none;
    }
    button{
        width: 90%;
        margin-left: 5%;
        height: 35px;
        color: #ccc;
        text-align: center;
        background-color: #000;
        border-radius: 30px;
        outline: none;
        border: 1px solid #ccc;
        margin-top: 15px;
    }
    .reset{
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #ccc;
        margin-top: 5px;
    }
</style>