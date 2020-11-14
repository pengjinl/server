const mongoose = require("mongoose");

// 新建schema对象
const counters = new mongoose.Schema({
  id: {
    type: String,
  },
  seq: {
    type: Number,
  },
});

const countersModel = mongoose.model("counters", counters);

module.exports = countersModel;
