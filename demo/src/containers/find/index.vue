<template>
    <div>
        <Header/>
        <nav class="tab">
            <router-link to="/find/tabOne">
                <p>个性推荐</p>
            </router-link>
            <router-link to="/find/tabTwo">
                <p>主播电台</p>
            </router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "../../components/header";
    export default {
        data() {
            return {
                tabList: [{
                    id: 1,
                    name: "个性推荐"
                },{
                    id: 2,
                    name: "主播电台"
                }]
            }
        },
        created() {

        },
        methods: {
        },
        components: {
            Header
        }
    }
</script>

<style>
    .tab{
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        background-color: #333;
    }
    .tab a{
        flex: 1;
        display: inline-block;
    }
    .tab .router-link-exact-active p{
        color: orange;
    }
    .tab a p{
        color: #fff;
        text-align: center;
        font-size: 14px;
    }
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
