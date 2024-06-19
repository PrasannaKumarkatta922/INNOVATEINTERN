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

const Attendancemodel = mongoose.model("cse1Attendance", Allattendance);
module.exports=Attendancemodel;