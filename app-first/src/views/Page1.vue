<template>
  <div class="page-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>页面1</span>
          <el-button size="small" @click="goBack">返回</el-button>
        </div>
      </template>
      
      <el-alert
        title="这是页面1的内容"
        type="success"
        description="展示Vue 3 + TypeScript的页面开发能力"
        :closable="false"
        show-icon
        style="margin-bottom: 20px;"
      />

      <el-descriptions title="页面信息" :column="2" border>
        <el-descriptions-item label="页面名称">页面1</el-descriptions-item>
        <el-descriptions-item label="技术栈">Vue 3 + TypeScript</el-descriptions-item>
        <el-descriptions-item label="状态">开发中</el-descriptions-item>
        <el-descriptions-item label="最后更新">{{ updateTime }}</el-descriptions-item>
      </el-descriptions>

      <el-divider />

      <h3>功能演示</h3>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="hover">
            <template #header>
              <span>计数器示例</span>
            </template>
            <div class="counter-demo">
              <el-button @click="count--">-</el-button>
              <span class="count">{{ count }}</span>
              <el-button @click="count++">+</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            <template #header>
              <span>输入示例</span>
            </template>
            <el-input v-model="inputValue" placeholder="请输入内容" />
            <p style="margin-top: 10px;">输入内容: {{ inputValue }}</p>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const count = ref(0)
const inputValue = ref('')
const updateTime = ref(new Date().toLocaleString())

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.page-container {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-divider {
  margin: 24px 0;
}

h3 {
  color: #1d2129;
  margin-bottom: 16px;
}

.counter-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.count {
  font-size: 24px;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
}
</style>
