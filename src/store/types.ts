export interface State {
    deals: Deal[],
    loading: boolean,
    randomDeal: Deal,
    randomLoading: boolean,
    sortAsc: boolean,
    allAvailableLoading: boolean,
    topTenDeals: Deal[],
    topTenLoading: boolean,
    currentDeal: Deal,
    isCurrentDealLoading: boolean,
    categories: any,
    isCategoriesLoading: boolean,
    currentDealCategory: string,
    currentDealCategoryLoading: boolean,
    dealsPerCurrentCategory: Deal[],
    isDealsPerCurrentCategoryLoading: boolean,
    categorySuccessStatus: boolean
}

export interface Deal {
   
}

export interface Category {
   
}