import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from "./home"
import list from "./list"
import scar from "./scar"
import mine from "./mine"
export default new Router({
  routes: [
    home,list,scar,mine,
    {path:"/",redirect:"/home"},
    {path:"*",redirect:"/notfound"},
    {path:"/notfound",component:()=>import("@/views/Notfound")}
  ]
})
