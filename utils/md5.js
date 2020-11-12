// md5 加密函数
const crypto = require("crypto");

function md5(password) {
  const secret = "pengjinli";
  return crypto.createHmac("sha256", secret).update(password).digest("hex");
}

module.exports = md5;
