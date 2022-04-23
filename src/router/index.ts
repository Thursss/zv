import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/test',
    name: 'Test',
    component: import('@/views/_test/index'),
  },
  {
    path: '/test/timeline',
    name: 'TimeLine',
    component: import('@/views/_test/echarts-timeline'),
  },
  {
    path: '/test/map',
    name: 'EchartMap',
    component: import('@/views/_test/echarts-map'),
  },
  {
    path: '/test/gl',
    name: 'EchartMap',
    component: import('@/views/_test/echarts-gl'),
  },
  {
    path: '/test/fight-earch',
    name: 'EchartMap',
    component: import('@/views/_test/echarts-fightEarth'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
