import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shopping from "./shopping"

export default new Vuex.Store({
    modules: {
        shopping
    }
})