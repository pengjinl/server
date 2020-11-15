const mongoose = require("mongoose");

// 新建schema 对象
const GoodsDetailModel = new mongoose.Schema({
  skuid: {
    type: Number,
  },
  bigImgList: {
    // 大图
    type: Array,
  },
  middleImgList: {
    // 中图
    type: Array,
  },
  smallImgList: {
    // 小图
    type: Array,
  },
  highopinion: {
    // 好评 数组里放对象
    type: Array,
  },
  mediumopinion: {
    // 中
    type: Array,
  },
  badopinion: {
    // 差评
    type: Array,
  },
 /*  goodslists:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"goodslists"
  } */
});

// 新建数据模型
const details = mongoose.model("details", GoodsDetailModel);

module.exports = details;
