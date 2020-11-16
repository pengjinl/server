const express = require("express");

const router = express.Router();
const cartlistModel = require("../../db/model/Cart/shopcart");
/**@api {get} /cart/cartlist 获取购物车列表
 * @apiGroup cart:购物车
 * @apiName  获取购物车列表信息数据
 * @description 获取购物车列表
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/cart/cartlist
 */
router.get("/cartlist", async (req, res) => {
  // 购物车看到所有的
  try {
    // 多表连接查询
    cartlistModel
      .find({ skuid: 7 })
      .populate("goodsid", "title price bigImg")
      .exec((error, result) => {
        // console.log(result);
        res.send({ code: 20000, data: { cartlist: result }, msg: "success" });
      });
  } catch (error) {
    res.send({ code: 20001, msg: "error" });
  }
});
module.exports = router;
