<template>
  <div id="app">
    <app-header/>
    <app-page-background>
      <router-view :isDataLoaded="this.isDealDataLoaded" :topTenDeals="this.topTenDeals"></router-view>
    </app-page-background>
    <app-footer title="I AM A FOOTER" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import AppHeader from '@/components/Header.vue'
import AppPageBackground from '@/components/UI/PageBackground.vue'
import AppFooter from '@/components/Footer.vue'
import titleSizeDirective from '@/directives/titlesize-directive'
import { store } from '@/utils/store.js'
import axios from 'axios'

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
  topTenDeals: any[] = [];
  isDealDataLoaded: boolean = false;

  created() {
     axios
        .get('https://public-api.livingsocial.co.uk/v1/deal/london')
        .then(response => {
            console.log(response);
            this.topTenDeals = response.data.deals.slice(0,10); 
            this.isDealDataLoaded = true          
        })
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primaryDark;
  font-size: 16px;
}

</style>
