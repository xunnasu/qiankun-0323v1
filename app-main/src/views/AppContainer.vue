<template>
  <div class="app-container">
    <div class="app-iframe-container">
      <iframe
        ref="iframeRef"
        :src="appUrl"
        class="app-iframe"
        frameborder="0"
        @load="handleIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const iframeRef = ref(null)

const appUrl = computed(() => {
  const baseUrl = route.meta.appUrl || ''
  // 包含当前路由的完整路径
  return `${baseUrl}${route.path}`
})

const handleIframeLoad = () => {
  console.log('子应用加载完成')
}

onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.src = appUrl.value
  }
})

// 监听路由变化，更新iframe的src
watch(() => route.path, (newPath) => {
  if (iframeRef.value) {
    iframeRef.value.src = appUrl.value
  }
}, { immediate: true })
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.app-iframe-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
