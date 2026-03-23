<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: #e8f3ff;">
              <el-icon :size="24" color="#165dff"><User /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">1,234</div>
              <div class="stat-label">用户总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: #e8ffea;">
              <el-icon :size="24" color="#00b42a"><Document /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">5,678</div>
              <div class="stat-label">文档数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: #fff7e8;">
              <el-icon :size="24" color="#ff7d00"><DataAnalysis /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">9,012</div>
              <div class="stat-label">数据统计</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: #ffe8e8;">
              <el-icon :size="24" color="#f53f3f"><Warning /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">345</div>
              <div class="stat-label">待处理事项</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>子应用列表</span>
            </div>
          </template>
          <div class="app-list">
            <div
              v-for="app in appStore.apps"
              :key="app.id"
              class="app-item"
              @click="navigateToApp(app.id)"
            >
              <div class="app-icon">
                <el-icon :size="32">
                  <component :is="app.icon" />
                </el-icon>
              </div>
              <div class="app-info">
                <div class="app-name">{{ app.name }}</div>
                <div class="app-desc">{{ app.description }}</div>
              </div>
              <el-icon class="app-arrow"><ArrowRight /></el-icon>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>系统信息</span>
            </div>
          </template>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="系统版本">v1.0.0</el-descriptions-item>
            <el-descriptions-item label="Vue版本">3.5.30</el-descriptions-item>
            <el-descriptions-item label="Element Plus">2.13.6</el-descriptions-item>
            <el-descriptions-item label="构建工具">Vite 8.0.1</el-descriptions-item>
            <el-descriptions-item label="状态管理">Pinia 3.0.4</el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { User, Document, DataAnalysis, Warning, ArrowRight } from '@element-plus/icons-vue'

const router = useRouter()
const appStore = useAppStore()

const navigateToApp = (appId) => {
  appStore.setCurrentApp(appId)
  router.push(`/${appId}`)
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.stat-card {
  cursor: pointer;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #1d2129;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #86909c;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.app-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.app-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #f2f3f5;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.app-item:hover {
  background: #e5e6eb;
  transform: translateX(4px);
}

.app-icon {
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #165dff;
  margin-right: 12px;
}

.app-info {
  flex: 1;
}

.app-name {
  font-size: 16px;
  font-weight: 600;
  color: #1d2129;
  margin-bottom: 4px;
}

.app-desc {
  font-size: 12px;
  color: #86909c;
}

.app-arrow {
  color: #86909c;
}
</style>
