const mongoose = require("mongoose");

const allhodCredential = new mongoose.Schema({
  loginid: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  branch:{
    type:String,
    required:true,
  },
  contact:{
    type:Number,
    required:true,
  },
  age:{
    type:Number,
    required:true,
  }
  ,
  image:{
    type:String,
    
  }
}, { timestamps: true });

const ALLHODmodel = mongoose.model("ALLHODdetails", allhodCredential);
module.exports=ALLHODmodel;