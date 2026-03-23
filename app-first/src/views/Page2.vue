<template>
  <div class="page-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>页面2</span>
          <el-button size="small" @click="goBack">返回</el-button>
        </div>
      </template>
      
      <el-alert
        title="这是页面2的内容"
        type="warning"
        description="展示Vue 3 + TypeScript的表单处理能力"
        :closable="false"
        show-icon
        style="margin-bottom: 20px;"
      />

      <el-form :model="form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option label="管理员" value="admin" />
            <el-option label="用户" value="user" />
            <el-option label="访客" value="guest" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="form.status" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-divider />

      <h3>表单数据预览</h3>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="用户名">{{ form.username || '-' }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ form.email || '-' }}</el-descriptions-item>
        <el-descriptions-item label="角色">{{ form.role || '-' }}</el-descriptions-item>
        <el-descriptions-item label="状态">{{ form.status ? '启用' : '禁用' }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const form = reactive({
  username: '',
  email: '',
  role: '',
  status: true
})

const handleSubmit = () => {
  ElMessage.success('提交成功')
  console.log('表单数据:', form)
}

const handleReset = () => {
  form.username = ''
  form.email = ''
  form.role = ''
  form.status = true
  ElMessage.info('表单已重置')
}

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
</style>
