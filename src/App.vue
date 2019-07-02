<template>
  <div id="app">
    <app-header />
    <app-page-background>
      <router-view
        :isDataLoaded="this.isDealDataLoaded"
        :topTenDeals="this.topTenDeals"
        @handlePriceSort="handlePriceSort"
        @handleRandomDeal="getRandomDeal"
        @getCurrentDeal="getCurrentDeal"
        :currentDeal="this.currentDeal"
        :isCurrentDealLoaded="this.isCurrentDealLoaded"
        :relatedDeals="this.relatedDeals"
        :allAvailableCategories="this.allAvailableCategories"
        :randomDeal="this.randomDeal"
      ></router-view>
    </app-page-background>
    <app-footer title="I AM A FOOTER" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import AppHeader from "@/components/Header.vue";
import AppPageBackground from "@/components/UI/PageBackground.vue";
import AppFooter from "@/components/Footer.vue";
import titleSizeDirective from "@/directives/titlesize-directive";
import axios from "axios";

@Component({
  components: {
    AppHeader,
    AppPageBackground,
    AppFooter
  },
  directives: {
    titleSizeDirective
  }
})
export default class Home extends Vue {
  topTenDeals: any[] = [];
  isDealDataLoaded: boolean = false;
  sortPriceAsc: boolean = false;
  allAvailableDeals: any[] = [];
  randomDeal: {} = {};
  currentDeal: {} = {};
  currentDealCategory: string = "";
  allAvailableCategories: any[] = [];
  relatedDeals: any[] = [];
  isCurrentDealLoaded: boolean = false;
  tempAvailableDeals: any[] = [
    {
      id: 10996854,
      urlPrefix: "/kensington-spa-day-treatments-35",
      images: [
        {
          id: 448184,
          position: 0,
          caption: "417179",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448184",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448184-iphone"
        },
        {
          id: 448183,
          position: 1,
          caption: "417174",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448183",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448183-iphone"
        },
        {
          id: 448195,
          position: 2,
          caption: "417172",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448195",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448195-iphone"
        },
        {
          id: 448186,
          position: 3,
          caption: "417176",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448186",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448186-iphone"
        },
        {
          id: 448185,
          position: 4,
          caption: "417178",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448185",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448185-iphone"
        },
        {
          id: 448187,
          position: 5,
          caption: "417180",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448187",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448187-iphone"
        },
        {
          id: 448189,
          position: 6,
          caption: "417173",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448189",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448189-iphone"
        },
        {
          id: 448191,
          position: 7,
          caption: "417175",
          alt: "Kensington Imagine Spa",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/10996854/448191",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/10996854/448191-iphone"
        }
      ],
      priceText: "from",
      totalBought: 555,
      totalRemaining: 445,
      price: 35,
      depositPrice: null,
      pricePerPerson: false,
      headline: "Luxury Kensington Spa Day, 2 Treatments, & 6hr Spa Access",
      display: {
        discountAmount: false,
        quantity: false,
        quantityRemaining: false,
        endDate: false,
        discount: true,
        bought: true,
        previousDeal: true,
        deliveryAddress: true,
        business: true,
        timer: true,
        flashDeal: true,
        priceText: true,
        lastChance: false,
        containsProductImages: false
      },
      priceIndicative: true,
      discount: 52.5,
      discountPercentage: 60,
      originalPrice: 87.5,
      closingDate: 1563922800000,
      expiryDate: 1574553600000,
      flashDealDate: 1562108399000,
      currency: "gbp",
      soldText: "Bought",
      title:
        "£35 instead of £87.50 for a six-hour spa retreat with spa access, choice of two treatments and £10 voucher, or £69 for two people at Imagine Spa, Kensington - save up to 60%",
      business: {
        image: {
          id: 3964269,
          position: null,
          caption: "imaginespa",
          alt: "imaginespa",
          link: null,
          extension: "png",
          height: null,
          width: null,
          mobileImage: null,
          status: "live",
          imageUrl:
            "https://static.wowcher.co.uk/images/business/16513046/3964269",
          mobileImageUrl: "null"
        }
      },
      urlPath: "/deal/london/10996854/kensington-spa-day-treatments-35"
    },
    {
      id: 11786040,
      urlPrefix: "/river-thames-boat-tour",
      images: [
        {
          id: 485985,
          position: 0,
          caption: "8_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485985",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485985-iphone",
          imageOverlays: [
            {
              brand: "wowcher",
              position: "RIGHT",
              url:
                "https://static.wowcher.co.uk/binaries/SUMMER-SCORCHERS-LOCAL-TRAVEL.png"
            }
          ]
        },
        {
          id: 485987,
          position: 1,
          caption: "6_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485987",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485987-iphone",
          imageOverlays: [
            {
              brand: "living-social",
              position: "RIGHT",
              url:
                "https://static.livingsocial.co.uk/binaries/SUMMER-SCORCHERS-LOCAL-TRAVEL.png"
            }
          ]
        },
        {
          id: 485986,
          position: 2,
          caption: "7_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485986",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485986-iphone"
        },
        {
          id: 485989,
          position: 3,
          caption: "1_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485989",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485989-iphone"
        },
        {
          id: 485990,
          position: 4,
          caption: "2_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485990",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485990-iphone"
        },
        {
          id: 485982,
          position: 5,
          caption: "10_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485982",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485982-iphone"
        },
        {
          id: 485992,
          position: 6,
          caption: "4_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485992",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485992-iphone"
        },
        {
          id: 485988,
          position: 7,
          caption: "5_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485988",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485988-iphone"
        },
        {
          id: 485980,
          position: 8,
          caption: "ly04_4-8-17_boat",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485980",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485980-iphone"
        },
        {
          id: 485981,
          position: 9,
          caption: "12_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485981",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485981-iphone"
        },
        {
          id: 485984,
          position: 10,
          caption: "11_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485984",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485984-iphone"
        },
        {
          id: 485991,
          position: 11,
          caption: "3_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485991",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485991-iphone"
        },
        {
          id: 485983,
          position: 12,
          caption: "9_TRS",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485983",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485983-iphone"
        },
        {
          id: 485993,
          position: 13,
          caption: "ly09_4-8-17_thomas_doggett",
          alt: "River Thames Boat Tour",
          link: null,
          extension: "jpg",
          height: null,
          width: null,
          mobileImage: true,
          status: "live",
          imageUrl: "https://static.wowcher.co.uk/images/deal/11786040/485993",
          mobileImageUrl:
            "https://static.wowcher.co.uk/images/deal/11786040/485993-iphone"
        }
      ],
      priceText: "from",
      totalBought: 247,
      totalRemaining: 3753,
      price: 6.25,
      depositPrice: null,
      pricePerPerson: false,
      headline: "Westminster to Greenwich Thames River Boat Tour ",
      display: {
        discountAmount: false,
        quantity: false,
        quantityRemaining: false,
        endDate: false,
        discount: true,
        bought: true,
        previousDeal: true,
        deliveryAddress: true,
        business: true,
        timer: true,
        flashDeal: true,
        priceText: true,
        lastChance: false,
        containsProductImages: false
      },
      priceIndicative: true,
      discount: 5,
      discountPercentage: 44,
      originalPrice: 11.25,
      closingDate: 1566342000000,
      expiryDate: 1567206000000,
      flashDealDate: 1562108399000,
      currency: "gbp",
      soldText: "Bought",
      title:
        "£6.25 instead of £11.25 for a child’s return ticket for a Westminster-Greenwich Thames boat tour, or £9.50 for an adult return ticket from Thames River Services, Embankment - save up to 44%",
      business: {
        image: {
          id: 4017824,
          position: null,
          caption: "logo-trs",
          alt: "logo-trs",
          link: null,
          extension: "png",
          height: null,
          width: null,
          mobileImage: null,
          status: "live",
          imageUrl:
            "https://static.wowcher.co.uk/images/business/16531404/4017824",
          mobileImageUrl: "null"
        }
      },
      urlPath: "/deal/london/11786040/river-thames-boat-tour"
    }
  ];

