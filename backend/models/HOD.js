const mongoose = require("mongoose");

const adminCredential = new mongoose.Schema({
  loginid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Adminmodel = mongoose.model("AdminCredential", adminCredential);
module.exports=Adminmodel;