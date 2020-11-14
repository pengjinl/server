const mongoose = require("mongoose");
// 新建schema对象
const bannersModel = new mongoose.Schema({
  id: {
    type: String,
  },
  pic: {
    type: String,
  },
});

// 新建数据模型
const banners = mongoose.model("banners", bannersModel);

module.exports = banners;
