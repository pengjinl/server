const express = require("express");

const router = express.Router();
const cartlistModel = require("../../db/model/Cart/shopcart");
const Goodslist = require("../../db/model/Shophome/goodslist");
/**@api {get} /cart/cartlist 获取购物车列表
 * @apiGroup cart:购物车
 * @apiName  获取购物车列表信息数据
 * @description 获取购物车列表
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/cart/cartlist
 */
router.get("/cartlist", async (req, res) => {
  // 购物车列表（isdelete为0的 代表没有删除的）
  try {
    //
    let result = await cartlistModel.find({ isdelete: 0 });
    // result -> 数组
    res.send({ code: 20000, data: { cartlist: result }, msg: "success" });
  } catch (error) {
    res.send({ code: 20001, msg: "error" });
  }
});

/**@api {get} /cart/addtocart 添加到购物车（对已有商品进行数量改动）
 * @apiGroup cart:购物车
 * @apiName  添加到购物车
 * @description 添加到购物车
 * @apiVersion 1.0.0
 * @apiParam {string} skuid 商品id
 * @apiParam {string} skunum 商品数据
 * @apiSampleRequest http://localhost:4000/cart/addtocart
 */
router.post("/addtocart", async (req, res) => {
  try {
    let { skuid, skunum } = req.body;
    console.log(skuid, skunum);
    let result = await cartlistModel.update(
      { skuid: Number(skuid) },
      { $inc: { skunum: Number(skunum) } }
    );
    res.send({ code: 20000, data: result, msg: "success" });
  } catch (error) {
    console.log(error);
    res.send({ code: 20001, msg: error });
    
  }

  /**@api {delete} /cart/deletecart 删除购物车
   * @apiGroup cart:购物车
   * @apiName  删除购物车
   * @description 从购物车删除某个商品
   * @apiVersion 1.0.0
   * @apiParam {string} skuid 商品id
   * @apiSampleRequest http://localhost:4000/cart/deletecart
   */
});
router.delete("/deletecart", async (req, res) => {
  try {
    const { skuid } = req.body;
    let result = await cartlistModel.update(
      { skuid: Number(skuid) },
      { isdelete: Number(1) }
    );
    res.send({ code: 20000, msg: "success" });
  } catch (error) {
    res.send({ code: 20001, msg: "error" });
  }
});

/**@api {delete} /cart/checkcart 切换商品的选中状态
 * @apiGroup cart:购物车
 * @apiName  切换购物车商品的选中状态
 * @description 切换购物车商品的选中状态（0代表未选中，1代表选中）
 * @apiVersion 1.0.0
 * @apiParam {string} skuid 商品id
 * @apiParam {string} ischecked 选中状态 1代表选中 0代表不选
 * @apiSampleRequest http://localhost:4000/cart/deletecart
 */
router.get("/checkcart", async (req, res) => {
  try {
    console.log(req.query);
    const { skuid, ischecked } = req.query;
    await cartlistModel.update(
      { skuid: Number(skuid) },
      { ischecked: Number(ischecked) }
    );
    res.send({ code: 20000, msg: "success" });
  } catch (error) {
    console.log(error);
    res.send({ code: 20001, msg: "切换失败" });
  }
});

module.exports = router;
