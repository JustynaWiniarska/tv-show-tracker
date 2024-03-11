import { createRouter, createWebHistory } from 'vue-router'
import MusicIndex from '../components/MusicIndex.vue'
import Playlist from '../components/Playlist.vue'

const routes = [
  { path: '/', component: MusicIndex },
  { path: '/playlist/:slug', component: Playlist },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router