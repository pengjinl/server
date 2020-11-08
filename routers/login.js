/**
 * @description 路由中间件 封装登录路由
 */

const express = require("express");
const axios = require("axios");
// 引入发送邮件验证码的模块
const Mail = require("../utils/sendMail");
const router = express.Router();

// 定义一个数组 用来保存对应的用户邮箱 和 对应的邮箱验证码
let codes = [];
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
  res.end("hello");
});
/** @api {get} /login/getmail 获取邮件验证码
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
 *     "data": ""
 *   }
 */

// 获取邮箱验证码
router.post("/getmail", (req, res, next) => {
  // 获取邮箱验证码
  let { mail } = req.body;
  // 生成随机六位数数字
  let code = parseInt(Math.random() * 1000000);
  // 在数组中保存此次邮件的地址 和 对应的验证码
  codes[mail] = code;
  // 发送邮件验证码
  Mail.sendToMail(mail, code)
    .then(() => {
      console.log(typeof mail, code);
      console.log(codes);
      res.send({ err: 0, msg: "邮件验证码发送成功" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ err: error, msg: "邮件验证码发送失败" });
    });
});

module.exports = router;
