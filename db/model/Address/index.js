const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const address = mongoose.model("address", AddressSchema, "address");
module.exports = address;
