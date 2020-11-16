const express = require("express");

const router = express.Router();
const AddressModel = require("../../db/model/Address");
router.get("/addressinfo", async (req, res) => {
  try {
    let result = await AddressModel.find({});
    res.send({ code: 20000, data: result, msg: "success" });
  } catch (error) {
    res.send({ code: 20001, msg: error });
  }
});

module.exports = router;
