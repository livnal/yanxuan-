import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入mine.scss文件
import "./stylesheets/main.scss"
//引入rem.js文件
import "./modules/rem"
//引入iconfont文件
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/demo.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
