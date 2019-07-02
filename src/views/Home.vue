<template>
  <div class="home">
    <div class="home__header">
      <img src="@/assets/trainer.svg" class="home__header__img" />
      <HomeTitleText
        v-titleSizeDirective="'1.7em'"
        class="home__header__title"
      >London on a ShoeString</HomeTitleText>
      <HomeSubTitleText
        text="Limit your budget, not your experience"
        class="home__header__subtitle"
      />
    </div>
    <div class="home__content">
      <div class="home__content--desktop-wrapper--toprow">
        <HomeInformationCard class="home__content__informationcard">
          <HomeCTABtn text="Suprise me with a deal!" />
          <p>Find deals in London!</p>
          <p>Click the button above to be surprised with a random deal, or keep scrolling to find our 10 latest deals</p>
        </HomeInformationCard>
        <div class="home__content--desktop-wrapper--titles">
          <HomeTitleText
            v-titleSizeDirective="'0.9em'"
            text="⇡ Random Deal"
            class="home__content__subheading--random"
          >
            <span class="home__content__home-title-text--mobile">⇡</span> Random Deal
            <span class="home__content__home-title-text--desktop">⇢</span>
          </HomeTitleText>
          <HomeTitleText
            v-titleSizeDirective="'0.9em'"
            class="home__content__subheading--top10"
          >Top 10 Deals ⇣</HomeTitleText>
        </div>
      </div>
      <div class="home__content__sort">
        <p>Sort by price ▼</p>
      </div>
      <div class="home__content__desktop-wrapper--dealcards">
        <HomeDealCard />
        <HomeDealCard />
        <HomeDealCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeTitleText from "@/components/UI/TitleText.vue";
import HomeSubTitleText from "@/components/UI/SubTitleText.vue";
import HomeInformationCard from "@/components/UI/InformationCard.vue";
import HomeCTABtn from "@/components/UI/CTAButton.vue";
import HomeDealCard from "@/components/UI/DealCard.vue";
import titleSizeDirective from "@/directives/titlesize-directive";

@Component({
  components: {
    HomeTitleText,
    HomeSubTitleText,
    HomeInformationCard,
    HomeCTABtn,
    HomeDealCard
  },
  directives: {
    titleSizeDirective
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home__header {
  width: 100%;
  height: 35vh;
  display: grid;
  grid-template-columns: repeat(12, calc(100% / 12));
  grid-template-rows: repeat(12, calc(100% / 12));

  @media screen and (min-width: $breakpoint-md) {
    height: 50vh;
  }
}
.home__header__img {
  width: 58vw;
  grid-column: 1 / 7;
  margin-left: -5%;
  margin-top: -6%;

  @media screen and (min-width: $breakpoint-md) {
    width: 38vw;
    margin-left: 0;
  }
}

.home__header__title {
  grid-column: 1 / 11;
  grid-row: 4 / 10;
  text-align: left;
  padding-left: 35%;
  width: 40%;
  line-height: 0.9;
  padding-top: 5%;

  &:first-line {
    line-height: 0.6;
  }

  @media screen and (min-width: $breakpoint-md) {
    grid-row: 4 / 9;
    width: 20%;
    line-height: 1;
    padding-left: 30%;
    font-size: 2em !important;

    &:first-line {
      line-height: 0.8;
    }
  }
  @media screen and (max-width: 400px){
    font-size: 1.2em !important;
  }
}

.home__header__subtitle {
  grid-column: 1 / 12;
  grid-row: 11 / 12;
  padding-top: 9%;

  @media screen and (min-width: $breakpoint-md) {
    grid-row: 11 / 13;
    text-align: left;
    padding-left: 27.5%;
    padding-top: 7%;
    font-size: 1.2em;
  }
   @media screen and (max-width: 400px){
    font-size: 0.9em;
    padding-left: 5%;
    padding-top: 0;
    margin-top: 0;
  }
}

.home__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  margin-top: 5%;

   @media screen and (max-width: 400px) {
     margin-top: 0;
   }
}

.home__content--desktop-wrapper--toprow {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: $breakpoint-md) {
    flex-direction: row;
    justify-content: space-around;
  }
}

.home__content--desktop-wrapper--titles {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $breakpoint-md) {
    order: 1;
    padding-top: 2%;
    justify-content: space-between;
  }
}

.home__content__informationcard {
  width: 95%;
  height: 100%;
  margin-top: 4%;

  @media screen and (min-width: $breakpoint-md) {
    order: 2;
    width: 50%;
  }
}

.home__content__subheading--random {
  align-self: flex-end;
  padding-right: 3%;
  @media screen and (min-width: $breakpoint-md) {
    align-self: flex-start;
  }
}

.home__content__home-title-text--desktop {
  display: none;
  @media screen and (min-width: $breakpoint-md) {
    display: initial;
  }
}

.home__content__home-title-text--mobile {
  @media screen and (min-width: $breakpoint-md) {
    display: none;
  }
}

.home__content__subheading--top10 {
  align-self: flex-start;
  padding-left: 3%;
  margin-top: -3%;
  @media screen and (min-width: $breakpoint-md) {
    align-self: flex-start;
    padding-left: 0;
    margin-top: 5%;
  }
}

.home__content__sort {
  margin-left: auto;
  margin-right: 8%;
  margin-top: -10%;
  font-size: 0.75em;
  margin-bottom: 1%;

  @media screen and (min-width: $breakpoint-md) {
    margin-top: 3%;
  }
}

.home__content__desktop-wrapper--dealcards {
  width: 90%;
  @media screen and (min-width: $breakpoint-md) {
    display: flex;
    /deep/ div {
      width: 80%;
      /deep/ .dealcard__price {
        margin-left: 70%;
        width: 40%;
      }
    }
  }
}
</style>
