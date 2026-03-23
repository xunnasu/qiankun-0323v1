import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const apps = ref([
    {
      id: 'app-first',
      name: '数据平台',
      type: 'vue',
      icon: 'Document',
      description: 'Vue3 + TypeScript应用',
      layout: 'default',
      url: 'http://localhost:5174',
      menu: [
        { path: '/app-first', title: '首页', icon: 'HomeFilled' },
        { path: '/app-first/page1', title: '页面1', icon: 'Document' },
        { path: '/app-first/page2', title: '页面2', icon: 'DocumentCopy' }
      ]
    },
    {
      id: 'app-second',
      name: '仿真平台',
      type: 'react',
      icon: 'DocumentCopy',
      description: 'React18 + TypeScript应用',
      layout: 'sidebar',
      url: 'http://localhost:5175',
      menu: [
        { path: '/app-second', title: '首页', icon: 'HomeFilled' },
        { path: '/app-second/dashboard', title: '仪表盘', icon: 'DataAnalysis' },
        { path: '/app-second/settings', title: '设置', icon: 'Setting' }
      ]
    }
  ])

  const currentAppId = ref(localStorage.getItem('currentAppId') || 'app-first')

  const setCurrentApp = (appId) => {
    currentAppId.value = appId
    localStorage.setItem('currentAppId', appId)
  }

  const getCurrentApp = () => {
    return apps.value.find(app => app.id === currentAppId.value)
  }

  const getAppMenu = (appId) => {
    const app = apps.value.find(a => a.id === appId)
    return app ? app.menu : []
  }

  return {
    apps,
    currentAppId,
    setCurrentApp,
    getCurrentApp,
    getAppMenu
  }
})
