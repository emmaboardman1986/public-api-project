import Vue from 'vue'
import Vuex from 'vuex'
import { state, getters, mutations, actions } from './deals'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})