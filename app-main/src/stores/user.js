import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login as loginApi } from '@/api/auth'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const userInfo = ref(JSON.parse(localStorage.getItem('userInfo') || '{}'))
  const currentApp = ref(localStorage.getItem('currentApp') || 'app1')

  const login = async (username, password) => {
    try {
      const res = await loginApi(username, password)
      token.value = res.token
      userInfo.value = res.userInfo
      localStorage.setItem('token', res.token)
      localStorage.setItem('userInfo', JSON.stringify(res.userInfo))
      return res
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    token.value = ''
    userInfo.value = {}
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
  }

  const setCurrentApp = (app) => {
    currentApp.value = app
    localStorage.setItem('currentApp', app)
  }

  return {
    token,
    userInfo,
    currentApp,
    login,
    logout,
    setCurrentApp
  }
})
