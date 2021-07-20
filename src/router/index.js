import Vue from 'vue'
import VueRouter from 'vue-router'
import CardCreate from '../views/CardCreate.vue'
import Albums from '../views/Albums.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'albums-list',
    component: Albums,
  },
  {
    path: '/card/create',
    name: 'card-create',
    component: CardCreate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
