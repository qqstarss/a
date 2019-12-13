import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 首页
    name: 'home',
    component: Home
  },
  {
    path: '/product', // 产品介绍
    name: 'product',
    component: () => import('../views/product.vue')
  },
  {
    path: '/solution', // 解决方案
    name: 'solution',
    component: () => import('../views/solution.vue')
  },
  {
    path: '/news', // 新闻中心
    name: 'news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/business', // 商务合作
    name: 'business',
    component: () => import('../views/business.vue')
  },
  {
    path: '/about', // 关于我们
    name: 'about',
    component: () => import('../views/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
