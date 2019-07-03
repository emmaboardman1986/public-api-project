<template>
  <div class="categories">
    <CategoriesTitleText class="categories__title">Categories</CategoriesTitleText>
    <CategoriesInformationCard class="categories__info-card">
      <p>Find a deal by Category</p>
    </CategoriesInformationCard>
    <div v-if="isCategoriesLoading">Loading...</div>
    <div v-else class="categories__small-info-cards">
       
      <CategoriesSmallInformationCard class="categories__small-info-card" v-for="category in allCategories" :key="category.urlName">
       <router-link tag="a" class="categories__small-info-card--link" :to="{name: 'category', params: { id: category.urlName  }}">
        {{ category.displayName }}
       </router-link>
        </CategoriesSmallInformationCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CategoriesTitleText from "@/components/UI/TitleText.vue";
import CategoriesInformationCard from "@/components/UI/InformationCard.vue";
import CategoriesSmallInformationCard from "@/components/UI/SmallInformationCard.vue";
import { Getter, Mutation, Action } from 'vuex-class'
import { Deal } from '@/store/types'

@Component({
  components: {
    CategoriesTitleText,
    CategoriesInformationCard,
    CategoriesSmallInformationCard
  }
})
export default class Categories extends Vue {
   @Getter allCategories: []
   @Getter isCategoriesLoading: boolean;

   @Action('fetchAllCategories') fetchAllCategories: any

    created(){
      this.fetchAllCategories();
    }
}
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: 86vh;

  @media screen and (min-width: $breakpoint-md) {
    margin-top: $headerHeight;
    height: initial;
  }

  .categories__title {
    align-self: flex-start;
    padding-left: 5%;
  }

  .categories__info-card {
    width: 70%;
    p {
      padding: 4%;
      text-align: center;
    }
    @media screen and (min-width: $breakpoint-md) {
      width: 40%;
      align-self: flex-start;
      padding-left: 5%;
      margin-top: 3%;
      p {
        padding: 2%;
      }
    }
  }

  .categories__small-info-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 5%;
  
    @media screen and (min-width: $breakpoint-md) {
      padding-top: 0;
    }

    .categories__small-info-card {
      margin-left: 0;
      margin: 3%;
      font-family: $titleFont;
      font-weight: 700;
      padding: 3% 5%;

    a {
      text-decoration: none;
      color: $primaryDark;
    }
      &:hover {
      background-color: $primaryDark;
      opacity: 1;
      a {
color: $primaryLight;
      }
      

      @media screen and (min-width: $breakpoint-md) {
        margin-right: 0;
      }
    }
    }
  }
}
</style>