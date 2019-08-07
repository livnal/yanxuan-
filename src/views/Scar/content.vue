<template>
    <div>
        <ul class="goodlist">
            <li >
                <div class="good">
                    <!-- 商品图片 -->
                    <div class="goodimg">
                        <img src="../../assets/good1.png" alt="">
                    </div>
                    <div class="goodtype">
                        <!-- 商品名称 -->
                        <div class="goodname"><span>智能降温水杯</span></div>
                        <!--  -->
                        <!-- 商品型号 -->
                        <div class="goodtag"><span>帝王黑</span></div>
                        <!--  -->
                        <!-- 商品售价 -->
                        <div class="goodprice"><span>￥199</span></div>
                        <!--  -->
                        <!-- 商品数量 -->
                        <div class="goodnum">
                            <span class="goodnumadd"><i class="iconfont">&#xe509;</i></span>
                            <input type="text" placeholder="1">
                            <span class=goodnumsubtrac><i class="iconfont">&#xe64f;</i></span>
                        </div>
                        <!--  -->
                    </div>
                </div>
            </li>
             <li >
                <div class="good">
                    <!-- 商品图片 -->
                    <div class="goodimg">
                        <img src="../../assets/good1.png" alt="">
                    </div>
                    <div class="goodtype">
                        <!-- 商品名称 -->
                        <div class="goodname"><span>智能降温水杯</span></div>
                        <!--  -->
                        <!-- 商品型号 -->
                        <div class="goodtag"><span>帝王黑</span></div>
                        <!--  -->
                        <!-- 商品售价 -->
                        <div class="goodprice"><span>￥199</span></div>
                        <!--  -->
                        <!-- 商品数量 -->
                        <div class="goodnum">
                            <span class="goodnumadd"><i class="iconfont">&#xe509;</i></span>
                            <input type="text" placeholder="1">
                            <span class=goodnumsubtrac><i class="iconfont">&#xe64f;</i></span>
                        </div>
                        <!--  -->
                    </div>
                </div>
            </li>
            <li >
                <div class="good">
                    <!-- 商品图片 -->
                    <div class="goodimg">
                        <img src="../../assets/good1.png" alt="">
                    </div>
                    <div class="goodtype">
                        <!-- 商品名称 -->
                        <div class="goodname"><span>智能降温水杯</span></div>
                        <!--  -->
                        <!-- 商品型号 -->
                        <div class="goodtag"><span>帝王黑</span></div>
                        <!--  -->
                        <!-- 商品售价 -->
                        <div class="goodprice"><span>￥199</span></div>
                        <!--  -->
                        <!-- 商品数量 -->
                        <div class="goodnum">
                            <span class="goodnumadd"><i class="iconfont">&#xe509;</i></span>
                            <input type="text" placeholder="1">
                            <span class=goodnumsubtrac><i class="iconfont">&#xe64f;</i></span>
                        </div>
                        <!--  -->
                    </div>
                </div>
            </li>
            <li >
                <div class="good">
                    <!-- 商品图片 -->
                    <div class="goodimg">
                        <img src="../../assets/good1.png" alt="">
                    </div>
                    <div class="goodtype">
                        <!-- 商品名称 -->
                        <div class="goodname"><span>智能降温水杯</span></div>
                        <!--  -->
                        <!-- 商品型号 -->
                        <div class="goodtag"><span>帝王黑</span></div>
                        <!--  -->
                        <!-- 商品售价 -->
                        <div class="goodprice"><span>￥199</span></div>
                        <!--  -->
                        <!-- 商品数量 -->
                        <div class="goodnum">
                            <span class="goodnumadd"><i class="iconfont">&#xe509;</i></span>
                            <input type="text" placeholder="1">
                            <span class=goodnumsubtrac><i class="iconfont">&#xe64f;</i></span>
                        </div>
                        <!--  -->
                    </div>
                </div>
            </li>
        </ul>
        <!-- 底部 -->
        <div class="shoppingBottom">
            <div class="shoppingBtoomLeft">
                    <span class="goodtotal">总数：</span>
                    <span class="goodtotalprice">合计：¥0000</span>
            </div>
            <div class="shoppingBottomRigth">
                <button>下单</button>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>
    li:first-child{
        margin-top:40px;
    }
    li:last-child{
        margin-bottom:70px;
    }
    .good{
        display: flex;
        height:140px;
        width:100%;
        // background:red;
        // margin:20px 0;
        border:1px solid #ccc;
        align-items: center;
        .goodimg{
            height:100px;
            width:100px;
            margin-left:10px;
            img{
                width:100%;
                height:100%;
                // border:1px solid #ccc;
            }
        }
        .goodtype{
           position: relative;
           width:250px;
           height:100px;
           .goodname{
               position: absolute;
               left:0;
               top:10px;
               font-size:18px;
           }
           .goodtag{
               position: absolute;
               left:5px;
               top:40px;
           }
           .goodprice{
               position:absolute;
               bottom:0;
               font-size:20px;
               color:red;
           }
           .goodnum{
               position: absolute;
               bottom:5px;
               right:10px;
               border:1px solid #ccc;
               span{
                   margin:0 1px;
                   i{
                    width:25px;
                    height:25px;
                   border:1px solid #ccc;
                   font-size:18px;
                   }
               }    
               input{
                   width:25px;
                   height:18px;
                   border:none;
                   text-align:center;
                   align-items: center;
                   font-size:18px;                  
               }
           }
        }
    }
    .shoppingBottom{
        height:50px;
        width:100%;
        display: flex;
        justify-content: space-between;
        background:#fff;
        position: fixed;
        bottom:40px;
        border-top:1px solid #ccc;
        .shoppingBtoomLeft{
            display: flex;
            width:70%;
            justify-content: space-between;
            span{
                display:flex;
                padding-left:20px;
                align-items: center;
            }
        }
        .shoppingBottomRigth{
            height:50px;
            width:30%;
            button{
                height:50px;
                width:100%; 
                border:none;
                background:red;
                color:#fff;
            }
        }
    }
</style>
