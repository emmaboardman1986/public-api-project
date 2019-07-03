<template>
  <div v-if="isdealsPerCurrentCategoryLoading">Loading...</div>
  <div v-else class="category">
    <categoryTitleText class="category__title">{{ dealsPerCurrentCategory.name }}</categoryTitleText>

    <div class="category__desktop-wrapper--related">
          <categoryDealCard v-for="deal in dealsPerCurrentCategory" :key="deal.id" :dealinfo="deal"/>
        </div>
      </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import categoryTitleText from "@/components/UI/TitleText.vue";
import categoryInformationCard from "@/components/UI/InformationCard.vue";
import categorySmallInformationCard from "@/components/UI/SmallInformationCard.vue";
import categoryCTAButton from "@/components/UI/CTAButton.vue";
import categoryDealCard from "@/components/UI/DealCard.vue";
import titleSizeDirective from "@/directives/titlesize-directive";
import { Getter, Mutation, Action } from 'vuex-class'
import { Deal } from '@/store/types'

@Component({
  components: {
    categoryTitleText,
    categoryInformationCard,
    categorySmallInformationCard,
    categoryCTAButton,
    categoryDealCard
  },
  directives: {
    titleSizeDirective
  }
})
export default class category extends Vue {
   @Getter isdealsPerCurrentCategoryLoading: boolean
   @Getter dealsPerCurrentCategory: []

   @Action('fetchDealsByCategory') fetchDealsByCategory: any;
 
  
  created(){
    this.fetchDealsByCategory(this.$route.params.id)
  }

  handleWowCherClick(urlPath: string){
    let url = "http://wowcher.co.uk" + urlPath;
    window.open(url);
  }
}


</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media screen and (min-width: $breakpoint-md){
  margin-top: $headerHeight;
  }
}

.category__title {
  align-self: flex-start;
  padding: 0 5%;
}

.category__desktop-wrapper--info {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: $breakpoint-md){
   flex-direction: row;
   align-items: flex-start;
  }
}

.category__informationcard {
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

.category__dealinformation {
  width: 90%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: $breakpoint-md){
   order: 1;
   margin-right: 5%;
   width: 70%;
  }
}

.category__dealinformation__description {
  text-align: justify;
   @media screen and (min-width: $breakpoint-md){
   order: 1;
  }

}
.category__dealinformation__price {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 3%;

   @media screen and (min-width: $breakpoint-md){
   order: 2;
   margin-bottom: 10%;
  }

}

.category__dealinformation__price--original {
  text-decoration: line-through;
}

.category__dealinformation__price--now {
  font-family: $titleFont;
  font-size: 2em;
  font-weight: 700;
  margin-left: 5%;
}

.category__dealinformation__small-information-card {
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

  .category__small-information-card--infotext {
    font-size: 0.8em;
    font-weight: 400;
  }
 @media screen and (min-width: $breakpoint-md){
   order: 3;
  }
  
}

.category__dealinformation__purchase {
  display: grid;
  text-align: center;
  padding: 5% 0;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(3, 25%);

  @media screen and (min-width: $breakpoint-md){
   order: 4;
  }

  .category__dealinformation__purchase__img {
    grid-column: 1/2;
    grid-row: 1/4;
    img {
      border: 0;
      width: 50%;
    }
  }
  .category__dealinformation__purchase__btn {
    grid-column: 1/2;
    grid-row: 2/3;
  }
}

.category__desktop-wrapper--related {
  @media screen and (min-width: $breakpoint-md){
   width: 90%;
  }
}

.category__related {
  p {
    margin-left: 5%;
  }
}

.category__related__dealcards {
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
