<template>
  <div class="dealcard">
    <div class="dealcard__outerbox"></div>
    <div class="dealcard__innerbox">
      <p>Deal Title</p>
      <div class="dealcard__price">
        <p>£20</p>
      </div>
    </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class InformationCard extends Vue {
  @Prop() text!: string;
}
</script>

<style lang="scss" scoped>
.dealcard {
  width: 90%;
  height: 20vh;
  display: grid;
  grid-template-columns: repeat(24, calc(100% / 24));
  grid-template-rows: repeat(24, calc(100% / 24));
  margin-bottom: 5%;
}

.dealcard__outerbox {
    background-color: $primaryDark;
    border: dashed 2px $primaryLight;
    grid-column: 1 / 24;
    grid-row: 1 / 24;
}

.dealcard__innerbox {
    background-color: $primaryRed;
    grid-column: 2 / 25;
    grid-row: 3 / 25;
    margin-top: 0.5%;
    margin-left: -0.5%;
    padding: 5% 6%;
}

.dealcard__price {
  background-color: $primaryLight;
  border: 4px solid $primaryDark;
  border-radius: 6px;
  // grid-column: 20 / 25;
  margin-right: -20%;
  margin-left: 77%;
  margin-top: 5%;
  width: 33%;
  padding: 0 1%;
  p {

    color: $primaryDark;
    text-align: center;
  }
}

p {
    font-family: $titleFont;
    font-weight: 700;
    color: $primaryLight;
    font-size: 2em;
    text-align: left;
    margin: 0;
}

</style>
