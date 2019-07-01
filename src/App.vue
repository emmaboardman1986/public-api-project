<template>
  <div id="app">
    <app-header/>
    <app-page-background>
      <router-view></router-view>
    </app-page-background>
    <app-footer title="I AM A FOOTER" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/components/Header.vue'
import AppPageBackground from '@/components/UI/PageBackground.vue'
import AppFooter from '@/components/Footer.vue'
import titleSizeDirective from '@/directives/titlesize-directive'

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
export default class Home extends Vue {}
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
