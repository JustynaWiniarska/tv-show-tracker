import { createRouter, createWebHistory } from 'vue-router'
import Subscriptions from '../components/Subscriptions.vue'
import ShowDetails from '../components/ShowDetails.vue'

const routes = [
  { path: '/', component: Subscriptions },
  { path: '/shows/:id', component: ShowDetails}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router