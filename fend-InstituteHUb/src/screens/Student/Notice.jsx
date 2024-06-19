import { Navigate, useNavigate } from "react-router-dom";
import CalendarEvent from "./CalendarEvent";
import axios from "axios";
import { useEffect, useState } from "react";
// import CreatePost from "../screens/HODs/CreatePost";

const Notice=()=>{
    const [post,setPost]=useState()
    const [iden,setIden]=useState();
    const navigate=useNavigate();
const createPost=()=>{
    setPost("new");
}

const cancelcreatePost=()=>{
    setPost();

}

const handleId=(info)=>{
console.log(info);
axios.delete(`http://localhost:5000/deletenotice/${info}`)
.then(info=>{console.log(info.data);})
.catch(error=>console.log(error))
}
const handleCreate=()=>{
    setPost();
}
const [info,setInfo]=useState([]);
useEffect(()=>{
    console.log("hi");
  axios.get(`http://localhost:5000/allnotices`)
  .then(info=>{console.log(info.data);setInfo(info.data)})
  .catch(error=>console.log(error))
  } ,[]);

    return(
    <>
    {/* <div className="flex flex-col justify-between p-4 leading-normal"> */}
    <h2 className="text-3xl mx-[45%]">Circular</h2>
    { info.map(info=>{
    return <> <div className="ml-[10%]">
    <div className="w-[90%] rounded-2xl border-slate-300 h-[250px] p-[10px] m-3 bg-green-500 shadow-lg"> 
     <h2 className=" mb-[10px] text-3xl font-bold tracking-tight text-gray-900 ml-[40%] "> {info.title}</h2>
    
     <span className="relative top-[30px] mt-[40px] text-4xl uppercase font-bold text-yellow-400 mx-[10%] mb-2 tracking-tight "> {info.description}</span>
     <span className="text-2xl font-bold relative top-[20px] left-[30px] text-red mx-[10%] mb-2 text-2xl font-bold tracking-tight text-gray-900 "> {info.date}</span>
     
     {/* <button className="relative top-[100px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>handleId(info._id)}>Delete</button>  */}
</div>
</div>
    </>
    })}
    
    {/* <form action="/createpost"></form> */}
    {/* {!post? <button className="mx-[50%] w-max m-[10px] relative  focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 " onClick={createPost}>Create a Circular</button>
    :<>

    <CreatePost value={handleCreate}/>
    <button className="mx-[50%] w-max m-[10px] relative top-[-45px] focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" onClick={cancelcreatePost}>Cancel</button>
    </>} */}
<hr />  
<CalendarEvent /> 
    </>
)
}
export default Notice;