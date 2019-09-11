export interface State {
    deals: Deal[],
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
        id: number,
        urlPrefix: string,
        images: any[]
        priceText: string,
        totalBought: number,
        totalRemaining: number,
        price: number,
        depositPrice: any,
        pricePerPerson: any,
        headline: string,
        display: {
          discountAmount: boolean,
          quantity: boolean,
          quantityRemaining: boolean,
          endDate: boolean,
          discount: boolean,
          bought: boolean,
          previousDeal: boolean,
          deliveryAddress: boolean,
          business: boolean,
          timer: boolean,
          flashDeal: boolean,
          priceText: boolean,
          lastChance: boolean,
          containsProductImages: boolean
        },
        priceIndicative: boolean,
        discount: number,
        discountPercentage: number,
        originalPrice: number,
        closingDate: number,
        expiryDate: number,
        flashDealDate: number,
        currency: string,
        soldText: string,
        title: string,
        business: {},
        urlPath: string,
        category: {
          id: number,
          name: string,
          shortName: string,
          position: number,
          canonicalPathType: string,
          displayInFe: any,
          locations: any[]
    }
  }

export interface Category {
   
}