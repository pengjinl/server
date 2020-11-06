/**
 * @description 路由中间件 封装登录路由
 */

const express = require("express");
const axios = require("axios");

const router = express.Router();
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
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 200,
 *     "data": ""
 *   }
 */

router.post("/mail", (req, res, next) => {
  res.end("hello");
});

module.exports = router;
