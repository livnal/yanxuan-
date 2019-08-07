<template>
    <div class="detailtop">
        <div class="topleft" @click="toHome"><i class="iconfont">&#xe605;</i></div>
        <div class="topcenter" @click="toHome">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="topright">
            <p><i class="iconfont" style="margin-right:10px">&#xe780;</i></p>
            <p @click="toScar"><i class="iconfont">&#xf0179;</i></p>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        toHome(){
           this.$router.push("/home")
        },
        toScar(){
            this.$router.push("/scar")
        }
    },
}
</script>


<style lang="scss" scoped>
    .detailtop{
        padding:0 10px;
        height:40px;
        background:#fff;
        display:flex;
        width:100%;
        justify-content: space-between;
        align-items:center; 
        z-index:10;
        border-bottom:1px solid #ccc;
        .iconfont{
                font-size:26px;
            }        
        .topleft{
            height:40px;
            line-height: 40px;           
        }
        .topcenter{
            height:25px;
            img{
                height:100%;
            }
        }
        .topright{
            display:flex;
        }
    }
</style>
