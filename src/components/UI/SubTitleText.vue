<template>
    <h2>{{ text }}</h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SubTitleText extends Vue {
    @Prop() text!: string;
}
</script>

<style lang="scss" scoped>
h2 {
    color: $primaryDark;
    font-weight: 600;
    font-family: $subTitleFont;
    font-size: 1em;

}
</style>
