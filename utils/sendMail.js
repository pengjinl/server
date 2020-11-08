const nodemailer = require("nodemailer");

// 创建发送邮件对象
let transporter = nodemailer.createTransport({
  // host: "smtp.ethereal.email", // 发送方邮箱主机 node_modules/lib/wellknow/services.json 查找
  host: "smtp.qq.com",
  service: 'qq',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    //user: testAccount.user, // 发送方邮件地址
    user: "973522685@qq.com", // 发送方邮件地址
    pass: "qwvhbqhfetrjbfie", // qq邮箱SMTP验证码
  },
});

function sendToMail(mail, code) {
  let mailObj = {
    from: '"Fred Foo 👻" <973522685@qq.com>', // 发送邮箱地址
    to: mail, // 接收邮件方邮箱地址，可以是多个
    subject: "pengjinl", // Subject line
    text: `你的邮箱验证码是${code},请不要告诉别人,五分钟有效`, // plain text body
  };
  // 返回一个promise
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailObj, (error, data) => {
      if (error) {
        reject(error);
      } else {
        console.log(mailObj);
        resolve();
      }
    });
  });
}

module.exports = { sendToMail: sendToMail }; // 暴露一个对象 这个对象有发送邮件的方法
