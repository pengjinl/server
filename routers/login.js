/**
 * @description 路由中间件 封装登录路由
 */
const express = require("express");
const axios = require("axios");
// 引入发送邮件验证码的模块
const Mail = require("../utils/sendMail");
const router = express.Router();
// 引入session
let session_user = require("../session");
// 定义验证码过期的时间
const mailCodeExpires = 5 * 60 * 1000;
// 定义一个数组 用来保存当前的 用户邮箱 和 邮箱对应的邮箱验证码
let codes = [];

/**@api {get} /login/getmail 获取邮件验证码
 * @apiGroup login:登录
 * @apiName 获取邮件验证码
 * @description 获取邮件验证码
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/login/getmail
 * @apiParam {number} mail 邮箱
 * @apiParam {string} code 邮箱验证码
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 200,
 *     "data": "",
 *      "msg":'邮件验证码发送成功'
 *   }
 */

// 获取邮箱验证码
router.post("/getmail", (req, res, next) => {
  // 获取邮箱验证码
  let { usermail } = req.body;
  // 生成随机六位数数字
  let code = parseInt(Math.random() * 1000000);
  // 在数组中保存此次邮件的地址 和 对应的验证码
  // codes[mail] = code;
  // 发送邮件验证码
  Mail.sendToMail(usermail, code)
    .then(() => {
      // console.log(codes);
      // 邮件验证码 发送成功
      // 在session_user 中存入对应的信息(邮箱，验证码，及过期的时间)
      session_user[usermail] = {
        code,
        expires: Date.now() + mailCodeExpires,
      };
      console.log(session_user);
      res.send({ err: 0, msg: "邮件验证码发送成功" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ err: error, msg: "邮件验证码发送失败" });
    });
});

/**
 * @api {get} /login/mail 邮件验证码登录
 * @apiGroup login:登录
 * @apiName 邮件验证码登录
 * @description 使用邮箱验证码验证
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/login/mail
 * @apiParam {number} mail 邮箱
 * @apiParam {string} code 邮箱验证码
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 200,
 *     "data": ""
 *   }
 */
// 邮箱登录
router.post("/mail", (req, res, next) => {
  // 获取登录的邮箱 及 验证码
  const { usermail, code } = req.body;
  let codeData = session_user[usermail];
  console.log(usermail, code,codeData);
  // 如果没过期 并且验证码对的上
  if (codeData.expires < Date.now() && codeData.code === code) {
    res.end("hello 登录成功");
  }
});

module.exports = router;
