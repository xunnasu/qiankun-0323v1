# 企业级管理系统主应用 (app-main)

基于 Vue 3 + Vite + Element Plus + Pinia 的企业级微前端主应用，支持多子应用管理和统一登录。

## 技术栈

- **框架**: Vue 3.5.30
- **构建工具**: Vite 8.0.1
- **UI组件库**: Element Plus 2.13.6 
- **路由**: Vue Router 4.6.4
- **状态管理**: Pinia 3.0.4
- **HTTP客户端**: Axios 1.13.6
- **图标库**: @element-plus/icons-vue 2.3.2

## 项目结构

```
app-main/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API接口
│   │   └── auth.js        # 认证相关接口
│   ├── assets/            # 资源文件
│   │   └── styles/        # 全局样式
│   │       └── index.css  # 主样式文件
│   ├── components/        # 公共组件
│   ├── composables/       # 组合式函数
│   ├── layouts/           # 布局组件
│   │   └── MainLayout.vue # 主布局
│   ├── router/            # 路由配置
│   │   └── index.js       # 路由主文件
│   ├── stores/            # 状态管理
│   │   ├── app.js         # 应用状态
│   │   └── user.js        # 用户状态
│   ├── utils/             # 工具函数
│   │   └── request.js     # Axios封装
│   ├── views/             # 页面组件
│   │   ├── App1.vue       # 数据平台 (Vue)
│   │   ├── App2.vue       # 仿真平台 (React)
│   │   ├── Dashboard.vue  # 首页
│   │   └── Login.vue      # 登录页
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index.html
├── package.json
└── vite.config.js         # Vite配置
```

## 核心功能

### 1. 统一登录
- Mock登录功能（测试账号: admin / 123456）
- JWT Token认证
- 路由守卫保护
- 自动登录状态保持

### 2. 子应用管理
- 支持多子应用切换
- 数据平台: Vue应用
- 仿真平台: React应用
- 独立的菜单配置
- 独立的布局配置

### 3. 主应用布局
- 侧边栏导航（可折叠）
- 顶部导航栏
- 面包屑导航
- 用户信息展示
- 应用切换器

### 4. 状态管理
- 用户信息管理
- Token管理
- 应用切换状态
- 持久化存储

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 http://localhost:5173 启动

### 生产构建

```bash
npm run build
```

### 预览构建

```bash
npm run preview
```

## 登录说明

系统提供Mock登录功能，使用以下测试账号：

- 用户名: `admin`
- 密码: `123456`

## 子应用配置

子应用配置位于 `src/stores/app.js`，包含：

- 应用ID
- 应用名称
- 应用类型（vue/react）
- 应用图标
- 应用描述
- 布局类型
- 菜单配置

## 样式主题

项目采用类 Arco Design 风格，主要颜色变量：

- 主色: `#165dff`
- 文字颜色: `#1d2129`
- 边框颜色: `#e5e6eb`
- 背景色: `#f2f3f5`
- 侧边栏背景: `#232324`

## 路由说明

- `/login` - 登录页
- `/` - 主布局（需要认证）
- `/dashboard` - 首页
- `/app1` - 数据平台 (Vue)
- `/app2` - 仿真平台 (React)

## API接口

### 认证接口

- `login(username, password)` - 用户登录
- `getUserInfo()` - 获取用户信息
- `logout()` - 用户登出

## 开发规范

### 组件命名
- 使用 PascalCase 命名组件文件
- 组件内部使用 kebab-case 引用

### 样式规范
- 使用 scoped 样式
- 遵循 BEM 命名规范
- 使用 CSS 变量定义主题色

### 代码规范
- 使用 Composition API
- 使用 `<script setup>` 语法
- 统一使用 ES6+ 语法

## 扩展开发

### 添加新子应用

1. 在 `src/stores/app.js` 中添加应用配置
2. 在 `src/views/` 中创建应用页面
3. 在 `src/router/index.js` 中添加路由

### 添加新页面

1. 在 `src/views/` 中创建页面组件
2. 在 `src/router/index.js` 中配置路由
3. 在侧边栏菜单中添加菜单项

## 注意事项

- 所有需要认证的路由都配置了 `meta.requiresAuth: true`
- Token 存储在 localStorage 中
- 用户信息会持久化存储
- 应用切换状态会持久化存储
