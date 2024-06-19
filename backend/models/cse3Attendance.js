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

const Attendance3model = mongoose.model("cse3Attendance", Allattendance);
module.exports=Attendance3model;