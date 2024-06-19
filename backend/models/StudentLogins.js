const mongoose = require("mongoose");

const StudentLogins = new mongoose.Schema({
  loginid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const StudentCredentials = mongoose.model("studentlogin", StudentLogins);
module.exports=StudentCredentials;