<template>
  <div class="app-layout">
    <el-container class="layout-container">
      <el-aside width="240px" class="layout-aside">
        <div class="logo">
          <h2>App First</h2>
        </div>
        <el-menu
          :default-active="activeMenu"
          background-color="#232324"
          text-color="#ffffff"
          active-text-color="#165dff"
          class="layout-menu"
          @select="handleMenuSelect"
        >
          <el-menu-item index="/">
            <el-icon><Document /></el-icon>
            <template #title>仪表盘</template>
          </el-menu-item>
          <el-menu-item index="/data-management">
            <el-icon><Document /></el-icon>
            <template #title>数据管理</template>
          </el-menu-item>
          <el-menu-item index="/user-management">
            <el-icon><Document /></el-icon>
            <template #title>用户管理</template>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container class="layout-main">
        <el-main class="layout-content">
          <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Document } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const activeMenu = ref('/')

const handleMenuSelect = (index) => {
  router.push(index)
}

watch(() => route.path, (newPath) => {
  activeMenu.value = newPath
})
</script>

<style scoped>
.app-layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.layout-container {
  height: 100%;
}

.layout-aside {
  background-color: #232324;
  overflow: hidden;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f20;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid #2e2e30;
}

.layout-menu {
  border-right: none;
  height: calc(100vh - 60px);
  overflow-y: auto;
  padding: 16px 0;
}

.layout-main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.layout-content {
  flex: 1;
  overflow-y: auto;
  background-color: #f5f5f5;
  padding: 24px;
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
