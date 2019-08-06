<template>
    <div class="topbar">
        <img src="../../assets/images/logo.png" alt="">
        <a href="">
            <i class="iconfont">&#xe780;</i>
            <span>搜索商品，共21664款好物</span>
        </a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .topbar{
        height:36px;
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content:center;
        padding:0 10px;
        img{
            width:60px;
            margin-right:10px;
        }
        a{
            height:24px;
            flex:1;
            background:#EDEDED;
            display:flex;
            flex-direction: row;
            align-items: center;
            justify-content:center;
            border-radius:3px;
            color:#757575;
            .iconfont{
                margin-right:5px;
                font-size:12px;
            }
            span{
                font-size:12px;
            }
        }
    }
</style>
