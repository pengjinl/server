const express = require("express");
const { resolve } = require("path");
const app = express();
app.use(express.static(resolve(__dirname, "./public")));
// 引入数据ku
require('./db/connect')
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
