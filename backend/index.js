// const connectToMongo = require("./Database/db");
const express = require("express");
const app = express();
const mongoose =require("mongoose")
const cors =require("cors")
const path = require("path");
const HODmodel = require("./models/HOD");
const ALLHODmodel = require("./models/ALLHODS");
const Createpost = require("./models/Createpost");
const Attendancemodel = require("./models/cse1Attendance");
const Attendance2model = require("./models/cse2Attendance");
const Attendance3model = require("./models/cse3Attendance");
const Attendance4model = require("./models/cse4Attendance");
const StudentCredentials = require("./models/StudentLogins");
const FacultyCredentials = require("./models/Facultylogins");
const port = 5000 ;

var id;
const getID=(lid)=>{
    id= lid;
    console.log(id,"hi");
}



app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Institute-Management-Hub");


//allhods details
app.get("/ALLHODS",(req,res)=>{
ALLHODmodel.find()
.then(hods=>res.json(hods))
.catch(err=>res.json(err))

});


app.get("/allnotices",(req,res)=>{
    Createpost.find()
.then(allnotice=>res.json(allnotice))
.catch(err=>res.json(err))
return;

})

app.post("/createpost",(req,res)=>{
 let{title,description,date}=req.body;
 console.log("hi");
    Createpost.create({title:title,description:description,date:date})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
    // next("/allnotices");

})
app.get("/cse1attendance",(req,res)=>{
    Attendancemodel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})

app.put("/cse1attendance",(req,res)=>{
    console.log(req.body,"hiiii");
    let info=req.body.data;
    console.log(info._id);

    Attendancemodel.findByIdAndUpdate(info._id,{"Name":info.Name,"Idno":info.IdNo,"Percentage":info.Percentage,"S":{"NO":info.S.NO}},{runValidators:true,new:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));

    // Attendancemodel.find()
    // .then(result=>res.json(result))
    // .catch(err=>res.json(err));
})



app.get("/cse2attendance",(req,res)=>{
    Attendance2model.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})

app.put("/cse2attendance",(req,res)=>{
    console.log(req.body,"hiiii");
    let info=req.body.data;
    console.log(info._id);

    Attendance2model.findByIdAndUpdate(info._id,{"Name":info.Name,"Idno":info.IdNo,"Percentage":info.Percentage,"S":{"NO":info.S.NO}},{runValidators:true,new:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));

    // Attendancemodel.find()
    // .then(result=>res.json(result))
    // .catch(err=>res.json(err));
})



app.get("/cse3attendance",(req,res)=>{
    Attendance3model.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})


app.put("/cse3attendance",(req,res)=>{
    console.log(req.body,"hiiii");
    let info=req.body.data;
    console.log(info._id);

    Attendance3model.findByIdAndUpdate(info._id,{"Name":info.Name,"Idno":info.IdNo,"Percentage":info.Percentage,"S":{"NO":info.S.NO}},{runValidators:true,new:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));

    // Attendancemodel.find()
    // .then(result=>res.json(result))
    // .catch(err=>res.json(err));
})


app.get("/cse4attendance",(req,res)=>{
    Attendance4model.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})

app.put("/cse4attendance",(req,res)=>{
    console.log(req.body,"hiiii");
    let info=req.body.data;
    console.log(info._id);

    Attendance4model.findByIdAndUpdate(info._id,{"Name":info.Name,"Idno":info.IdNo,"Percentage":info.Percentage,"S":{"NO":info.S.NO}},{runValidators:true,new:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));

    // Attendancemodel.find()
    // .then(result=>res.json(result))
    // .catch(err=>res.json(err));
})


