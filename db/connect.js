const mongoose = require("mongoose");
const { MONGODB_CONFIG } = require("../config");

// 连接数据库
mongoose.connect(
  `mongodb://${MONGODB_CONFIG.host}:${MONGODB_CONFIG.port}/${MONGODB_CONFIG.database}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

// 连接是否成功
mongoose.connection.on("open", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("db is ok");
  }
});
