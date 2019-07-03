<template>
  <div id="app">
    <app-header />
    <app-page-background>
      <router-view />
    </app-page-background>
    <app-footer title="I AM A FOOTER" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import AppHeader from "@/components/Header.vue";
import AppPageBackground from "@/components/UI/PageBackground.vue";
import AppFooter from "@/components/Footer.vue";
import titleSizeDirective from "@/directives/titlesize-directive";
import axios from "axios";
import { Getter, Mutation, Action } from 'vuex-class'
import { Deal } from './store/types'

@Component({
  components: {
    AppHeader,
    AppPageBackground,
    AppFooter
  },
  directives: {
    titleSizeDirective
  }
})
export default class Home extends Vue {
  @Action('loadAllAvailableDeals') loadAllAvailableDeals: any;

  created() {
    this.loadAllAvailableDeals();
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primaryDark;
  font-size: 16px;
}
</style>
