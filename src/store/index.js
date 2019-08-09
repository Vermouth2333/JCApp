import Vue from "vue";
import Vuex from "vuex";

import list from "./list"


Vue.use(Vuex);


const state={}
const actions={}
const mutations={}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules:{
        list
    }
})