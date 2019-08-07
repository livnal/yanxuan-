<template>
    <div>
   <!-- 如果为空的话 -->
   <div class="empty">
       <div class="imgbox">
           <section>
           <img src="../../assets/empty-shopping.png" alt="">
           </section>
           <p>购物车空空如也</p>
       </div>
       <div class="buttonbox">
           <!-- 登录后不显示 -->
           <button @click="toMine">登录</button>
       </div>
   </div>
    </div>
</template>


<script>
export default {
    methods: {
        // 点击登录跳转到我的页面
        toMine(){
           this.$router.push("/mine")
        }
    },
}
</script>




<style lang="scss" scoped>
    .empty{
        width:100%;
        .imgbox{
            margin-top:160px;
            section{
                height:100px;
                width:100px;
                margin:20px auto;
                img{
                    height:100%;
                    width:100%;
                    margin:0 auto;
                }
            }
             p{
                font-size:20px;  
                text-align: center;
                margin:40px 0;                
            }
        }
        .buttonbox{
            width:100%;
            margin:40px 0;
            text-align: center;
            button{
                width:200px;
                height:40px;
                background:red;
                border:1px solid red;
                color:#fff;
                font-size:18px;
            }
        }
      
    }
</style>
