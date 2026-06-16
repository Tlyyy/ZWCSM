# ZWCSM
ZWCSM

## 部署方式

推荐部署到 Vercel，页面仍然是静态体验，同步接口由 Next.js API 提供。

### 1. Supabase 建表
1. 在 Supabase 的 SQL Editor 运行 `supabase-schema.sql`。

### 2. Vercel 环境变量
在 Vercel 项目 Settings -> Environment Variables 增加：

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

也可以临时使用 `SUPABASE_ANON_KEY`，但正式建议使用 `SUPABASE_SERVICE_ROLE_KEY`，只放在服务端环境变量里，不写进前端代码。

### 3. 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

### 4. 跨设备同步
1. 打开网页的「同步」页，填写同一个房间号，例如 `zwcsm-8x29-lunch`。
2. 第一台设备点 **上传到云端**。
3. 其他设备点 **从云端拉取**。
4. 需要自动同步时，点 **开启自动同步**。

同步路径：

`浏览器 localStorage -> Next.js /api/sync -> Supabase PostgreSQL -> 其他设备`
