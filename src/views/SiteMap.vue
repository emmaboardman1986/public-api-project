<template>
 
  <div class="sitemap">
    <siteMapTitleText class="sitemap__title">SiteMap</siteMapTitleText>
    <div class="sitemap__content">
        <p>Below is an XML generation of the SiteMap</p>
    <siteMapInformationCard>{{ siteMap }}</siteMapInformationCard>
    </div>
     </div>
 
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import siteMapTitleText from "@/components/UI/TitleText.vue";
import siteMapInformationCard from "@/components/UI/InformationCard.vue"
import router from '../router'

@Component({
  components: {
    siteMapTitleText,
    siteMapInformationCard
  }
})
export default class SiteMap extends Vue {
siteMap: any = ''
getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== '*') {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

getRoutesXML() {
  const list = this.getRoutesList(router.options.routes, 'https://pretendURL.com')
    .map(route => `<url><loc>${route}</loc></url>`)
    .join('\r\n');
  this.siteMap =  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}

created() {
    this.getRoutesXML();
}
}
</script>


<style lang="scss" scoped>
.sitemap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: 83vh;

  @media screen and (min-width: $breakpoint-md){
  margin-top: $headerHeight;
  }

  .sitemap__content {
      width: 90%;
      margin-bottom: 10%;
  }
}

</style>

