<template>
  <div class="detail">
    <DetailTitleText class="detail__title">{{ currentDeal.headline }}</DetailTitleText>
    <div v-if="isCurrentDealLoading">Loading...</div>
    <div v-else class="detail__desktop-wrapper--info">
    <DetailInformationCard class="detail__informationcard">
      <img :src="currentDeal.images[0].imageUrl + '.jpg'" alt="image representing deal" />
    </DetailInformationCard>
    <div class="detail__dealinformation">
      <div class="detail__dealinformation__price">
        <span class="detail__dealinformation__price--original">£{{ currentDeal.originalPrice}}</span>
        <div class="detail__dealinformation__price--now">£{{ currentDeal.price }}</div>
      </div>
      <div class="detail__dealinformation__description"><p>{{ currentDeal.title}}</p></div>
      <div class="detail__dealinformation__small-information-card">
        <DetailSmallInformationCard>
          <p>{{ currentDeal.discountPercentage }}%</p>
          <p class="detail__small-information-card--infotext">discount</p>
        </DetailSmallInformationCard>
        <DetailSmallInformationCard>
          <p>{{ currentDeal.totalBought }}</p>
          <p class="detail__small-information-card--infotext">tickets sold</p>
        </DetailSmallInformationCard>
        <DetailSmallInformationCard>
          <p>{{ currentDeal.totalRemaining}}</p>
          <p class="detail__small-information-card--infotext">tickets left</p>
        </DetailSmallInformationCard>
      </div>
      <div class="detail__dealinformation__purchase">
        <div class="detail__dealinformation__purchase__img">
          <img src="@/assets/explosion.svg" />
        </div>
        <DetailCTAButton text="Purchase Deal From WowCher" class="detail__dealinformation__purchase__btn" @click.native="handleWowCherClick(currentDeal.urlPath)"></DetailCTAButton>
      </div>
    </div>
    </div>
    <div class="detail__desktop-wrapper--related">
      <div class="detail__related">
        <DetailTitleText v-titleSizeDirective="'0.8em'" class="detail__title">Related Deals</DetailTitleText>
        <p>Other deals from the same category</p>

        <div class="detail__related__dealcards">
          <DetailDealCard v-for="deal in relatedDeals" :key="deal.id" :dealinfo="deal"/>
        </div>
      </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import DetailTitleText from "@/components/UI/TitleText.vue";
import DetailInformationCard from "@/components/UI/InformationCard.vue";
import DetailSmallInformationCard from "@/components/UI/SmallInformationCard.vue";
import DetailCTAButton from "@/components/UI/CTAButton.vue";
import DetailDealCard from "@/components/UI/DealCard.vue";
import titleSizeDirective from "@/directives/titlesize-directive";
import { Getter, Mutation, Action } from 'vuex-class'
import { Deal } from '@/store/types'

@Component({
  components: {
    DetailTitleText,
    DetailInformationCard,
    DetailSmallInformationCard,
    DetailCTAButton,
    DetailDealCard
  },
  directives: {
    titleSizeDirective
  }
})
export default class Detail extends Vue {
   @Getter currentDeal: Deal;
   @Getter isCurrentDealLoading: boolean
   @Getter currentDealCategory: string
   @Getter relatedDeals: Deal[]
   @Getter dealsPerCurrentCategory: []

   @Action('getCurrentDeal') getCurrentDeal: any;
   @Action('fetchCurrentDealCategory') fetchCurrentDealCategory: any;
   @Action('fetchDealsByCategory') fetchDealsByCategory: any;
   @Action('loadAllAvailableDeals') loadAllAvailableDeals: any;
  
  created(){
    this.loadAllAvailableDeals();
    this.getCurrentDeal(this.$route.params.id);
    this.fetchCurrentDealCategory(this.$route.params.id);
  }

  mounted() {
    this.fetchDealsByCategory(this.currentDealCategory);
  }
  
  handleWowCherClick(urlPath: string){
    let url = "http://wowcher.co.uk" + urlPath;
    window.open(url);
  }
}


</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media screen and (min-width: $breakpoint-md){
  margin-top: $headerHeight;
  }
}

.detail__title {
  align-self: flex-start;
  padding: 0 5%;
}

.detail__desktop-wrapper--info {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: $breakpoint-md){
   flex-direction: row;
   align-items: flex-start;
  }
}

.detail__informationcard {
  width: 90%;
  /deep/ .informationcard__innerbox {
    padding: 0;
  }
  @media screen and (min-width: $breakpoint-md){
   order: 2;
  }
}

img {
  width: 100%;
  border: 1px solid $primaryDark;
}

.detail__dealinformation {
  width: 90%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: $breakpoint-md){
   order: 1;
   margin-right: 5%;
   width: 70%;
  }
}

.detail__dealinformation__description {
  text-align: justify;
   @media screen and (min-width: $breakpoint-md){
   order: 1;
  }

}
.detail__dealinformation__price {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 3%;

   @media screen and (min-width: $breakpoint-md){
   order: 2;
   margin-bottom: 10%;
  }

}

.detail__dealinformation__price--original {
  text-decoration: line-through;
}

.detail__dealinformation__price--now {
  font-family: $titleFont;
  font-size: 2em;
  font-weight: 700;
  margin-left: 5%;
}

.detail__dealinformation__small-information-card {
  display: flex;
  justify-content: space-between;

  div {
    width: 30%;
    text-align: center;
    padding: 2% 0;
  }

  p {
    font-family: $titleFont;
    font-weight: 700;
    font-size: 2em;
    margin: 0;
  }

  .detail__small-information-card--infotext {
    font-size: 0.8em;
    font-weight: 400;
  }
 @media screen and (min-width: $breakpoint-md){
   order: 3;
  }
  
}

.detail__dealinformation__purchase {
  display: grid;
  text-align: center;
  padding: 5% 0;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(3, 25%);

  @media screen and (min-width: $breakpoint-md){
   order: 4;
  }

  .detail__dealinformation__purchase__img {
    grid-column: 1/2;
    grid-row: 1/4;
    img {
      border: 0;
      width: 50%;
    }
  }
  .detail__dealinformation__purchase__btn {
    grid-column: 1/2;
    grid-row: 2/3;
  }
}

.detail__desktop-wrapper--related {
  @media screen and (min-width: $breakpoint-md){
   width: 90%;
  }
}

.detail__related {
  p {
    margin-left: 5%;
  }
}

.detail__related__dealcards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 5%;

  @media screen and (min-width: $breakpoint-sm){
      justify-content: flex-start;
  }

  @media screen and (max-width: 420px){
  font-size: 1em;
  }
}
</style>
