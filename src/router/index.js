import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import MusicIndex from '../components/MusicIndex.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/music-index', component: MusicIndex },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router