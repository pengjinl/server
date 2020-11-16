const express = require("express");

const router = express.Router();

const goodsDetailModel = require("../../db/model/Details/goodsDetail");
const Goodslist = require("../../db/model/Shophome/goodslist");
/**@api {get} /detail/goodsdetail 获取商品详情
 * @apiGroup detail:商品详情
 * @apiName  获取商品详情数据
 * @description 获取商品详情数据
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/detail/goodsdetail
 * @apiParam {string} skuid 商品id
 */
router.get("/goodsdetail", async (req, res) => {
  let { skuid } = req.query;
  // 多表查询 mongoose的聚合操作 像sql join一样
  // 将gooslaists表中的title price total一起返回
  // 对应的schema中要配对好  看goodsDetails 模块
  try {
    let result = await goodsDetailModel
      .find({ skuid: skuid })
      .populate("goodsid", "title price totalAssess") // 过滤出想要的字段，也可以使用对象的形式 0代表不要 1 代表要
      .exec((error, result) => {
        res.send({ code: 20000, data: { goodsInfo: result } });
      });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
