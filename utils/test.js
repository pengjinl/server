const jwt = require("./token");

// console.log(jwt.sign("peg"));
let obj = {
  id: 22,
};
jwt
  .sign(obj)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
