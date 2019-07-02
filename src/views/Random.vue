<template>
  <div class="random">
    <RandomTitleText class="random__title">Random Deal Generator</RandomTitleText>
    <div class="random__dealinformation">
      <RandomInformationCard class="random__info-card">
        <p>Your random deal is:</p>
        <p class="random__info-card--title">{{ randomDeal.headline }}</p>
      </RandomInformationCard>
      <div class="random__options">
      <p>You can either head straight to WowCher to purchase your random deal, OR, click below to generator some random and hopefully enticing photos of your random deal</p>
      <RandomCTAButton text="More random please!" />
    </div>
    </div>
    

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import RandomTitleText from "@/components/UI/TitleText.vue";
import RandomInformationCard from "@/components/UI/InformationCard.vue";
import RandomCTAButton from '@/components/UI/CTAButton.vue';

@Component({
  components: {
    RandomTitleText,
    RandomInformationCard,
    RandomCTAButton
  }
})
export default class Random extends Vue {
  @Prop() randomDeal!: {};

  created() {
    this.$emit("handleRandomDeal");
  }
}
</script>

<style lang="scss" scoped>
.random {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: 86vh;

  @media screen and (min-width: $breakpoint-md) {
    margin-top: $headerHeight;
    height: initial;
  }

  .random__title {
    align-self: flex-start;
    padding-left: 5%;
  }

  .random__info-card {
    p {
      padding: 4%;
      text-align: center;
    }
    @media screen and (min-width: $breakpoint-md) {
      align-self: flex-start;
      padding-left: 5%;
      margin-top: 3%;
      p {
        padding: 2%;
        font-size: 1em;
      }
    }
  }

  .random__dealinformation {
    width: 100%;
    background-image: url("../assets/explosion.svg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .random__info-card--title {
    font-family: $titleFont;
    font-weight: 700;
    font-size: 2em;
  }
}
</style>