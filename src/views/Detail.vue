<template>
  <div class="detail">
    <DetailTitleText class="detail__title">Deal Title</DetailTitleText>
    <div class="detail__desktop-wrapper--info">
    <DetailInformationCard class="detail__informationcard">
      <img src="https://static.wowcher.co.uk/images/deal/10692934/456982.jpg" />
    </DetailInformationCard>
    <div class="detail__dealinformation">
      <div class="detail__dealinformation__price">
        <span class="detail__dealinformation__price--original">£51.75</span>
        <div class="detail__dealinformation__price--now">£25</div>
      </div>
      <div class="detail__dealinformation__description"><p>Description</p></div>
      <div class="detail__dealinformation__small-information-card">
        <DetailSmallInformationCard>
          <p>57%</p>
          <p class="detail__small-information-card--infotext">discount</p>
        </DetailSmallInformationCard>
        <DetailSmallInformationCard>
          <p>57%</p>
          <p class="detail__small-information-card--infotext">discount</p>
        </DetailSmallInformationCard>
        <DetailSmallInformationCard>
          <p>57%</p>
          <p class="detail__small-information-card--infotext">discount</p>
        </DetailSmallInformationCard>
      </div>
      <div class="detail__dealinformation__purchase">
        <div class="detail__dealinformation__purchase__img">
          <img src="@/assets/explosion.svg" />
        </div>
        <DetailCTAButton text="Purchase Deal From WowCher" class="detail__dealinformation__purchase__btn"></DetailCTAButton>
      </div>
    </div>
    </div>
    <div class="detail__desktop-wrapper--related">
      <div class="detail__related">
        <DetailTitleText v-titleSizeDirective="'0.8em'" class="detail__title">Related Deals</DetailTitleText>
        <p>Other deals from the same category</p>
        <div class="detail__related__dealcards">
          <DetailDealCard />
          <DetailDealCard />
          <DetailDealCard />
        </div>
      </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DetailTitleText from "@/components/UI/TitleText.vue";
import DetailInformationCard from "@/components/UI/InformationCard.vue";
import DetailSmallInformationCard from "@/components/UI/SmallInformationCard.vue";
import DetailCTAButton from "@/components/UI/CTAButton.vue";
import DetailDealCard from "@/components/UI/DealCard.vue";
import titleSizeDirective from "@/directives/titlesize-directive";

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
export default class Detail extends Vue {}
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: $headerHeight;
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

.detail_

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

.detail__related__dealcards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    width: 45%;
    /deep/ p {
      font-size: 1.5em;
 @media screen and (max-width: 420px){
   font-size: 1.35em;
  }

    }
  @media screen and (min-width: $breakpoint-md){
   width: 30%;
  }

  
  }
}
</style>
