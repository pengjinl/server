const express = require("express");
const { resolve } = require("path");
const multiparty = require("connect-multiparty");
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
// 使用登录路由中间件
app.use("/login", loginRouter);
app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is ok http://localhost:4000");
  }
});
