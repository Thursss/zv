import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView'
import TimeLine from '@/views/_test/echarts-timeline'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/test/timeline',
    name: 'TimeLine',
    component: TimeLine,
  },
  {
    path: '/test/map',
    name: 'EchartMap',
    component: import('@/views/_test/echarts-map'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
