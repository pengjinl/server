const mongoose = require("mongoose");

const shopcartSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  skuid: {
    type: Number,
  },
  skunum: {
    type: Number,
  },
  isdelete: {
    // 软删除
    type: Number,
  },
  ischecked: {
    // 选中
    type: Number,
  },
  price: {
    type: Number,
  },
  title: {
    type: String,
  },
  smallImg: {
    type: String,
  },
  goodsid: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "goodslists",
    },
  ],
});

const shopcarts = mongoose.model("shopcarts", shopcartSchema);

module.exports = shopcarts;
