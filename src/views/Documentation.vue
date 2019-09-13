<template>
  <div class="documentation">
    <DocumentationTitleText class="documentation__title">Project Notes</DocumentationTitleText>
    <div class="documentation__information">
      <DocumentationInformationCard class="documentation__information--card">
        <div class="documentation__information--content">
          <DocumentationSubTitleText text="Overview" />
          <p>This site is my personal playground.</p>
          <p>It is a side project that I'm using to improve my understanding of performance and accessibility best practice and optimisation, within the context of a JavaScript-based Single Page Application.</p><p>The site is built in Vue, and pulls data from the <a href="https://public-api.livingsocial.co.uk/docs/index.html" target="_blank" class="documentation__information--bloglink">Living Social public API</a>.</p>
          <p>Using LightHouse metrics as my guide, I am taking the time to explore optimisation techniques I haven't yet had the opportunity to play around with.</p>
        </div>

        <DocumentationSubTitleText
          text=" Objective 1: Improve performance on slow network connections"
        />

        <p>
          LightHouse is kind enough to give me a performance score of 100 on a non-throttled network. But what happens when that network speed drops?
          On my local server, this plunges to a terrifying 0. Deployed, courtesy of Netlify's compression, this shifts a little higher to 69. This still leaves plenty of room for improvement, considering that is only throttling to "slow 4g".
        </p>
        <p>Join me on my adventures in optimisation :D</p>
        <ul>
          <router-link tag="li" to="/notes/svg-optimisation" class="documentation__information--bloglink">1. SVG Optimisation</router-link>
          <!-- <router-link tag="li" to="/svg-optimisations" class="documentation__information--bloglink">2. Font Optimisation</router-link> -->
          <li>2. Font Optimisation</li>
          <li>3. CSS & JS Optimisation</li>
          <li>4. Cache & Storage Optimisation</li>
        </ul>
        <DocumentationSubTitleText text=" Objective 2: Improve accessibility" />
        <ul>
          <li>Planning in Progress :)</li>
        </ul>
        <DocumentationSubTitleText text=" Objective 3: Improve usability" />
        <ul>
          <li>1. Responsive Tweaks</li>
          <li>2. Animations & Feedback</li>
        </ul>
        <br />
        <br />
      </DocumentationInformationCard>
    </div>
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
export default class Documentation extends Vue {}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.documentation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  .documentation__title {
    align-self: flex-start;
    padding-left: 5%;
  }

  .documentation__information {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-bottom: 2%;
  }

  ul {
    list-style: none;

    li {
      padding: 0.5%;
      margin-bottom: 2%;
      color: $primaryLightGrey
    }
  }

  .documentation__information--bloglink {
    color: $primaryDark;
    width: 100%;
    border-bottom: 3px dashed $primaryGreen;
    &:hover {
      background-color: $primaryRed;
      color: $primaryGrey;
      border-bottom: 3px dashed $primaryGrey;
    }
    @media screen and (min-width: $breakpoint-md) {
    width: 30%;
  }
  }

  @media screen and (min-width: $breakpoint-md) {
    margin-top: $headerHeight;
  }
}
</style>