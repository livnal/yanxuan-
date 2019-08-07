<template>
    <div class="detailbottom">
        <button class="service"><i class="iconfont service">&#xe664;</i></button>
        <button class="buynow">立即购买</button>
        <button class="addtocar">加入购物车</button>
    </div>
</template>



<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .detailbottom{
        height:60px;
        width:100%;
        // background:#66ccff;
        position: fixed;
        bottom:0;
        border-top:1px solid #ccc;
        z-index:10;
        button{
            border:none;
            background:#fff;
        }
        .service{
            width:20%;
            height:55px;
            border-right:1px solid #ccc;
            font-size:18px;
            
        }
        .buynow{
            width:40%;
            height:55px;
        }
        .addtocar{
            width:40%;
            height:55px;
            background:red;
            color:#fff;
        }
    }
</style>
