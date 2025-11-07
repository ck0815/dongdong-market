# 东东瓜果蔬菜市场

一个专业的农产品批发交易市场网站，使用 Next.js 16+ 和 Tailwind CSS 构建。连接农田与市场，为农民和批发商提供优质服务。

## ✨ 特性

- 🎨 **多主题切换** - 支持4种主题颜色（生机绿、活力橙、清新蓝、大地棕）
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- ⚡ **性能优化** - 使用 Next.js 14+ 的最新特性，快速加载
- 🎭 **流畅动画** - 使用 Framer Motion 实现精美的页面动画
- 📝 **表单验证** - 使用 React Hook Form 和 Zod 进行表单验证
- 🛍️ **产品展示** - 完整的产品列表、筛选和排序功能
- 📧 **联系表单** - 带有验证的联系表单和 API 端点

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

### 代码检查

```bash
npm run lint
```

## 📁 项目结构

```
dongdong-market/
├── app/                    # Next.js 应用目录
│   ├── about/             # 关于我们页面
│   ├── api/               # API 路由
│   │   └── contact/       # 联系表单 API
│   ├── contact/           # 联系页面
│   ├── products/          # 产品页面
│   ├── globals.css        # 全局样式和主题变量
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── ui/                # 通用 UI 组件
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── Header.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx           # 首页 Hero 区域
│   ├── Features.tsx       # 特色功能展示
│   ├── ProductsPreview.tsx # 产品预览
│   └── ThemeToggle.tsx    # 主题切换器
├── lib/                   # 工具函数和数据
│   ├── utils.ts           # 通用工具函数
│   └── products.ts        # 产品数据
└── public/                # 静态资源

```

## 🎨 主题系统

网站支持4种主题颜色，用户可以通过导航栏的调色板图标切换：

1. **生机绿** - 默认主题，代表有机和自然
2. **活力橙** - 充满活力的橙色主题
3. **清新蓝** - 清新舒适的蓝色主题
4. **大地棕** - 沉稳自然的棕色主题

主题设置会保存在浏览器的 localStorage 中。

## 📦 技术栈

- **框架**: Next.js 16.0.1
- **UI 库**: React 19.2.0
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion 12
- **表单**: React Hook Form 7
- **验证**: Zod 4
- **图标**: Lucide React
- **语言**: TypeScript 5

## 📄 页面说明

### 首页 (/)
- Hero 区域展示主要信息
- 特色功能介绍（6个核心价值）
- 热门产品预览（4个精选产品）

### 产品页面 (/products)
- 完整的产品列表（12个产品）
- 分类筛选（全部、蔬菜、水果）
- 排序功能（默认、价格升序、价格降序、评分）
- 产品详细信息展示

### 关于我们 (/about)
- 公司介绍
- 使命与愿景
- 核心价值观
- 发展历程
- 数据统计

### 联系我们 (/contact)
- 联系信息展示
- 联系表单（带验证）
- 常见问题解答
- 地图占位符

## 🔧 自定义

### 修改主题颜色

编辑 `app/globals.css` 文件中的 CSS 变量：

```css
:root {
  --theme-primary: 76 175 80;
  --theme-secondary: 139 195 74;
  --theme-accent: 255 152 0;
  --theme-light: 200 230 201;
  --theme-dark: 46 125 50;
}
```

### 添加产品

编辑 `lib/products.ts` 文件，在 `products` 数组中添加新产品：

```typescript
{
  id: 13,
  name: "产品名称",
  category: "蔬菜", // 或 "水果"
  price: 19.99,
  rating: 4.8,
  image: "🥕",
  description: "产品描述",
  stock: 50,
  unit: "500g",
}
```

## 📝 待办事项

- [ ] 实现购物车功能
- [ ] 添加用户认证系统
- [ ] 集成支付网关
- [ ] 添加订单管理
- [ ] 实现产品搜索功能
- [ ] 添加产品详情页
- [ ] 集成真实的地图服务
- [ ] 实现邮件发送功能

## 📄 许可证

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

---

**东东瓜果蔬菜市场** - 专业农产品批发，连接农田与市场 🌱
