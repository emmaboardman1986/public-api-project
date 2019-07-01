<template>
  <footer>
    <p>SiteMap</p>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  background-color: $primaryGrey;
  height: 100%;
  padding: 2%;
}
p {
  font-family: $subTitleFont;
  color: $primaryLight;
  text-align: left;
  margin: 0;
  margin-left: 2%;
  font-size: 0.9em;
}
</style>
