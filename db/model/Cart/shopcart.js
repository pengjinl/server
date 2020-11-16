const mongoose = require("mongoose");

const shopcartSchema = new mongoose.Schema({
  skuid: {
    username: {
      type: String,
    },
    skuid: {
      type: String,
    },
    skuNum: {
      type: String,
    },
    isdelete: {
      // 软删除
      type: String,
    },
    ischecked: {
      // 选中
      type: String,
    },
    goodsid: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "goodslists",
      },
    ],
  },
});

const shopcarts = mongoose.model("shopcarts", shopcartSchema);

module.exports = shopcarts;
