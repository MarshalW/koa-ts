# koa-ts

使用 KOA 和 typescript 的简单示例

## 使用

开发：

```bash
$ npm run watch
```

正式使用：

```bash
# 构建
$ npm run build

# 运行
$ npm start
```

## 特性

- typescript 使用 koa/ koa router
- 使用 tini 防止停止 docker 容器时的 10 秒延时
- 使用 exit-handler 在退出 node.js 服务时正确释放资源
