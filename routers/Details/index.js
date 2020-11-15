const express = require("express");

const router = express.Router();

const goodsDetailModel = require("../../db/model/Details/goodsDetail");
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
  console.log(skuid, typeof skuid);
  // 多表查询 mongoose的聚合操作 像sql join一样
  
  goodsDetailModel
    .find({ skuid: skuid })
    .then((data) => {
      res.send({ code: 20000, data: { goodsInfo: data } });
    })
    .catch((error) => {
      console.log(error);
    });
  /* console.log(result);
  res.send({ code: 20000, data: { goodsInfo: result } }); */
});
module.exports = router;
