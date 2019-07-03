import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { RouterLinkStub } from '@vue/test-utils';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('./views/Category.vue')
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('./views/Random.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('./views/SiteMap.vue')
    }
  ],
})

