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

### 2. 修仙体系模块 ✅

#### 2.1 类型定义

- [x] 境界等级 (RealmLevel)
- [x] 修炼属性 (Attribute)
- [x] 装备系统 (Equipment)
- [x] 功法系统 (Technique)
- [x] 技能系统 (Skill)
- [x] 修炼状态 (CultivationState)

#### 2.2 状态管理

- [x] 经验值系统
- [x] 境界提升
- [x] 装备管理
- [x] 功法管理
- [x] 技能管理

#### 2.3 界面组件

- [x] 修炼境界面板 (CultivationPanel)
- [x] 功法列表 (TechniqueList)
- [x] 装备列表 (EquipmentList)
- [x] 技能列表 (SkillList)
- [x] 修仙页面 (CultivationPage)

#### 2.4 路由配置

- [x] 基础路由设置
- [x] 主页面路由

## 待完成功能

### 1. 导航系统 🚧

- [ ] 顶部导航栏
- [ ] 底部标签栏
- [ ] 页面过渡动画

### 2. 获取经验值系统 🚧

- [ ] 任务系统
- [ ] 日常修炼
- [ ] 突破机制

### 3. 功法系统扩展 🚧

- [ ] 功法商店
- [ ] 功法突破
- [ ] 功法组合

### 4. 装备系统扩展 🚧

- [ ] 装备商店
- [ ] 装备强化
- [ ] 装备套装

### 5. 技能系统扩展 🚧

- [ ] 技能商店
- [ ] 技能升级
- [ ] 技能组合

### 6. 心魔系统 🚧

- [ ] 心魔发现
- [ ] 心魔挑战
- [ ] 心魔转化

### 7. 数据持久化 🚧

- [ ] 本地存储
- [ ] 数据导出
- [ ] 数据导入

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
