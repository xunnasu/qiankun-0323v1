import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/dashboard',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'app-first',
        name: 'AppFirst',
        component: () => import('@/views/AppContainer.vue'),
        meta: { 
          title: '数据平台',
          appUrl: 'http://localhost:5176'
        }
      },
      {
        path: 'app-first/:pathMatch(.*)*',
        name: 'AppFirstChild',
        component: () => import('@/views/AppContainer.vue'),
        meta: { 
          title: '数据平台',
          appUrl: 'http://localhost:5176'
        }
      },
      {
        path: 'app-second',
        name: 'AppSecond',
        component: () => import('@/views/AppContainer.vue'),
        meta: { 
          title: '子应用2',
          appUrl: 'http://localhost:5177'
        }
      },
      {
        path: 'app-second/:pathMatch(.*)*',
        name: 'AppSecondChild',
        component: () => import('@/views/AppContainer.vue'),
        meta: { 
          title: '子应用2',
          appUrl: 'http://localhost:5177'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.token

  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else if (to.path === '/login' && token) {
    next('/')
  } else {
    next()
  }
})

export default router
