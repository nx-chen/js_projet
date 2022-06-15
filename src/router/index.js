import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabView from '../views/TabView.vue'
import ModalView from '../views/ModalView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Tab',
    name: 'Tab',
    component: TabView
  },
  {
    path: '/Modal',
    name: 'Modal',
    component: ModalView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
