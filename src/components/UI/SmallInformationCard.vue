<template>
  <div class="small-information-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SmallInformationCard extends Vue {}
</script>

<style lang="scss" scoped>
.small-information-card {
  background-color: #FAF3F3;
  opacity: 0.7;
  border: solid $primaryDark 3px;
}
</style>
