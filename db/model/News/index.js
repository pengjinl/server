const mongoose = require("mongoose");
// 新建schema对象
const homenewslistModel = new mongoose.Schema({
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
const homenewslist = mongoose.model(
  "homenewslist",
  homenewslistModel,
  "homenewslist"
);
// 我真的是服了 官网说的是第一个参数是跟model对应的集合名字的单数形式，
// mongoose会找自己对应的复数形式的表，一直查找不到数据,它应该找的是homenewslists
// 而我数据库并没有这个表 所以一直查不到
// 所以以后再model时  尽量一个个参数写复数形式  然后 数据库中的表也写复数形式
// 这样就应该不会出现为题了
// 这里的解决办法，如果想要查询自己的表,需要写第三个参数，也就是自己真正的表名
//
module.exports = homenewslist;
