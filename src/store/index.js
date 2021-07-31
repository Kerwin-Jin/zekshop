import Vue from "vue"
import Vuex from "vuex"
import user from "./user"
import home from "./home"

Vue.use(Vuex)

const state = {
    
}


const mutations = {
    
}


const actions = {
    
}


const getters = {

}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        user,
        home
    }
})