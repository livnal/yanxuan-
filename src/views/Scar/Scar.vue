<template>
    <div>
       <ShoppingHeader></ShoppingHeader>
       <!-- 判断购物车是否有商品 -->
        <!-- <Empty ></Empty> -->
       <Content >v-if判断购物车内是否有商品  v-if:Empty</Content>
       <Tabber></Tabber>
    </div>
</template>



<script>
// 引入购物车头部
import ShoppingHeader from '@/components/Scar/shopping-header'

// 空购物车未登录
import Empty from './empty'

// 购物车列表
import Content from './content'

// 底部一级路由
import Tabber from '@/components/Tabbar'

export default {
   components:{
       ShoppingHeader,
       Empty,
       Content,
       Tabber
   }
  
}
</script>



<style lang="scss">
  
</style>
