<template>
  <div class="random">
    <RandomTitleText class="random__title">Random Deal Generator</RandomTitleText>
    <div v-if="isRandomLoading">Loading...</div>
    <div v-else class="random__dealinformation">
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
          >WowCher</span> to purchase your random deal, OR, click below to generator some random and hopefully enticing photos of your random deal will appear <u>underneath the button</u> (scroll if you can't see it).
        </p>
        <p>Note: If the present deal has only one associated image, it won't be particularly random.</p>
        <span v-if="randomDeal.images.length >= 2">Lucky!</span><span v-else>Unlucky!</span> Your present deal has
        <span v-if="randomDeal.images.length >= 2"></span><span v-else>only</span> 
         {{ randomDeal.images.length}} image<span v-if="randomDeal.images.length >= 2">s</span> <span v-if="randomDeal.images.length >= 2">:)</span><span v-else>:(</span></p>
      
        <RandomCTAButton
          @click.native="getRandomImage"
          class="random__options--morerandom"
          text="Random Image please!"
        />
        <RandomInformationCard class="random__informationcard--img">
          <img v-if="!isRandomImageNumLoaded" src="../assets/question.svg">
          <img v-else :src="randomDeal.images[randomImageNum].imageUrl + '.jpg'" :alt="randomDeal.images[randomImageNum].alt" />
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
import { Getter, Mutation, Action } from 'vuex-class'
import { Deal } from '@/store/types'

@Component({
  components: {
    RandomTitleText,
    RandomInformationCard,
    RandomCTAButton
  }
})
export default class Random extends Vue {
  randomImageNum: number = 0;
  isRandomImageNumLoaded: boolean = false;

  @Getter randomDeal: Deal;
  @Getter isRandomDealLoading: boolean;

   @Action('getRandomDeal') getRandomDeal: any;

  randomImage: string = "";


  created() {
    this.$emit("handleRandomDeal");
    this.getRandomDeal();
  }

  handleWowCherClick(urlPath: string) {
    let url = "http://wowcher.co.uk" + urlPath;
    window.open(url);
  }

  getRandomImage() {
    this.isRandomImageNumLoaded = false;
     let randomNum: number = Math.floor(
      Math.random() * this.randomDeal.images.length
    );
    this.randomImageNum = randomNum
    this.isRandomImageNumLoaded = true;
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
      margin-left: 20%;
      p {
        padding: 2%;
        font-size: 1em;
      }
    }
  }

  .random__dealinformation {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    .random__options {
      @media screen and (min-width: $breakpoint-sm){
      width: 60%;
      padding-top: 3%;
      margin-left: auto;
      margin-right: auto;
      text-align: justify;

      }
       .random__options--wowcher {
      font-weight: 600;
    }

    .random__options--morerandom {
      margin-left: 25%;
      margin-bottom: 10%;
    }
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
    margin-top: 0;
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