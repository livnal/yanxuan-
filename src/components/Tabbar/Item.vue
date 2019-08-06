<template>
    <div :class="['item',(flag?'active':'')]" @click="clickItem">
        <span><slot name="normalImg"></slot></span>
        <span class="title">{{txt}}</span>
    </div>
</template>

<style lang="scss" scoped>
    .item{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:center;
        .title{
            font-size: 12px;
        }
        img{
            width:16px;
            height:16px;
        }
    }
    .active{
        color:#b4282d;
    }        

</style>

<script>
export default {
    props:["txt", "mark", "sel", "changeSelected"],  //接收父组件差U内地来的属性txt
    computed:{
        flag(){  //计算属性  依赖里面的数据变化  只有mark或者sel发生变化，flag就会重新计算
            if(this.mark === this.sel){
                return true;
            }
            return false
        }
    },
    methods:{
        clickItem(){
            //本质上需要Tabbar改变selected值
            // this.changeSelected(this.mark)
            this.$router.push("/"+this.mark)
        }
    }
}
</script>

