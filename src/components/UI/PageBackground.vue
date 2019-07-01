<template>
  <div class="page-background">
    <div class="background-triangle-wrapper">
      <svg
        width="100%"
        height="100%"
        left="0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        display:block
      >
        <polygon class="background-triangle" points="0,0 100,0 0,75" />Sorry, your browser does not support inline SVG.
      </svg>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PageBackground extends Vue {}
</script>

<style scoped lang="scss">
.page-background {
  display: grid;
  height: 100%;
  margin-top: $headerHeight;
  background-color: $primaryYellow;
}

.background-triangle-wrapper {
  z-index: 0;
  position: fixed;
}
.content {
  z-index: 2;

}
.background-triangle {
  fill: $primaryGreen;
  width: 100%;
}

@media screen and (min-width: 600px) {
  .background-triangle-wrapper {
    width: 50%;
    text-align: left;
  }
}
</style>
