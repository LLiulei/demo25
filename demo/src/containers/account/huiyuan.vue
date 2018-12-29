<template>
    <div class="huiyuan">
        <div class="huiyuanTab">
            <span>←</span>
            <span>会员中心</span>
            <span>
                <img src="../../image/wode.png"/>
            </span>
        </div>
        <!-- <Swiper/> -->
        this is huiyuan
    </div>
</template>
<script>
export default {
    name: "会员"
}
</script>
<style>
    .huiyuan{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .huiyuanTab{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
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
</style>

