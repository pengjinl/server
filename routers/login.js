/**
 * @description 路由中间件 封装登录路由
 */
const express = require("express");
// 引入发送邮件验证码的模块
const Mail = require("../utils/sendMail");
const router = express.Router();
// 引入session
const session_user = require("../session");
// 定义验证码过期的时间
const mailCodeExpires = 5 * 60 * 1000;
// 定义一个数组 用来保存当前的 用户邮箱 和 邮箱对应的邮箱验证码
let codes = [];
// 定义默认登录账号
session_user["2609779408@qq.com"] = {
  code: 111111,
  expires: Date.now() + 3 * 60 * 1000,
};
const Users = require("../db/model/usersModel");
// 对比加密后的一致性
const md5 = require("../utils/md5");
/**@api {post} /login/getmail 获取邮件验证码
 * @apiGroup login:登录
 * @apiName 获取邮件验证码
 * @description 获取邮件验证码
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/login/getmail
 * @apiParam {number} usermail 邮箱
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": "",
 *      "msg":'邮件验证码发送成功'
 *   }
 */

// 获取邮箱验证码
router.post("/getmail", (req, res, next) => {
  // 获取邮箱验证码
  const { usermail } = req.body;
  console.log(usermail);
  // 生成随机六位数数字
  const code = parseInt(Math.random() * 1000000);
  // 在保存此次邮件的地址 和 对应的验证码
  session_user[usermail] = {
    code,
    expires: Date.now() + mailCodeExpires,
  };
  // 发送邮件验证码
  Mail.sendToMail(usermail, code)
    .then(() => {
      res.send({ code: 20000, msg: "邮件验证码发送成功" });
    })
    .catch((err) => {
      res.send({ code: 20001, msg: "参数有误，请输入正确的邮箱" });
    });
  console.log(session_user);
});

/**
 * @api {post} /login/mail 邮件验证码登录
 * @apiGroup login:登录
 * @apiName 邮件验证码登录
 * @description 使用邮箱验证码验证
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/login/mail
 * @apiParam {number} usermail 邮箱
 * @apiParam {string} code 邮箱验证码
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": ""
 *   }
 */
// 邮箱登录验证码登录
router.post("/mail", (req, res, next) => {
  // 获取登录的邮箱 及 验证码
  const { usermail, code } = req.body;
  // console.log(typeof usermail, typeof code); */
  console.log(session_user);
  const codeData = session_user[usermail];
  // console.log(codeData.expires);
  // 如果没过期 并且验证码对的上

  if (codeData.expires > Date.now() && codeData.code === Number(code)) {
    res.set("Content-Type", "text/html;charset=utf-8");
    res.send({ code: 20000, data: {}, msg: "success" });
  } else {
    res.set("Content-Type", "text/html;charset=utf-8");
    res.end({ code: 20002, data: {}, msg: "登录失败" });
  }
});
/**
 * @api {post} /login/account 账户登录
 * @apiGroup login:登录
 * @apiName 邮箱账户与密码登录
 * @description 使用邮箱账户与密码登录（注册过才能登录）
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/login/account
 * @apiParam {number} usermail 邮箱
 * @apiParam {password} password 密码
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": ""
 *   }
 */
router.post("/account", (req, res) => {
  const { usermail, password } = req.body;
  console.log(usermail, password);
  if (!usermail || !password) {
    return res.send({ code: 20001, msg: "密码或者账号错误" });
  }
  // 因为此时数据库中的password  是经过md5加密的  同一个字符串只能加密成一样的
  // 所以对比数据加密后的一致性 就能实现登录
  Users.find({ usermail: usermail, password: md5(password) })
    .then((data) => {
      // 如果查到的数据长度大于0 那么说明该数据库中有数据
      if (data.length > 0) {
        res.send({ code: 20000, msg: "success" });
      } else {
        res.send({ code: 20001, msg: "你可能未注册,请前往注册" });
      }
    })
    .catch((error) => {
      res.send({ code: 20003, msg: "内部错误" + error });
    });
});
module.exports = router;
