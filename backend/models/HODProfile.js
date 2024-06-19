const mongoose = require("mongoose");

const HODprofile = new mongoose.Schema({
  IdNo: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Percentage:{
    type:Number,
    required:true,
  }
}, { timestamps: true });

const HODPROFILE = mongoose.model("hodprofile", HODprofile);
module.exports=HODPROFILE;