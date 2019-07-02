<template>
<div>
    <router-link tag="div" class="dealcard" :to="{name: 'detail', params: { id: dealinfo.id}}">
    <div class="dealcard__outerbox"></div>
    <div class="dealcard__innerbox">
      
      <p>{{ dealinfo.headline }}</p>
       
    </div>
      <div class="dealcard__price">
        <p>£{{ dealinfo.price }}</p>
      </div>
      </router-link>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DealCard extends Vue {
  @Prop() dealinfo!: {};
}
</script>

<style lang="scss" scoped>
.dealcard {
  width: 90%;
  height: 22vh;
  display: grid;
  grid-template-columns: repeat(24, calc(100% / 24));
  grid-template-rows: repeat(24, calc(100% / 24));
  margin-bottom: 5%;

  @media screen and (min-width: $breakpoint-md){
      width: 25%;
      height: 30vh;
      margin-right: 5%;
  }

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
  grid-row: 17/22;
  grid-column: 20/25;
  margin-left: 10%;
  width: 100%;
  padding: 0 1%;
  p {
    color: $primaryDark;
    text-align: center;
  }

  @media screen and (min-width: $breakpoint-md){
  grid-row: 17/21;
  grid-column: 20/25;
   margin-left: 30%;
  }
}

p {
  font-family: $titleFont;
  font-weight: 700;
  color: $primaryLight;
  font-size: 1.2em;
  text-align: left;
  margin: 0;
}
</style>
