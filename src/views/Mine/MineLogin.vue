<template>
    <div class="logincontent">
        <div class="logintop">
            <div class="imgbox">
                <img src="../../assets/images/login.png" alt="">
            </div>
            <div class="buttonbox">
                <button class="phonebtn"><i class="iconfont">&#xe71c;</i>手机号快捷登录</button>
                <button @click="toEmalLgoin" class="emailbtn"><i class="iconfont">&#xe626;</i>邮箱账号登录</button>
            </div>
        </div>
        <div class="logindown">
            <div><i class="iconfont">&#xe65d;</i><span>微信</span></div>
            <div><i class="iconfont">&#xe66d;</i><span>QQ</span></div>
            <div><i class="iconfont">&#xe604;</i><span>微博</span></div>
        </div>
    </div>
</template>



<script>
export default {

    methods: {
        toEmalLgoin(){
           this.$router.push("/emaillogin") 
        }
    },
}
</script>


<style lang="scss" scoped>
    .logincontent{
        width:100%;
        .logintop{
            position: absolute;
            top:20%;
            width:100%;
            .imgbox{
                width:40%;
                margin:0 auto;
                img{
                    width:100%;
                }
            }
            .buttonbox{
                margin:18% auto 0;
                width:100%;
                text-align: center;
                button{
                    width:80%;
                    margin:10px 0;
                    height:46px;
                    font-size:16px;
                    .iconfont{
                        margin-right:10px;
                        font-size:22px;
                    }
                }
                .phonebtn{
                    background:red;
                    color:#fff;
                    border:none;
                }
                .emailbtn{
                    background:#fff;
                    border:1px solid red;
                    color:red;
                }
            }
        }
        .logindown{
            width:100%;
            position:absolute;
            bottom:20%;
            display: flex;
            justify-content: space-around;
            .iconfont{
                margin-right:10px;
                font-size:22px;
            }
        }
    }
</style>
