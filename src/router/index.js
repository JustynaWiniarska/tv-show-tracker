import { createRouter, createWebHistory } from 'vue-router'
import Subscriptions from '../components/Subscriptions.vue'

const routes = [
  { path: '/', component: Subscriptions },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router