<template>
    <div>
    <h1><slot></slot></h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TitleText extends Vue {
}
</script>

<style lang="scss" scoped>
h1 {
    color: $primaryLight;
    text-shadow: 3px -2px $primaryGreen, 2px -1px $primaryGreen, -2px 2px $primaryRed, -4px 2px $primaryRed;
    font-weight: 700;
    font-family: $titleFont;
}
</style>
