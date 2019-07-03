<template>
  <div class="ctabutton">
    <button class="ctabutton__btn">{{ text }}</button>
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
.ctabutton__btn {
  background-color: $primaryRed;
  color: $primaryLight;
  box-shadow: -4px -4px $primaryDark;
  padding: 6% 7%;
  border-radius: 6px;
  margin-top: 5%;
  font-size: 1em;
  border: 0;
}

</style>
