<template>
  <div class="detail">
    <h1>I AM A DETAIL PAGE</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DetailTitleText from '@/components/UI/TitleText.vue'

@Component({
  components: {
    DetailTitleText
  }
})
export default class Detail extends Vue {}
</script>
