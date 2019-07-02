<template>
  <div class="informationcard">
    <div class="informationcard__outerbox"></div>
    <div class="informationcard__innerbox">
      <slot></slot>
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
.informationcard {
  display: grid;
  grid-template-columns: repeat(24, calc(100% / 24));
  grid-template-rows: repeat(24, calc(100% / 24));
}

.informationcard__outerbox {
  background-color: $primaryDark;
  border: dotted 2px $primaryLight;
  grid-column: 1 / 24;
  grid-row: 1 / 24;
}

.informationcard__innerbox {
  background-color: $primaryLight;
  grid-column: 2 / 25;
  grid-row: 2 / 25;
  margin-top: 0.5%;
  margin-left: -0.5%;
  padding: 2% 6%;
}

p {
  font-size: 0.95em;
  text-align: justify;
}
</style>
