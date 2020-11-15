/**
 * @description 路由中间件 封装新闻详情路由
 */
const express = require("express");
const router = express.Router();
const newsModel = require("../../db/model/News/index.js");
/**@api {get} /news/getnewslist 获取新闻列表
 * @apiGroup news:新闻
 * @apiName 获取新闻列表数据
 * @description 获取新闻列表数据
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/news/getnewslist
 * @apiParam {string} page 页码
 * @apiParam {string} pageSize 每页条数
 * @apiSuccessExample {json} Response 200 Example
 *   HTTP/1.1 200 OK
 *   {
 *     "code": 20000,
 *     "data": "",
 *      "msg":'发送成功'
 *   }
 */
// const Banners = require("../../db/model/Home/bannersModel");
router.get("/getnewslist", async (req, res) => {
  const { page, pageSize } = req.query;
  const array = await newsModel
    .find({})
    .limit(Number(pageSize))
    .skip(Number(page) * 10);
  res.send({ code: 20000, data: array, message: "success" });
});

module.exports = router;
