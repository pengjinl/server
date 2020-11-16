const mongoose = require("mongoose");

const GoodslistModel = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  skuid: {
    type: String,
  },
  bigImg: {
    // 大图
    type: Array,
  },
  smallImg: {
    // 小图
    type: Array,
  },
  title: {
    type: String,
  },
  price: {
    // 价格
    type: Number,
  },
  totalAssess: {
    // 总评价数
    type: Number,
  },
  /* details: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "details",
    },
  ], */
});

const goodslists = mongoose.model("goodslists", GoodslistModel);

module.exports = goodslists;
