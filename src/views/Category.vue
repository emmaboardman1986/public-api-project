<template>
 
  <div class="category">
    <categoryTitleText class="category__title">Category: {{ this.$route.params.id }}</categoryTitleText>
  <div class="category--404" v-if="!categorySuccessStatus">
     <p class="category--404--title">Uh-oh...</p>
     <p>Unfortunately, no deals were returned from your search. Why not try something 
     <router-link tag="a" to="/random">Random</router-link> instead?</p>
     <img src="../assets/404.svg" alt="unhappy 404 face">
     </div>
 
 <div v-else-if="isdealsPerCurrentCategoryLoading">Loading...</div>

  <div v-else class="category__dealcard--wrapper">
          <categoryDealCard v-for="deal in dealsPerCurrentCategory" :key="deal.id" :dealinfo="deal"/>
        </div>
      </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import categoryTitleText from "@/components/UI/TitleText.vue";
import categoryDealCard from "@/components/UI/DealCard.vue";
import { Getter, Mutation, Action } from 'vuex-class'
import { Deal } from '@/store/types'

@Component({
  components: {
    categoryTitleText,
    categoryDealCard
  }
})
export default class category extends Vue {
   @Prop categoryName!: string
   @Getter isdealsPerCurrentCategoryLoading: boolean
   @Getter dealsPerCurrentCategory: []
   @Getter categorySuccessStatus: boolean

   @Action('fetchDealsByCategory') fetchDealsByCategory: any;
   @Action('resetCategorySuccessStatus') resetCategorySuccessStatus: any;
 
  
  created(){
    this.fetchDealsByCategory(this.$route.params.id)
    this.resetCategorySuccessStatus();
  }

  handleWowCherClick(urlPath: string){
    let url = "http://wowcher.co.uk" + urlPath;
    window.open(url);
  }
}


</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media screen and (min-width: $breakpoint-md){
  margin-top: $headerHeight;
  }
}

.category__title {
  align-self: flex-start;
  padding: 0 5%;
}

.category__dealcard--wrapper {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2%;
}

.category--404 {
  text-align: center;
  .category--404--title {
    font-size: 1.5em;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: $primaryDark;
    font-weight: 600;
    &:hover{
      color: $primaryGrey;
      border-bottom: 3px solid $primaryGreen;
    }
  }
  img {
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    padding: 7%;
  }
}
</style>
