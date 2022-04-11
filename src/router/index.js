import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../components/Search.vue'
import TvDetail from '../views/TvDetail.vue'


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
 
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
