import Koa from "koa";
import Koa2Cors from "koa2-cors";
import KoaBodyParser from "koa-bodyparser";
import Router from "koa-router";
import exitHook from "exit-hook";

const Server = new Koa();
const router = new Router();

router.get("/hello", async (ctx: Koa.BaseContext, next) => {
  ctx.body = { message: "Hello World!" };
  await next();
});

Server.use(Koa2Cors()).use(KoaBodyParser());
Server.use(router.routes()).use(router.allowedMethods());

Server.listen(4000, () => {
  console.log("Server listening port 4000.");
});

exitHook(() => {
  console.log("Exiting");
});
