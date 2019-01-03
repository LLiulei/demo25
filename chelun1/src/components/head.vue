<template>
    <div class="head">
        <span v-for="(item,index) in tablist" :key="index" :class="[ind == item.id ? 'active' : '']">{{item.name}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ind: 1,
                tablist: [{
                    id: 1,
                    name: "订单提交"
                },{
                    id: 2,
                    name: "填写收货地址"
                },{
                    id: 3,
                    name: "正在办理"
                },{
                    id: 4,
                    name: "办理完成"
                }]
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .head{
        width: 100%;
        height: 35px;
        line-height: 35px;
        display: flex;
        text-align: center;
        border-bottom: 0.01rem solid #ccc;
        background-color: #fff;
        span{
            flex: 1;
            font-size: 12px;
            color: skyblue;
            .active{
                background-color: skyblue;
                color: #fff;
            }
        }
    }
</style>