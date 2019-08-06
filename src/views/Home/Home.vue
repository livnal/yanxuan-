<template>
    <div class="home">
        <Topbar></Topbar>
        <Tabbar></Tabbar>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Topbar from "./Topbar"
import Tabbar from "@/components/Tabbar"
export default {
    components:{
        Tabbar,Topbar
    }
}
</script>