  created() {
    this.fetchAllCategories();
     axios
        .get('https://public-api.livingsocial.co.uk/v1/deal/london')
        .then(response => {
            console.log(response);
            this.allAvailableDeals = response.data.deals;
            this.topTenDeals = response.data.deals.slice(0,10);
            this.isDealDataLoaded = true
        })
  }

  getRandomDeal() {
    let randomNum: Number = Math.floor(
      Math.random() * this.allAvailableDeals.length
    );
    this.randomDeal = this.allAvailableDeals[
      Math.floor(Math.random() * this.allAvailableDeals.length)
    ];
  }

  getCurrentDeal(dealId: string) {
    this.isCurrentDealLoaded = false;
    this.currentDeal = this.tempAvailableDeals.find(deal => deal.id == dealId);
    this.fetchCurrentDealCategory(dealId);
    this.isCurrentDealLoaded = true;
  }

  fetchCurrentDealCategory(dealId: string) {
    let url = "https://public-api.livingsocial.co.uk/v1/deal/" + dealId;
    axios.get(url).then(response => {
      console.log(response);
      this.currentDealCategory = response.data.category.shortName;
      this.fetchRelatedDeals(response.data.category.shortName);
    });
  }

  fetchAllCategories() {
    axios
      .get("https://public-api.livingsocial.co.uk/v1/category")
      .then(response => {
        this.allAvailableCategories = response.data.reduce(function(
          categoriesArray: any[],
          catObj: {}
        ) {
          let uniqueCategoriesArray: any[] = [];
          if (catObj["dealCategories"].length == 1) {
              let newObj = {
                displayName: catObj["dealCategories"][0].name,
                urlName: catObj["dealCategories"][0].shortName
              }
              categoriesArray.push(newObj);
            }
          return categoriesArray;
        },
        []);
      });
  }

  fetchRelatedDeals(category: string) {
    let url =
      "https://public-api.livingsocial.co.uk/v1/deal/london/" + category;
    axios.get(url).then(response => {
      console.log(response);
      this.relatedDeals = response.data.deals.slice(0, 3);
    });
  }

  handlePriceSort() {
    this.sortPriceAsc = !this.sortPriceAsc;
    if (this.sortPriceAsc) {
      this.topTenDeals.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else {
      this.topTenDeals.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primaryDark;
  font-size: 16px;
}
</style>
