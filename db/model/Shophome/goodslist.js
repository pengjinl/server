const mongoose = require("mongoose");

const GoodslistModel = new mongoose.Schema({
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
});

const goodslists = mongoose.model('goodslists',GoodslistModel)

module.exports = goodslists
