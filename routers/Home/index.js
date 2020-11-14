/**
 * @description 首页路由中间件 封装
 */
const express = require("express");
const router = express.Router();
// 引入banners 数据表
const Banners = require("../../db/model/Home/bannersModel");
const SmallBanners = require("../../db/model/Home/smallbannersModel");
const Homenews = require("../../db/model/Home/homenews");
/**
 * @api {get} /home/banners 大图数据
 * @apiGroup home:首页数据
 * @apiName 获取轮播图数据
 * @description 获取轮播图数据
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/home/banners
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": ""
 *   }
 */

router.get("/banners", async (req, res, next) => {
  // 经过mongoose 返回的是一个promise
  const result = await Banners.find({});
  // 返回数据
  res.send({ code: 20000, data: result, msg: "success" });
});
/**
 * @api {get} /home/banners 小图数据
 * @apiGroup home:首页数据
 * @apiName 获取小轮播图数据
 * @description 获取小轮播图数据
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/home/smallbanners
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": ""
 *   }
 */
router.get("/smallbanners", async (req, res, next) => {
  // 经过mongoose 返回的是一个promise
  const result = await SmallBanners.find({});
  // 返回数据
  res.send({ code: 20000, data: result, msg: "success" });
});

/**
 * @api {get} /home/homenews 首页新闻数据
 * @apiGroup home:首页数据
 * @apiName 获取首页新闻数据
 * @description 获取首页新闻数据
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000//home/homenews
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": ""
 *   }
 */
router.get("/homenews", async (req, res, next) => {
  const result = await Homenews.find({});
  res.send({ code: 20000, data: result, msg: "success" });
});

module.exports = router;
