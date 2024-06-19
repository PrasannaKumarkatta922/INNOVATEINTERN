const mongoose = require("mongoose");

const Allattendance = new mongoose.Schema({
    S:{ 
        type:Object,
        NO:{
            type:Number,
            reuired:true

        },
    },
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

const Attendance2model = mongoose.model("cse2Attendance", Allattendance);
module.exports=Attendance2model;