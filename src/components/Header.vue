<template>
  <div class="header">
    <nav>
      <div class="logo">
        <router-link to="/">
          <p>LS</p>
        </router-link>
      </div>
      <div class="menu">
        <p @click="handleMenuToggle">MENU ICON</p>
          <div v-if="isMenuOpen" class="side-nav">
            <p @click="handleMenuToggle">X</p>
            <router-link tag="li" to="/">Home</router-link>
            <router-link tag="li" to="/about">About</router-link>
            <router-link tag="li" to="/detail">Detail</router-link>
            <router-link tag="li" to="/categories">Categories</router-link>
          </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop() private title!: string;

  isMenuOpen: boolean = false;

  handleMenuToggle () {
    this.isMenuOpen = !this.isMenuOpen
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
nav {
  background-color: $primaryGrey;
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
  color: $primaryLight;
  height: $headerHeight;
}
.side-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: $primaryYellow;
  overflow-x: hidden;
  padding-top: 8%;
  color: $primaryDark;

  li {
    list-style: none;
    padding-bottom: 4%;
    font-size: 1.1em;
  }

  p {
    padding-left: 10%;
    font-weight: 600;
    color: $primaryDark;
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
