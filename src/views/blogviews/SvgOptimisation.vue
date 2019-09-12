<template>
  <div class="documentation">
    <SVGTitleText class="documentation__title">
      <router-link
        to="/documentation"
        class="documentation-link"
      ><span class="documentation-link--color">Project Notes</span></router-link> >> SVG Optimisation
    </SVGTitleText>
    <div class="documentation__information">
      <SVGInformationCard class="documentation__information--card">
        <div class="documentation__information--content">
          <p>
            SVG Optimisations might seem like a strange place to begin my optimisation journey - font optimisations are by far the lowest hanging fruit on this site. However, courtesy of the wonderful Sarah Drasner's
            <a
              href="https://frontendmasters.com/courses/svg-essentials-animation/"
              target="_blank"
            >course on SVG animation</a>, SVGs are my latest obsession. My site, my rules ;)
          </p>
          <SVGSubTitleText text="TL;DR" />
          <p>
            In addition to the background triangle (drawn inline), this site has 3 main SVGs. The largest was reduced from 578KB to 18KB. Interestingly, this did not impact the LightHouse score on the local server. Despite that, it was a satisfying reduction and good insight into how easy SVG can be to get right.
            <p>note: above sizes are on local device, not compressed.</p>
          </p>
        </div>

        <SVGSubTitleText
          text="Where we begin"
        />

        <p>
        When I built this project, I knew very little about SVGs, or SVG tools. I licensed an Illustrator file from <a href="https://stock.adobe.com/uk/contributor/205740772/denisxizer" target="_blank">denisxizer</a> courtesy of <a href="https://stock.adobe.com/uk/images/creative-isolated-illustration-of-sneakers-running-walking-shoes-style-backgrounds-vector-concept-element-icon-in-cartoon-style-on-isolated-white-background/239259382" target="_blank">AdobeStock</a>, opened it in Photoshop to remove the background, and exported it as .svg. Surprisingly, this is not an optimal workflow for an SVG, and the resulting size was 578KB.</p>
       
        <SVGSubTitleText text="Step 1: Use (& leverage) the right tools for the job" />
        
       <p> Adobe Illustrator offers a free 7-day trial. I took the raw .ai file that I had licensed from AdobeStock, and opened it in Illustrator. I used the selection tool from the left-hand toolbar to highlight the trainer object. From the Object menu on the toolbar, I selected 'Path' > 'Simplify'. The simplify tool removes any unecessary anchor points from the image. You can also change the % to smooth out image edges. I wanted to keep the edges as they were on the original, so I didn't change this. From the 'File' menu in the toolbar, I selected 'Export as', and exported as a SVG. I chose the 'Presentation Layer' option (see <a href="https://helpx.adobe.com/uk//illustrator/using/svg.html#enhancements" target="_blank">this article</a> for explanations of the options). This exported the file at a greatly reduced 21KB. </p>
        <SVGSubTitleText text="Step 2: Question the tools" />
        <p>
            Adobe Illustrator made a huge difference to my file size. However, Illustrator exports SVGs with some additional information, which may not be important to you. This can be cleaned up using <a href="https://jakearchibald.github.io/svgomg/" target="_blank">SVGOMG</a>. You have complete control over what optimisations are made. You may want to keep certain attributes for accessibility reasons, but as my SVG is purely presentational, I stripped it with the default options. Each optimisation attritibute is explained <a href="https://github.com/svg/svgo" target="_blank">here</a>. 
            </p>
        <SVGSubTitleText text="Where we end" />
        <p>
        I repeated the steps above with the other SVGs on the site - these were notably smaller to begin with, but still benefited from the optimisation process. The files moved respectively from 3KB to 1KB, and 1KB to 980 bytes. Interestingly, this did nothing for my local server LightHouse score :/ Next target: web fonts! 
        </p>
        <br />
        <br />
      </SVGInformationCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SVGTitleText from "@/components/UI/TitleText.vue";
import SVGSubTitleText from "@/components/UI/SubTitleText.vue";
import SVGInformationCard from "@/components/UI/InformationCard.vue";

@Component({
  components: {
    SVGTitleText,
    SVGSubTitleText,
    SVGInformationCard
  }
})
export default class SvgOptimisation extends Vue {}
</script>

<style lang="scss" scoped>
.documentation-link {
  font-size: 0.7em;
color: $primaryLight;
.documentation-link--color {
    color: $primaryLight;
}
  &:hover {
    color: $primaryYellow;
  }
}

.documentation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  a {
      color: $primaryDark;
      font-weight: 600;
      text-decoration: none;
      border-bottom: $primaryGreen dashed 1px;
  }

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
      color: $primaryLightGrey;
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