const mongoose = require("mongoose");

const FacultyLogins = new mongoose.Schema({
  loginid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const FacultyCredentials = mongoose.model("facultylogin",FacultyLogins);
module.exports=FacultyCredentials;