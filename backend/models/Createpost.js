const mongoose = require("mongoose");

const createpost = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date:{
    type:String,
  }
}, { timestamps: true });

const Createpost = mongoose.model("createpost", createpost);
module.exports=Createpost;