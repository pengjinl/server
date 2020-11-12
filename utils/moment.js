// 处理时间
const moment = require("moment");

function formatTime(value, formatString) {
  return moment(value).format(formatString);
}

module.exports = formatTime;
