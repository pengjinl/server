const express = require("express");
const { resolve } = require("path");
const multiparty = require("connect-multiparty");
const { SERVER_CONFIG } = require("./config");
// 加载解析body的插件
const bodyparser = require("body-parser");
const app = express();
//  为了能够接收不同的数据格式 使用一些中间件
app
  .use(express.static(resolve(__dirname, "./public")))
  .use(bodyparser.json())
  // .use(multiparty())
  .use(express.json())
  .use(express.urlencoded());
// 引入数据ku
require("./db/connect");
// 登录路由中间件
const loginRouter = require("./routers/login");
// 注册路由中间件
const registerRouter = require("./routers/register");
// 首页路由中间件
const homeRouter = require("./routers/Home");
// 新闻页路由
const newsRouter = require("./routers/News");
// 店铺首页路由
const shophomeRouter = require("./routers/Shophome");
// 商品详情页路由
const goodsdetailRouter = require("./routers/Details");
// 购物列表
const cartlistRouter = require("./routers/cart");
const addressRouter = require("./routers/Address");
// 使用登录路由中间件
app.use("/login", loginRouter);
// 注册
app.use("/register", registerRouter);
// 首页接口所需数据
app.use("/home", homeRouter);
// 新闻页所需数据
app.use("/news", newsRouter);
// 使用店铺首页路由中间件 获取商品列表
app.use("/shophome", shophomeRouter);
// 使用商品详情路由
app.use("/detail", goodsdetailRouter);
// 购物车列表
app.use("/cart", cartlistRouter);
app.use("/address", addressRouter);
// 开启服务器
app.listen(SERVER_CONFIG.port, SERVER_CONFIG.host, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is ok http://localhost:4000");
  }
});
