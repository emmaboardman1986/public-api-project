<template>
  <div class="random">
    <RandomTitleText class="random__title">Random Deal Generator</RandomTitleText>
    <div class="random__dealinformation">
      <RandomInformationCard class="random__info-card">
        <p>Your random deal is:</p>
        <p class="random__info-card--title">{{ randomDeal.headline }}</p>
      </RandomInformationCard>
      <div class="random__options">
        <p>
          You can either head straight to
          <span
            @click="handleWowCherClick(randomDeal.urlPath)"
            class="random__options--wowcher"
          >WowCher</span> to purchase your random deal, OR, click below to generator some random and hopefully enticing photos of your random deal
        </p>
        <RandomCTAButton
          @click.native="getRandomImage"
          class="random__options--morerandom"
          text="Random Image please!"
        />
        <RandomInformationCard class="random__informationcard--img">
          <img :src="randomDeal.images[0].imageUrl + '.jpg'" alt="image representing deal" />
        </RandomInformationCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import RandomTitleText from "@/components/UI/TitleText.vue";
import RandomInformationCard from "@/components/UI/InformationCard.vue";
import RandomCTAButton from "@/components/UI/CTAButton.vue";

@Component({
  components: {
    RandomTitleText,
    RandomInformationCard,
    RandomCTAButton
  }
})
export default class Random extends Vue {
  @Prop() randomDeal!: {};

  randomImage: string = "";


  created() {
    this.$emit("handleRandomDeal");
  }

  handleWowCherClick(urlPath: string) {
    let url = "http://wowcher.co.uk" + urlPath;
    window.open(url);
  }

  getRandomImage() {
     let randomNum: Number = Math.floor(
      Math.random() * this.randomDeal.images.length
    );
    console.log(this.randomDeal.images);
    console.log(randomNum);
    this.randomImage = this.randomImage[
      Math.floor(Math.random() * this.randomDeal.images.length)
    ];
    console.log(this.randomImage);
    }
  }

</script>

<style lang="scss" scoped>
.random {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

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
      padding-bottom: 0;
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
    width: 90%;
    background-image: url("../assets/explosion.svg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    .random__options--wowcher {
      font-weight: 600;
    }

    .random__options--morerandom {
      margin-left: 25%;
      margin-bottom: 10%;
    }
  }

  .random__info-card--title {
    font-family: $titleFont;
    font-weight: 700;
    font-size: 2em;
    margin-top: 0;
    margin-top: 0;
  }

  .random__informationcard--img {
    margin-bottom: 10%;
    img {
      width: 100%;
    }
    /deep/ .informationcard__innerbox {
      padding: 0;
    }
  }
}
</style>