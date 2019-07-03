import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { State, Deal } from './types'
import axios from 'axios'

export const state: State = {
    // deals 
    deals: [],
    allAvailableLoading: true,
    randomDeal: {},
    randomLoading: true,
    sortAsc: true,
    topTenDeals: [],
    topTenLoading: true,
    currentDeal: {},
    isCurrentDealLoading: true,
    // categories
    categories: [],
    currentDealCategory: '',
    currentDealCategoryLoading: true,
    dealsPerCurrentCategory: []
}

export const getters: GetterTree<State, any> = {
    // deals
    allAvailableDeals: state => state.deals,
    isDealsLoading: state => state.loading,
    topTenDeals: state => state.topTenDeals,
    isTopTenLoading: state => state.topTenLoading,
    randomDeal: state => state.randomDeal,
    isRandomDealLoading: state => state.randomLoading,
    currentDeal: state => state.currentDeal,
    isCurrentDealLoading: state => state.isCurrentDealLoading,
    // categories 
    allCategories: state => state.categories,
    currentDealCategory: state => state.currentDealCategory,
    relatedDeals: state => state.dealsPerCurrentCategory.slice(0, 3),
    dealsPerCurrentCategory: state => state.dealsPerCurrentCategory
}

export const mutations: MutationTree<State> = {
    // deals 
    updateDeals(state, deals) {
        state.deals = deals
    },
    changeLoadingState(state, loading) {
        state.loading = loading
    },
    updateRandomDeal(state, randomDeal) {
        state.randomDeal = randomDeal
    },
    changeRandomLoadingState(state, loading) {
        state.randomLoading = loading
    },
    changeSortingOrder(state) {
        state.sortAsc = !state.sortAsc
    },
    updateTopTen(state, deals) {
        state.topTenDeals = deals
    },
    changeTopTenLoadingState(state, loading) {
        state.topTenLoading = loading
    },
    updateCurrentDeal(state, deal){
        state.currentDeal = deal
    },
    changeCurrentDealLoadingState(state, loading){
        state.isCurrentDealLoading = loading
    },
    // categories 
    updateCategories(state, categories) {
        state.categories = categories
    },
    changeCategoryLoadingState(state, loading) {
        state.loading = loading
    },
    updateCurrentDealCategory(state, category){
        state.currentDealCategory = category
    },
    changeCurrentDealCategoryLoadingState(state, loading){
        state.currentDealCategoryLoading = loading
    },
    updateDealsPerCurrentCategory(state, deals){
        state.dealsPerCurrentCategory = deals
    }

}

export const actions: ActionTree<State, any> = {
    // deals 
    loadAllAvailableDeals({
        commit
    }) {
        axios
            .get('https://public-api.livingsocial.co.uk/v1/deal/london')
            .then(response => {
                console.log(response);
                commit('updateDeals', response.data.deals)
                commit('changeLoadingState', false)
            })
    },
    loadTopTenDeals({
        commit
    }) {
        axios
            .get('https://public-api.livingsocial.co.uk/v1/deal/london')
            .then(response => {
                console.log(response);
                commit('updateTopTen', response.data.deals.slice(0, 10))
                commit('changeTopTenLoadingState', false)
            })

    },
    getRandomDeal({ commit
    }) {
        let randomNum: number = Math.floor(
            Math.random() * state.deals.length
        );
        commit('updateRandomDeal', state.deals[randomNum])
        commit('changeRandomLoadingState', false)
    },
    sortDeals({ commit
    }) {
        state.sortAsc = !state.sortAsc
        if (state.sortAsc) {
            let updatedState = state.topTenDeals.sort((a, b) => (a.price > b.price ? 1 : -1));
            commit('updateTopTen', updatedState)
        } else {
            let updatedState = state.topTenDeals.sort((a, b) => (a.price < b.price ? 1 : -1));
            commit('updateTopTen', updatedState)
        }
    },
    getCurrentDeal({ commit }, dealId
        ) {
            let currentDeal = state.deals.find(deal => deal.id == dealId);
            commit('updateCurrentDeal', currentDeal)
            commit('changeCurrentDealLoadingState', false)
    },
    // categories
    fetchCurrentDealCategory({
        commit
    }, dealId) {
        axios
            .get('https://public-api.livingsocial.co.uk/v1/deal/' + dealId)
            .then(response => {
                console.log("full deal data: ", response);
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
            console.log("deals by category:", response.data.deals)
            commit('updateDealsPerCurrentCategory', response.data.deals)
        })
    }
}