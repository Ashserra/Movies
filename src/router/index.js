import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../components/Search.vue'
import TvDetail from '../views/TvDetail.vue'
import Comedy from '../views/Comedy.vue'
import Drama from '../views/Drama.vue'
import Action from '../views/Action.vue'

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  

  {
    path: '/search',
    name: 'Search',
    component: Search,
  },

  {
    path: '/shows/:id',
    name: 'Tv Detail',
    component: TvDetail,
  },

  {
    path: '/drama',
    name: 'Drama',
    component: Drama,
  },

  {
    path: '/comedy',
    name: 'Comedy',
    component: Comedy,
  },

  {
    path: '/action',
    name: 'Action',
    component: Action,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
