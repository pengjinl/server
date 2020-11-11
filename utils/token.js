const jwt = require("jsonwebtoken");

/**
 * 生成token令牌
 */

function sign(payload) {
  return new Promise((resolve, reject) => {
    // payload示有效 JSON 的对象文本、缓冲区或字符串 ->要加密的
    // "pengjinli"  ——》 包含加密算法的秘钥
    // 对象：包含过期时间 加密算法等选项
    jwt.sign(
      payload,
      "pengjinli",
      { algorithm: "RS256", expiresIn: "7d" },
      (error, token) => {
        if (error) {
          reject(error);
        } else {
          return resolve(token);
        }
      }
    );
  });
}

/**
 * 解密
 */
function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "pengjinli", (error, decode) => {
      if (error) {
        reject(error);
      } else {
        // decode:解码后的信息
        resolve(decode);
      }
    });
  });
}
// 暴露
module.exports = {
  sign,
  verify,
};
