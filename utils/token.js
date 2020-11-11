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
      // 如果使用RS256的话(非对称加密，需要生成私钥和公钥，用公钥进行加密，那么只有对应的私钥才能解密，如果用私钥加密，重要对应的公钥才能解密) 
      // 非对称加密：加密解密用的是不同的秘钥，对称加密：加密解密用的是同一个密钥
      { algorithm: "HS384", expiresIn: "7d" },
      (error, token) => {
        if (error) {
          console.log(error);
          reject(error);
          return;
        }else{
          resolve(token);
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
