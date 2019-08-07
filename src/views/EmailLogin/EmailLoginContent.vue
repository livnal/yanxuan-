<template>
    <div class="content">
        <div class="imgbox">
            <img src="@/assets/images/login.png" alt="">
        </div>
        <div class="logincontent">
            <form action="">
                <ul class="inputbox">
                    <li><input type="text" placeholder="邮箱账号"></li>
                    <li><input type="password" placeholder="密码"></li>
                </ul>
                <ul class="txtbox">
                    <li>注册账号</li>
                    <li>忘记密码</li>
                </ul>
                <div class="btn">
                    <button>登录</button>
                </div>
            </form>
            <div class="other">
                <span>其他登录方式<i class="iconfont">&#xe618;</i></span>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .content{
        width:100%;
        .imgbox{
            width:30%;
            margin:10% auto 0;
                img{
                    width:100%;
                }
        }
        .logincontent{
            margin-top:10%;
            width:100%;
            form{
                width:100%;
                .inputbox{
                text-align: center;
                input{
                     width:90%;
                     margin-top:8%;
                     height:30px;
                     border:none;
                     border-bottom:1px solid #ccc;
                }
                }
                .txtbox{
                    display: flex;
                    justify-content: space-between;
                    margin:6% 10% 0;
                }
                .btn{
                    width:100%;
                    text-align: center;
                    margin-top:5%;
                    button{
                    width:80%;
                    margin:10px 0;
                    height:46px;
                    font-size:16px;
                    border:none;
                    background:red;
                    color:#fff;
                    }
                }
            }
            .other{
                width:100%;
                text-align: center;
                margin-top:5%;               
                span{
                    font-size:18px;
                }
            }            
        }
    }
</style>
