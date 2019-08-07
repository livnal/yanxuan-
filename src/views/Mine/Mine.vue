<template>
    <div class="mine">
        <Headertop></Headertop>
        <MineLogin></MineLogin>
        <Tabbar></Tabbar>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Tabbar from "@/components/Tabbar"
import Headertop from "@/components/headertop"
import MineLogin from "./MineLogin"
export default {
    components:{
        Tabbar,
        Headertop,
        MineLogin
    }
}
</script>

