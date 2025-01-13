# 修仙人生

一款结合修仙概念的个人成长记录 Web App，用户可以通过移动设备浏览器访问，并记录日常生活中的锻炼、学习等行为，以修仙境界提升的方式呈现。

## 技术栈

- ✅ React 18
- ✅ TypeScript 5
- ✅ Vite
- ✅ Tailwind CSS
- ✅ React Router DOM
- ✅ Zustand (状态管理)
- ✅ Framer Motion (动画)
- ✅ Radix UI (无样式组件)

## 项目结构

```
src/
├── components/         # 共享组件
│   ├── ui/            # 基础UI组件
│   ├── layout/        # 布局组件
│   └── features/      # 功能组件
├── hooks/             # 自定义Hooks
├── pages/             # 页面组件
├── stores/            # 状态管理
├── types/             # TypeScript类型定义
├── utils/             # 工具函数
├── styles/            # 全局样式
└── constants/         # 常量定义
```

## 已完成功能

### 1. 项目基础设施 ✅

- [x] 项目初始化
- [x] TypeScript 配置
- [x] Tailwind CSS 配置
- [x] ESLint 配置
- [x] Prettier 配置
- [x] 路径别名配置
- [x] 目录结构搭建

### 2. 导航系统 ✅

- [x] 顶部导航栏 (TopNav)
- [x] 底部标签栏 (BottomNav)
- [x] 基础布局组件 (Layout)
- [x] 页面路由配置

### 3. 状态管理 ✅

- [x] 用户状态 (useUserStore)
  - [x] 修炼境界管理
  - [x] 属性系统
  - [x] 经验值系统
- [x] 任务系统 (useTaskStore)
  - [x] 任务管理
  - [x] 任务状态更新
  - [x] 任务进度追踪
- [x] 心魔系统 (useDemonStore)
  - [x] 心魔管理
  - [x] 心魔状态更新
  - [x] 心魔挑战基础结构

### 4. 基础组件 ✅

- [x] Progress (进度条组件)
- [x] CultivationOverview (修炼概览)
- [x] TaskOverview (任务概览)
- [x] DemonOverview (心魔概览)

### 5. 页面开发 ✅

- [x] 首页 (HomePage)
  - [x] 修炼数据概览
  - [x] 今日任务列表
  - [x] 心魔状态概览
- [x] 页面基础结构
  - [x] 修炼页面 (CultivationPage)
  - [x] 任务页面 (TasksPage)
  - [x] 心魔页面 (DemonsPage)
  - [x] 个人页面 (ProfilePage)

### 6. 类型定义 ✅

- [x] 修炼系统类型 (cultivation.ts)
  - [x] 境界等级 (RealmLevel)
  - [x] 修炼属性 (Attributes)
  - [x] 功法系统 (Technique)
  - [x] 装备系统 (Equipment)
  - [x] 修炼状态 (CultivationState)
- [x] 任务系统类型 (task.ts)
  - [x] 任务类型 (TaskType)
  - [x] 任务状态 (TaskStatus)
  - [x] 任务接口 (Task)
- [x] 心魔系统类型 (demon.ts)
  - [x] 心魔类型 (DemonType)
  - [x] 心魔状态 (DemonStatus)
  - [x] 心魔接口 (Demon)

## 待完成功能

### 1. 修炼系统扩展 🚧

- [ ] 境界突破机制
- [ ] 功法修炼系统
- [ ] 装备强化系统
- [ ] 属性成长系统

### 2. 任务系统扩展 🚧

- [ ] 任务创建界面
- [ ] 任务完成检查
- [ ] 任务奖励发放
- [ ] 任务进度追踪

### 3. 心魔系统扩展 🚧

- [ ] 心魔挑战界面
- [ ] 心魔转化机制
- [ ] 心魔奖励系统
- [ ] 心魔历史记录

### 4. 数据统计 🚧

- [ ] 修炼数据图表
- [ ] 任务完成统计
- [ ] 心魔克服记录
- [ ] 成长轨迹追踪

### 5. 界面优化 🚧

- [ ] 页面过渡动画
- [ ] 操作反馈优化
- [ ] 主题定制
- [ ] 响应式适配

### 6. 本地存储 🚧

- [ ] 数据备份功能
- [ ] 数据恢复功能
- [ ] 存储优化
- [ ] 数据迁移工具

## 安装和运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 开发规范

1. 组件开发规范

   - 使用函数式组件
   - 使用 TypeScript 类型
   - 遵循单一职责原则
   - 组件文件不超过 500 行

2. 样式开发规范

   - 使用 Tailwind CSS 类名
   - 遵循移动优先原则
   - 保持样式一致性
   - 实现响应式设计

3. 状态管理规范
   - 使用 Zustand 管理全局状态
   - 合理拆分 store
   - 实现数据持久化
   - 优化性能表现

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 发起 Pull Request

## 许可证

MIT
