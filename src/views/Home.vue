<template>
  <div class="home">
    <div class="home__header">
      <img src="@/assets/trainer.svg" class="home__header__img" />
      <HomeTitleText
        v-titleSizeDirective="'1.7em'"
        text="London on a ShoeString"
        class="home__header__title"
      />
      <HomeSubTitleText
        text="Limit your budget, not your experience"
        class="home__header__subtitle"
      />
    </div>
    <div class="home__content">
      <HomeInformationCard class="home__content__informationcard">
        <HomeCTABtn text="Suprise me with a deal!" />
        <p>Find deals in London!</p>
        <p>Click the button above to be surprised with a random deal, or keep scrolling to find our 10 latest deals</p>
      </HomeInformationCard>
      <HomeTitleText
        v-titleSizeDirective="'0.9em'"
        text="⇡ Random Deal"
        class="home__content__subheading--random"
      />
        <HomeTitleText
          v-titleSizeDirective="'0.9em'"
          text="Top 10 Deals ⇣"
          class="home__content__subheading--top10"
        />
        <div class="home__content__sort">
          <p>Sort by price ▼</p>
        </div>
      <HomeDealCard />
      <HomeDealCard />
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
}
.home__header__img {
  width: 58vw;
  grid-column: 1 / 7;
  margin-left: -5%;
  margin-top: -6%;
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
}
.home__header__subtitle {
  grid-column: 1 / 12;
  grid-row: 11 / 12;
  padding-top: 9%;
  margin-left: -8%;
}

.home__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  margin-top: 5%;
}

.home__content__informationcard {
  width: 95%;
  height: 100%;
  margin-top: 4%;
}

.home__content__subheading--random {
  align-self: flex-end;
  padding-right: 3%;
}

.home__content__subheading--top10 {
  align-self: flex-start;
  padding-left: 3%;
  margin-top: -3%;
}

.home__content__sort {
  margin-left: auto;
  margin-right: 8%;
  margin-top: -10%;
  font-size: 0.75em;
  margin-bottom: 1%;
}
</style>
