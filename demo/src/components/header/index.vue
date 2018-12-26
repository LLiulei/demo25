<template>
    <div class="header">
        <a href="#"></a>
        <a href="#">
            <input type="text" placeholder="猜你喜欢 浮生">
        </a>
        <a href="#"></a>
    </div>
</template>
<script>
export default {

}
</script>

<style>
.header{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #333;
    display: flex;
}
.header a{
    flex: 1;
}
.header a:nth-child(2){
    flex: 4;
}
.header a:nth-child(2) input{
    width: 100%;
    height: 60%;
    border-radius: 30px;
    background-color: #999;
    text-align: center;
    border: 0;
    outline: none;
}
</style>
