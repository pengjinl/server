const mongoose = require("mongoose");
// 新建schema对象
const someBannersModel = new mongoose.Schema({
  description: {
    type: Object,
  },
  pic: {
    type: String,
  },
});

// 新建数据模型
const smallbanners = mongoose.model("smallbanners", someBannersModel);

module.exports = smallbanners;
