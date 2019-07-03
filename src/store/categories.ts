import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { State, Category, Deal } from './types'
import axios from 'axios'

export const state: State = {
    categories: any,
    currentDealCategory: string,
    currentDealCategoryLoading: boolean,
}

export const getters: GetterTree<State, any> = {
    allCategories: state => state.categories,
    currentDealCategory: state => state.currentDealCategory,
    // relatedDeals: state => state.dealsPerCategory.slice(0, 3)
}

export const mutations: MutationTree<State> = {
    updateCategories(state, categories) {
        state.categories = categories
    },
    changeLoadingState(state, loading) {
        state.loading = loading
    },
    updateCurrentDealCategory(state, category){
        state.currentDealCategory = category
    },
    changeCurrentDealCategoryLoadingState(state, loading){
        state.currentDealCategoryLoading = loading
    }
}

export const actions: ActionTree<State, any> = {
    fetchCurrentDealCategory({
        commit
    }, dealId) {
        axios
            .get('https://public-api.livingsocial.co.uk/v1/deal' + dealId)
            .then(response => {
                console.log(response);
                commit('updateCurrentDealCategory', response.data.category.shortName)
                commit('changeCurrentDealCategoryLoadingState', false)
            })
    },
    fetchDealsByCategory({
        commit
    }, category){
        axios
        .get('https://public-api.livingsocial.co.uk/v1/deal/london/' + category)
        .then( response => {
            commit('changeDealsPerCurrentCategory', response.data.deals)
        })

    }
}
