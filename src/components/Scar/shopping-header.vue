<template>
    <div>
        <div class="topheader">
            <div class="headertitlebox">
            <span><i class="iconfont"></i></span>
            <h3 class="headertitle">购物车</h3>
            <span><i class="iconfont"></i></span>
            </div>
            <ul class="servicePolicy">
                <!-- <li v-for="service in servicePolicy" :key="service"><i class="iconfont">&#xe6da;</i>{{service}}</li>    -->
                <li><i class="iconfont">&#xe646;</i>{{servicePolicy[0]}}</li>
                <li><i class="iconfont">&#xe607;</i>{{servicePolicy[1]}}</li>
                <li><i class="iconfont">&#xf008d;</i>{{servicePolicy[2]}}</li>
            </ul>    
        </div>
        
    </div>
</template>



<script>
export default {
    data () {
    return {
      servicePolicy: ['30天无忧退货', '48小时快速退款', '满88元免邮费'],
      totalPrice: 0, // 商品总价格
      isSelectedAll: true, // 是否全选
      selectedNum: this.$store.getters.cartGoodsNumber, // 选中个数
      isShowEditor: false, // 是否显示编辑面板
      editCheckedGoods: {} // 编辑状态选中的商品
    }
  },
}
</script>



<style lang="scss">
    .topheader{
        background:#fff;
        width:100%;
        position: fixed;
        top:0;
        z-index:10;
    }
    .topheader .headertitle{
        // position: fixed;
        top:0;
        font-size:16px;
        display: flex;
        height:40px;
        background:#fff;
        width:100%;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
    .servicePolicy{
        // position: fixed;
        background:#ccc;
        height:30px;
        padding:0 12px;
        // top:40px;
        width:100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        align-items: center;
        li{
            font-size:12px;
            .iconfont{
                font-size:10px;
            }
        }
    }
</style>
