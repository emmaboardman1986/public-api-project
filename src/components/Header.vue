<template>
  <div class="header">
    <nav :class="{scrolling: scrollPosition > 10}">
      <div class="header__logo">
        <router-link to="/">
          <p>LS</p>
        </router-link>
      </div>
      <div class="header__menu--mobile">
        <p @click="handleMenuToggle">MENU</p>
        <div v-if="isMenuOpen" class="nav__links">
          <p @click="handleMenuToggle">X</p>
          <router-link tag="li" to="/">Home</router-link>
          <router-link tag="li" to="/about">About</router-link>
          <router-link tag="li" to="/detail">Detail</router-link>
          <router-link tag="li" to="/categories">Categories</router-link>
        </div>
      </div>
      <div class="header__menu--desktop">
        <div class="nav__links" :class="{scrolling: scrollPosition > 10}">
          <router-link tag="li" to="/">Home</router-link>
          <router-link tag="li" to="/categories" >Categories</router-link>
          <router-link tag="li" to="/detail">Random</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  scrollPosition: number = 0;

  updateScroll() {
    this.scrollPosition = window.scrollY;
  }

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }

  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  }

  isMenuOpen: boolean = false;

  handleMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
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

  .header__logo {
    font-family: $titleFont;
    font-weight: 700;
    padding-top: 0.8%;
    a {
      color: $primaryLight;
      text-decoration: none;
    }
  }
}
nav {
  background-color: $primaryGrey;
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
  color: $primaryLight;
  height: $headerHeight;
  padding-bottom: 1%;

  @media screen and (min-width: $breakpoint-md) {
    background-color: transparent;
  }
}

.scrolling {
  @media screen and (min-width: $breakpoint-md) {
  background-color: $primaryGrey;
  color: $primaryYellow;
  .nav__links > li {
    color: $primaryLight;
  }
  .header__logo {
    a {
      color: $primaryLight;
    }
  }
  }
}

.header__menu--desktop {
  display: none;
  @media screen and (min-width: $breakpoint-md) {
    display: initial;
  }
}

.header__menu--mobile {
  @media screen and (min-width: $breakpoint-md) {
    display: none;
  }
}

.nav__links {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: transparent;
  overflow-x: hidden;
  padding-top: 8%;
  color: $primaryLight;
  background-color: $primaryDark;
  align-items: center;

  .router-link-exact-active {
  border-bottom: solid 3px $primaryGreen;
 
}

  li {
    list-style: none;
    padding-bottom: 0.6%;
    font-size: 1.1em;
    margin-top: 15%;
    margin-bottom: 5%;
    width: 60%;
  }

  p {
    font-weight: 600;
    color: $primaryLight;
  }

  @media screen and (min-width: $breakpoint-md) {
    flex-direction: row;
    height: initial;
    justify-content: flex-end;
    padding-top: 1.5%;
    background-color: transparent;

    li {
      margin-right: 14%;
      margin-bottom: 0;
      margin-top: 0;
      width: initial;
      color: $primaryDark;
    }

  }
}
</style>
