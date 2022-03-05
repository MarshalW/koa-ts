# koa-ts

使用 KOA 和 typescript 的简单示例

## 特性

- typescript 使用 koa/ koa router
- docker 构建镜像
- 使用 tini 防止停止 docker 容器时的 10 秒延时
- 使用 exit-handler 在退出 node.js 服务时正确释放资源，另外也起到类似 tini 的作用

## ts 的构建和运行

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

## TODO

- 运行时输入端口号
- 日志的处理，开发环境和云原生环境
- 加入数据库/orm 支持，验证退出架构是否正确
- docker non-root 处理
