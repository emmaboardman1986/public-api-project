<template>
  <footer>
     <router-link tag="div" to="/documentation">Project Notes</router-link>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  background-color: $primaryGrey;
  height: 100%;
  padding: 2%;

  p {
    font-family: $subTitleFont;
    color: $primaryLight;
    text-align: left;
    margin: 0;
    margin-left: 2%;
    font-size: 0.9em;
  }
}
</style>
