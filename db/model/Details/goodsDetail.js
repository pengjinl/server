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
  goodsid: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "goodslists",
      // 当前这个表的goodsid 字段   对应   goodslists这个表的_id  才能进行连接
      // 也就是说数据库中的details 这个表中的goodsid  要对应goodslists的_id
    },
  ],
});

// 新建数据模型
const details = mongoose.model("details", GoodsDetailModel);

module.exports = details;
