// 引入mogoose
const mongoose = require("mongoose");
// 新建Schema对象
const userSchema = new mongoose.Schema({
  // 用户邮箱
  usermail: {
    type: String,
    required: true,
    unique: true,
  },
  // 密码
  password: {
    type: String,
    required: true,
  },
  // 昵称
  nickname: {
    type: String,
    default: "kobe",
  },
  // 性别
  sex: {
    type: Number,
    default: 0, // 默认为男
  },
  // 年龄
  age: {
    type: Number,
  },
  // 头像
  avatorUrl: {
    type: String,
    default:
      "https://p4.music.126.net/8-xNyZvk2BpX29OZohDNvQ==/109951163711701263.jpg",
  },
  // 软删除
  deleted: {
    type: Boolean,
    default: false,
  },
  registerTime: {
    type: String, // 如果设置为Date类型，那么本地与数据库中的utc时间相差八小时，所以以字符串的形式存储吧
  },
  token: {
    type: String,
  },
});
// 转化成数据模型
const users = mongoose.model("users", userSchema);

module.exports = users;
