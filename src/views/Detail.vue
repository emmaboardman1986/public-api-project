<template>
  <div class="detail">
    <DetailTitleText class="detail__title">Deal Title</DetailTitleText>
    <DetailInformationCard class="detail__informationcard">
      <img src="https://static.wowcher.co.uk/images/deal/10692934/456982.jpg" />
    </DetailInformationCard>
    <div class="detail__dealinformation">
      <div class="detail__dealinformation__price">
        <span class="detail__dealinformation__price--original">£51.75</span>
        <div class="detail__dealinformation__price--now">£25</div>
      </div>
      <p>Description</p>
      <div class="detail__small-information-card">
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
      <div class="detail__purchase">
        <div class="detail__purchase__img">
          <img src="@/assets/explosion.svg" />
        </div>
        <DetailCTAButton text="Purchase Deal From WowCher" class="detail__purchase__btn"></DetailCTAButton>
      </div>
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
}

.detail__title {
  align-self: flex-start;
  padding: 0 5%;
}

.detail__informationcard {
  width: 90%;
  /deep/ .informationcard__innerbox {
    padding: 0;
  }
}

img {
  width: 100%;
  border: 1px solid $primaryDark;
}

.detail__dealinformation {
  width: 90%;
}
.detail__dealinformation__price {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 3%;
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

.detail__small-information-card {
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
}

.detail__purchase {
  display: grid;
  text-align: center;
  padding: 5% 0;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(3, 25%);

  .detail__purchase__img {
    grid-column: 1/2;
    grid-row: 1/4;
    img {
      border: 0;
      width: 50%;
    }
  }
  .detail__purchase__btn {
    grid-column: 1/2;
    grid-row: 2/3;
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
    }
  }
}
</style>
