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
    currentDealCategory: string,
    currentDealCategoryLoading: boolean,
    dealsPerCurrentCategory: Deal[]
}

export interface Deal {
   
}

export interface Category {
   
}