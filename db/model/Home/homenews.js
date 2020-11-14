const mongoose = require("mongoose");
// 新建schema对象
const homenewsModel = new mongoose.Schema({
  created_at: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: String,
  },
  pic: {
    type: String,
  },
  source: {
    type: String,
  },
  title: {
    type: String,
  },
  url: {
    type: String,
  },
});

// 新建数据模型
const homenews = mongoose.model("homenews", homenewsModel);

module.exports = homenews;
