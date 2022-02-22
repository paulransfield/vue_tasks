import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Wiki from '../views/Wiki'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: Wiki,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
