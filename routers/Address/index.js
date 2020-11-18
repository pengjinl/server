const express = require("express");

const router = express.Router();
const AddressModel = require("../../db/model/Address");
/**@api {get} /address/addressinfo 地址
 * @apiGroup cart:地址
 * @apiName  地址
 * @description 获取地址信息
 * @apiVersion 1.0.0
 * @apiSampleRequest http://localhost:4000/address/addressinfo
 */
router.get("/addressinfo", async (req, res) => {
  try {
    let result = await AddressModel.find({});
    res.send({ code: 20000, data: result, msg: "success" });
  } catch (error) {
    res.send({ code: 20001, msg: error });
  }
});

module.exports = router;