app.get('/studentlogins',(req,res)=>{
    console.log("--done==");
    StudentCredentials.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


app.get('/facultylogins',(req,res)=>{
    console.log("--done==++");
    FacultyCredentials.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put('/HODprofile1',(req,res)=>{
    console.log('HHHHHHHH');
    // let {updateid,updatename,updateage,updatebranch,updatecontact,updateimage}=req.body;
    // console.log("____",updateid,updatename);

    // ALLHODmodel.findOneAndUpdate({"loginid":updateid},{"name":updatename,"age":updateage,"image":updateimage,"contact":updatecontact,"branch":updatebranch}).
    // then(result=>{res.json(result)
    //     console.log("modified");
    // })
    // .catch(err=>res.json(err))
})

app.delete("/deletenotice/:_id",(req,res)=>{
console.log(req.params);
let {_id}=req.params;
Createpost.findByIdAndDelete(_id)
.then(result=>res.json(result))
.catch(err=>console.log(err))
})

// app.delete("/deletenotice/:_id", (req, res) => {
//     console.log(req.params);
//     let { _id } = req.params; // Changed to _id to match the parameter name
//     Createpost.findByIdAndDelete(_id).then(deletedPost => {
//         console.log("success");
//         res.json({ message: "Success", deletedPost }); // Send a response indicating success
//     }).catch(err => {
//         console.error(err);
//         res.status(500).json({ error: "Failed to delete notice" }); // Send an error response if deletion fails
//     });
// });


app.post("/admin/auth/login",(req,res)=>{
    const{loginid,password}=req.body;
    // console.log(password);
        getID(loginid);
    //   hodid=loginid;
    // console.log(hodid);
    HODmodel.findOne({loginid:loginid})
    .then(user=>{
    if(user){
        if(user.password===password){
            res.json("success")

        }
        else{
            res.json("the incorrect pass")
        }
    }
    else{
        res.json("no account")
    }
    })
})

//facultylogin
app.post("/faculty/auth/login",(req,res)=>{
    const{loginid,password}=req.body;
    // console.log(password);
        getID(loginid);
    //   hodid=loginid;
    // console.log(hodid);
    FacultyCredentials.findOne({loginid:loginid})
    .then(user=>{
    if(user){
        if(user.password===password){
            res.json("success")

        }
        else{
            res.json("the incorrect pass")
        }
    }
    else{
        res.json("no account")
    }
    })
})




//studentlogin
app.post("/student/auth/login",(req,res)=>{
    const{loginid,password}=req.body;
    // console.log(password);
        getID(loginid);
    //   hodid=loginid;
    // console.log(hodid);
    StudentCredentials.findOne({loginid:loginid})
    .then(user=>{
    if(user){
        if(user.password===password){
            res.json("success")

        }
        else{
            res.json("the incorrect pass")
        }
    }
    else{
        res.json("no account")
    }
    })
})


app.get("/studentprofile",(req,res)=>{
    console.log("done_____________");
    console.log(id);
    StudentCredentials.find({"loginid":id})
    .then(hods=>res.json(hods))
    .catch(err=>res.json(err))
    
})



//facultyprofile
app.get("/facultyprofile",(req,res)=>{
    console.log("done_____________");
    console.log(id);
    FacultyCredentials.find({"loginid":id})
    .then(hods=>res.json(hods))
    .catch(err=>res.json(err))
    
})


//hodprofile
app.get("/HODprofile",(req,res)=>{
    console.log("done_____________");
    console.log(id);
    ALLHODmodel.find({"loginid":id})
    .then(hods=>res.json(hods))
    .catch(err=>res.json(err))
    
})



//|| process.env.PORT;
// var cors = require("cors");

// app.use(cors({
//   origin: process.env.FRONTEND_API_LINK
// }));
// app.use(express.json()); //to convert request data to json

// app.use('/media', express.static(path.join(__dirname, 'media')));


// Credential Apis
// app.use("/api/student/auth", require("./routes/Student Api/credential.route"));
// app.use("/api/faculty/auth", require("./routes/Faculty Api/credential.route"));
// app.use("/api/admin/auth", require("./routes/Admin Api/credential.route"));
// // Details Apis
// app.use("/api/student/details", require("./routes/Student Api/details.route"));
// app.use("/api/faculty/details", require("./routes/Faculty Api/details.route"));
// app.use("/api/admin/details", require("./routes/Admin Api/details.route"));
// // Other Apis
// app.use("/api/timetable", require("./routes/Other Api/timetable.route"));
// app.use("/api/material", require("./routes/Other Api/material.route"));
// app.use("/api/notice", require("./routes/Other Api/notice.route"));
// app.use("/api/subject", require("./routes/Other Api/subject.route"));
// app.use("/api/marks", require("./routes/Other Api/marks.route"));
// app.use("/api/branch", require("./routes/Other Api/branch.route"));




app.listen(port, () => {
  console.log(`Server Listening On http://localhost:${port}`);
});
