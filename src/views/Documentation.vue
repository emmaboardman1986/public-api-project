<template>
    <div class="documentation">
        <DocumentationTitleText>Project Notes</DocumentationTitleText>
        <DocumentationInformationCard>
        <div class="documentation__introduction">
            <p>This site is my personal playground.</p>
            <p>It is a side project designed to improve my understanding of performance and accessibility best practice and optimisation, within the context of a JavaScript-based Single Page Application</p>
            <p>Using LightHouse metrics as my guide, I am taking the time to explore optimisation techniques I haven't yet had the opportunity to play around with.</p>
            </div>
             </DocumentationInformationCard>
        <DocumentationSubTitleText>
            Objective 1: <p>Improve performance on slow network connections</p>
        </DocumentationSubTitleText>
        <p>LightHouse is kind enough to give me a performance score of 100 on a non-throttled network. But what happens when that network speed drops?
            On my local server, this plunges to a terrifying 0. Deployed, courtesy of Netlify's compression, this shifts a little higher to 69. Plenty of room for improvement, considering that is only throttling to "slow 4g"</p>
            <p>Join me on my adventures in optimisation :D </p>
            <a href="#">1. SVG Optimisation</a> 
            <a href="#">2. Font Optimisation</a> 
            <a href="#">3. CSS & JS Optimisation (coming soon)</a> 
            <a href="#">4. Cache & Storage Optimisation (coming soon)</a> 
    </div>
   
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import DocumentationTitleText from "@/components/UI/TitleText.vue";
import DocumentationSubTitleText from "@/components/UI/SubTitleText.vue";
import DocumentationInformationCard from "@/components/UI/InformationCard.vue";


@Component({
  components: {
    DocumentationTitleText,
    DocumentationSubTitleText,
    DocumentationInformationCard
  }
})

export default class Documentation extends Vue {

}

</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media screen and (min-width: $breakpoint-md) {
    margin-top: $headerHeight;
  }
}
</style>