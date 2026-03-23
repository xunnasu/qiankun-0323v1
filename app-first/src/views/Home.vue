<template>
  <div class="home-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>数据平台 - Vue3 + TypeScript</span>
          <el-tag type="success">Vue 3</el-tag>
        </div>
      </template>
      
      <el-alert
        title="欢迎使用数据平台"
        type="info"
        description="这是一个基于Vue 3 + TypeScript的数据平台应用，展示Vue技术栈的功能和特性。"
        :closable="false"
        show-icon
        style="margin-bottom: 20px;"
      />

      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover" class="feature-card">
            <el-icon :size="40" color="#165dff" style="margin-bottom: 12px;"><Monitor /></el-icon>
            <h3>响应式设计</h3>
            <p>基于Vue 3 Composition API构建的响应式界面</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" class="feature-card">
            <el-icon :size="40" color="#00b42a" style="margin-bottom: 12px;"><Tools /></el-icon>
            <h3>组件化开发</h3>
            <p>高度可复用的组件库，提升开发效率</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" class="feature-card">
            <el-icon :size="40" color="#ff7d00" style="margin-bottom: 12px;"><Lightning /></el-icon>
            <h3>高性能</h3>
            <p>优化的渲染机制，提供流畅的用户体验</p>
          </el-card>
        </el-col>
      </el-row>

      <el-divider />

      <h3>功能菜单</h3>
      <el-menu
        :default-active="activeMenu"
        mode="horizontal"
        @select="handleMenuSelect"
      >
        <el-menu-item index="page1">页面1</el-menu-item>
        <el-menu-item index="page2">页面2</el-menu-item>
        <el-menu-item index="settings">设置</el-menu-item>
      </el-menu>

      <div class="page-content">
        <el-empty v-if="!activeMenu" description="请选择一个菜单项" />
        <div v-else>
          <h4>{{ getMenuTitle(activeMenu) }}</h4>
          <p>这是{{ getMenuTitle(activeMenu) }}的内容区域，可以在这里添加具体的业务逻辑和组件。</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Monitor, Tools, Lightning } from '@element-plus/icons-vue'

const router = useRouter()
const activeMenu = ref('')

const handleMenuSelect = (index: string) => {
  activeMenu.value = index
  if (index !== 'settings') {
    router.push(`/${index}`)
  }
}

const getMenuTitle = (index: string): string => {
  const titles: Record<string, string> = {
    page1: '页面1',
    page2: '页面2',
    settings: '设置'
  }
  return titles[index] || ''
}
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feature-card {
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-card h3 {
  margin: 12px 0 8px;
  color: #1d2129;
}

.feature-card p {
  font-size: 14px;
  color: #86909c;
  margin: 0;
}

.el-divider {
  margin: 24px 0;
}

h3 {
  color: #1d2129;
  margin-bottom: 16px;
}

.page-content {
  margin-top: 24px;
  padding: 24px;
  background: #f2f3f5;
  border-radius: 8px;
}

.page-content h4 {
  color: #1d2129;
  margin-bottom: 12px;
}

.page-content p {
  color: #4e5969;
  line-height: 1.6;
}
</style>
