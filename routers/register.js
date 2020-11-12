const express = require("express");
const router = express.Router();
// 生成token
const { sign } = require("../utils/token");
// 引入users数据表
const Users = require("../db/model/usersModel");
// 引入md5函数
const md5 = require("../utils/md5");
// 引入moment
const moment = require("../utils/moment");
/**@api {get} /register/mail 邮箱注册
 * @apiGroup register:注册
 * @apiName 邮箱注册
 * @description 通过邮件注册账号
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/register/mail
 * @apiParam {string} mail 邮箱
 * @apiParam {string} password 密码
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": "",
 *      "msg":'注册成功'
 *   }
 */
router.post("/mail", async (req, res) => {
  try {
    const { usermail, password } = req.body;
    console.log(usermail, password);
    console.log(md5(password));
    // token
    const token = await sign({ usermail });
    // 将信息存入数据库中
    const registerTime = moment(Date.now(), "YYYY-MM-DD HH:mm:ss");
    console.log(registerTime);
    const user = await Users.create({
      usermail,
      password: md5(password), // 加密密码
      token,
      registerTime,
    });
    // console.log(user);
    res.send({ code: 2000, data: { user }, msg: "注册成功" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
