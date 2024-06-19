import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
const CreatePost=({value})=>{
    const navigate=useNavigate();
    
    const [title,setTitle]=useState()
    const [description,setDesc]=useState()
    const [date,setdate]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("hi");
        axios.post("http://localhost:5000/createpost",{title,description,date})
        .then(result=>{console.log(result)
        navigate("/admin")
        value();
        console.log("bye");
            // refresh();
        })
        .catch(err=>console.log(err))
    }
    return(<>
    <form onSubmit={handleSubmit} className="mx-[35%] mt-[5%] w-full max-w-lg" >
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full  px-3 mb-6 md:mb-0">
      <label name="title" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Title
      </label>
      <input onChange={(e)=>setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full  px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name" >
        Description
      </label>
      <textarea onChange={(e)=>setDesc(e.target.value)} name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Write More"  cols={30}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Date
      </label>
      <input name="date" onChange={(e)=>setdate(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="20-07-2024" />
      {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" >Submit</button>
</form>
    </>
    )
}
export default CreatePost;