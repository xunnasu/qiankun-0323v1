<template>
  <div class="main-layout">
    <el-container class="layout-container">
      <el-aside :width="isCollapse ? '64px' : '240px'" class="layout-aside">
        <div class="logo">
          <el-icon v-if="!isCollapse" :size="24" color="#ffffff"><Platform /></el-icon>
          <span v-if="!isCollapse" class="logo-text">企业管理系统</span>
          <el-icon v-else :size="24" color="#ffffff"><Platform /></el-icon>
        </div>
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :collapse-transition="false"
          background-color="#232324"
          text-color="#ffffff"
          active-text-color="#ffffff"
          class="layout-menu"
          @select="handleMenuSelect"
        >
          <!-- 数据平台的菜单 -->
          <template v-if="appStore.currentAppId === 'app-first'">
            <el-menu-item index="/app-first" class="nav-item">
              <el-icon class="nav-icon"><Document /></el-icon>
              <template #title>
                <span class="nav-text">仪表盘</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/app-first/data-management" class="nav-item">
              <el-icon class="nav-icon"><Document /></el-icon>
              <template #title>
                <span class="nav-text">数据管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/app-first/user-management" class="nav-item">
              <el-icon class="nav-icon"><Document /></el-icon>
              <template #title>
                <span class="nav-text">用户管理</span>
              </template>
            </el-menu-item>
          </template>
          
          <!-- 子应用2的菜单 -->
          <template v-else-if="appStore.currentAppId === 'app-second'">
            <el-menu-item index="/app-second" class="nav-item">
              <el-icon class="nav-icon"><Document /></el-icon>
              <template #title>
                <span class="nav-text">模型管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/app-second/task-management" class="nav-item">
              <el-icon class="nav-icon"><Document /></el-icon>
              <template #title>
                <span class="nav-text">任务管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/app-second/result-testing" class="nav-item">
              <el-icon class="nav-icon"><Document /></el-icon>
              <template #title>
                <span class="nav-text">结果测试</span>
              </template>
            </el-menu-item>
          </template>
          
          <!-- 默认菜单 -->
          <template v-else>
            <el-menu-item index="/dashboard" class="nav-item">
              <el-icon class="nav-icon"><Document /></el-icon>
              <template #title>
                <span class="nav-text">首页</span>
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>

      <el-container class="layout-main">
        <el-header class="layout-header">
          <div class="app-tabs">
            <div
              v-for="app in appStore.apps"
              :key="app.id"
              :class="['app-tab', { active: appStore.currentAppId === app.id }]"
              @click="switchApp(app.id)"
            >
              <span class="app-tab-text">{{ app.name }}</span>
            </div>
          </div>

          <div class="header-right">
            <el-dropdown trigger="click" @command="handleCommand">
              <div class="user-dropdown">
                <el-avatar :size="32" :src="userStore.userInfo.avatar">
                  {{ userStore.userInfo.nickname?.charAt(0) }}
                </el-avatar>
                <span class="username">{{ userStore.userInfo.nickname }}</span>
                <el-icon><ArrowDown /></el-icon>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="profile">
                    <el-icon><User /></el-icon>
                    个人中心
                  </el-dropdown-item>
                  <el-dropdown-item command="settings">
                    <el-icon><Setting /></el-icon>
                    系统设置
                  </el-dropdown-item>
                  <el-dropdown-item divided command="logout">
                    <el-icon><SwitchButton /></el-icon>
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="layout-content">
          <div class="content-header">
            <h2>{{ currentApp?.name || '子应用' }}</h2>
          </div>
          <div class="content-body">
            <router-view v-slot="{ Component }">
              <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import {
  Platform, Document, ArrowDown, User, Setting, SwitchButton
} from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()

const isCollapse = ref(false)
const activeMenu = ref('/')

const currentApp = computed(() => appStore.getCurrentApp())

const handleMenuSelect = (index) => {
  activeMenu.value = index
  router.push(index)
}

const switchApp = (appId) => {
  appStore.setCurrentApp(appId)
  router.push(`/${appId}`)
}

const handleCommand = async (command) => {
  switch (command) {
    case 'profile':
      ElMessage.info('个人中心功能开发中')
      break
    case 'settings':
      ElMessage.info('系统设置功能开发中')
      break
    case 'logout':
      try {
        await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        userStore.logout()
        router.push('/login')
        ElMessage.success('退出成功')
      } catch {
      }
      break
  }
}

watch(() => route.path, (newPath) => {
  activeMenu.value = newPath
  if (newPath.includes('app-first')) {
    appStore.setCurrentApp('app-first')
  } else if (newPath.includes('app-second')) {
    appStore.setCurrentApp('app-second')
  }
})
</script>

<style scoped>
.main-layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.layout-container {
  height: 100%;
}

.layout-aside {
  background-color: #232324;
  transition: width 0.3s;
  overflow: hidden;
}

.logo {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  background-color: #1f1f20;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid #2e2e30;
  padding: 0 20px;
}

.logo-text {
  white-space: nowrap;
}

.layout-menu {
  border-right: none;
  height: calc(100vh - 56px);
  overflow-y: auto;
  padding: 16px 0;
}

.layout-menu:not(.el-menu--collapse) {
  width: 240px;
}

.nav-item {
  margin: 0 12px 8px 12px;
  border-radius: 8px;
  overflow: hidden;
}

.nav-item.is-active {
  background-color: #165dff !important;
}

.nav-icon {
  font-size: 16px;
  margin-right: 12px;
}

.nav-text {
  font-size: 14px;
  font-weight: 500;
}

.layout-main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.layout-header {
  height: 56px;
  background-color: #333333;
  border-bottom: 1px solid #444444;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.app-tabs {
  display: flex;
  gap: 0;
  background: transparent;
  padding: 0;
  border-radius: 0;
}

.app-tab {
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  color: #cccccc;
  font-weight: 500;
  border-bottom: 3px solid transparent;
}

.app-tab:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.app-tab.active {
  background: rgba(255, 255, 255, 0.1);
  color: #165dff;
  border-bottom-color: #165dff;
}

.app-tab-text {
  white-space: nowrap;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
}

.user-dropdown:hover {
  background: rgba(255, 255, 255, 0.1);
}

.username {
  font-size: 14px;
  color: #ffffff;
}

.layout-content {
  flex: 1;
  overflow-y: auto;
  background-color: #f5f5f5;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.content-header {
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.content-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin: 0;
}

.content-body {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.3s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
