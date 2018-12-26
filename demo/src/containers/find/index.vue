<template>
    <div>
        <Header/>
        <nav class="tab">
            <p v-for="(key,index) in tabList" :key="index">{{key.name}}</p>
        </nav>
        <TabOne />
        <TabTwo />
    </div>
</template>

<script>
    import Header from "../../components/header";
    import TabOne from "../../components/tabOne";
    import TabTwo from "../../components/tabTwo";
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
        components: {
            Header,
            TabOne,
            TabTwo
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
    .tab p{
        flex: 1;
        color: #fff;
        text-align: center;
        font-size: 14px;
    }
</style>
