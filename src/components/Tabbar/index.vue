<template>
    <div class="tabbar">
        <Item txt="首页" mark="home" :sel="selected" :changeSelected="changeSelected">
            <span class="iconfont" slot="normalImg">&#xe605;</span>
        </Item>
        <Item txt="分类" mark="list" :sel="selected" :changeSelected="changeSelected">
            <span class="iconfont" slot="normalImg">&#xe652;</span>
        </Item>
        <Item txt="购物车" mark="scar" :sel="selected" :changeSelected="changeSelected">
            <span class="iconfont" slot="normalImg">&#xe501;</span>
        </Item>
        <Item txt="我的" mark="mine" :sel="selected" :changeSelected="changeSelected">
            <span class="iconfont" slot="normalImg">&#xe631;</span>
        </Item>
    </div>
</template>

<style lang="scss" scoped>
    .tabbar{
        position:fixed; 
        width:100%;
        bottom:0;
        left:0;
        height:40px;
        display:flex;
        border-top:1px solid #ccc;
        background:#fff;
    }
</style>

<script>
import Item from "./Item"
export default {
    data(){
        return {
            selected:this.$route.name
        }
    },
    methods:{
        changeSelected(val){
            this.selected = val;
        }
    },
    components:{
        Item
    }
}
</script>
