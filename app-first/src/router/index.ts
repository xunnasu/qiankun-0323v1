import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/app-first',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/app-first/data-management',
    name: 'DataManagement',
    component: () => import('@/views/DataManagement.vue')
  },
  {
    path: '/app-first/user-management',
    name: 'UserManagement',
    component: () => import('@/views/UserManagement.vue')
  },
  // 保留根路径，以便子应用可以独立运行
  {
    path: '/',
    redirect: '/app-first'
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
