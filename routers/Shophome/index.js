const express = require("express");

const router = express.Router();
const Goodslist = require('../../db/model/Shophome/goodslist')
/**@api {get} /shophome/goodslist 获取商品列表
 * @apiGroup shophome:店铺首页
 * @apiName  获取商品列表数据
 * @description  获取商品列表数据
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/shophome/goodslist
 */
router.get("/goodslist", async (req, res) => {
  const result = await Goodslist.find({})
  res.send({ code: 20000, data: {goodslist:result}, msg: "success" });
});

module.exports = router;
