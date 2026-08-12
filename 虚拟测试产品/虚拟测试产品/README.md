# ⚡ Assessment Studio - 8款热门独立单页测评产品

本项目包含 **8 款爆款单一独立 Landing Page 测评** 及 1 个统一测试发射台（主页）。纯静态 HTML+CSS+JS 架构，无需后端数据库，支持 1 键部署上线，内置微信小程序（一子一木）积分与抽奖引流入口。

---

## 📄 独立单页列表 (Deployed Links)

部署上线后，你可以直接将以下单个 `.html` 链接贴到微信公众号、小红书、朋友圈、抖音短视频或嵌入小程序中单独推广：

| 测评主题 | 单页文件名 | 访问路径示例 |
| :--- | :--- | :--- |
| 🏡 **全平台索引主页** | `index.html` | `https://your-project.vercel.app/` |
| 😟 **GAD-7 焦虑与内耗测评** | `gad7.html` | `https://your-project.vercel.app/gad7.html` |
| 🧠 **MBTI 16型人格专业测评** | `mbti.html` | `https://your-project.vercel.app/mbti.html` |
| 💘 **关系信号深度拆解** | `dating.html` | `https://your-project.vercel.app/dating.html` |
| 💕 **恋爱依恋类型测评** | `attachment.html` | `https://your-project.vercel.app/attachment.html` |
| 🌊 **大五人格专业测评 (OCEAN)** | `bigfive.html` | `https://your-project.vercel.app/bigfive.html` |
| 🔋 **社畜精神续航与发疯指数** | `battery.html` | `https://your-project.vercel.app/battery.html` |
| 🎭 **高情商与防PUA测评** | `eq.html` | `https://your-project.vercel.app/eq.html` |
| 🧭 **霍兰德职业兴趣测评 (RIASEC)** | `holland.html` | `https://your-project.vercel.app/holland.html` |

---

## 🚀 部署上线指引 (Deployment Guide)

### 方案 A：GitHub + Vercel（推荐，全自动更新 & 免费 HTTPS）

1. **新建 GitHub 仓库**：
   * 打开 [GitHub](https://github.com/new)，新建一个公开仓库，例如命名为 `quiz-landing-pages`。

2. **推送代码至 GitHub**（在项目目录下打开终端执行）：
   ```bash
   git remote add origin https://github.com/你的用户名/quiz-landing-pages.git
   git branch -M main
   git push -u origin main
   ```

3. **绑定 Vercel 部署**：
   * 打开 [Vercel 官网](https://vercel.com/) 并用 GitHub 账号登录。
   * 点击 **"Add New..." -> "Project"**。
   * 选择刚刚创建的 `quiz-landing-pages` 仓库，框架选 **"Other"**（原生静态项目不需要任何 Build 命令）。
   * 点击 **"Deploy"**，等待 10 秒即上线！你将获得免费域名（如 `https://quiz-landing-pages.vercel.app`）。

---

### 方案 B：Vercel 网页拖拽部署（最简单，无需配置 Git）

1. 打开 [Vercel 仪表盘](https://vercel.com/dashboard)。
2. 直接将本地文件夹 `d:\虚拟测试产品` 拖入 Vercel 网页中的 **Deploy** 拖拽区域。
3. 点击确认，10 秒内自动生成公网在线链接！

---

### 方案 C：免费使用 GitHub Pages

1. 将代码 Push 至 GitHub 后，进入仓库的 **Settings -> Pages**。
2. 在 **Branch** 处选择 `main` 分支，Folder 选择 `/ (root)`，点击 **Save**。
3. 稍等 1 分钟，页面右上角即生成域名：`https://你的用户名.github.io/quiz-landing-pages/`！

---

## 📱 微信小程序跳转说明

项目内引流按钮与口令已挂载：
`#小程序://一子一木/0JPDrt84ecI5Gwd`
点击按钮可一键唤起小程序或自动复制口令。
