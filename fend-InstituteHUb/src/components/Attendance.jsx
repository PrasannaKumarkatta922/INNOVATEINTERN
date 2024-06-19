import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Attendance=()=>{
  const[info,setInfo]=useState([]);
        
  const navigate=useNavigate();
  const [show,setShow]=useState();
    const [url,setUrl]=useState("cse1attendance")
const [edit,setedit]=useState();
const [data,setdata]=useState()

    const handle2=()=>{
      setShow(false);
      setUrl("cse2attendance");
      getdata();
      console.log(url);
      // setShow(true);
    }  
    const handle3=()=>{
      setShow(false);
      setUrl("cse3attendance");
      getdata();
      console.log(url);
    } 
     const handle4=()=>{
      setShow(false);
      setUrl("cse4attendance");
      getdata();
      console.log(url);
      // setShow(true);
    }
    const handle1=()=>{
      setShow(false);
      setUrl("cse1attendance");
      getdata();
      console.log(url);
      // setShow(true);
    }        
      const getdata=()=>{
        // window.location.reload;
        axios.get(`http://localhost:5000/${url}`)
      .then(info=>{setInfo(info.data)
      })
      .catch(error=>console.log(error))
      setShow(true);
      }
     
const handleedit=()=>{
  setedit("edit");
  setShow(false);
  // setdata(data);
}

const handleupdate=()=>{
  console.log(data,"_____hi");

  axios.put(`http://localhost:5000/${url}`,{data})
  .then(info=>{
    navigate("/admin");
    // setInfo(info.data);
    
  })
  .catch(error=>console.log(error))
  window.location.reload;
  setShow(true);
  setedit(false);


  
}

const handleid=(e)=>{
  e.preventDefault();
  // console.log(data.IdNo);
  // console.log(e.target.value);
  let newinfo={"IdNo":e.target.value}
   setdata(data=>({
    ...data,
    ...newinfo
   }))
  //  console.log(data,'+===');
}

const handleName=(e)=>{
  // console.log(data);
  e.preventDefault();
  // console.log(data.IdNo);
  // console.log(e.target.value);
  let newinfo={"Name":e.target.value}
   setdata(data=>({
    ...data,
    ...newinfo
   }))
  //  console.log(data,'+===');
}


const handlepercentage=(e)=>{
  e.preventDefault();
  // console.log(data.IdNo);
  // console.log(e.target.value);
  let newinfo={"Percentage":e.target.value}
   setdata(data=>({
    ...data,
    ...newinfo
   }))
  //  console.log(data,'+===');
}


const handlesno=(e)=>{
  e.preventDefault();
  // console.log(data.IdNo);
  // console.log(e.target.value);
  let newinfo={"S":{"NO":e.target.value}}
   setdata(data=>({
    ...data,
    ...newinfo
   }))
  //  console.log(data,'+===');
}


    // .then(result => {
    //     console.log(result)
    //     if(result.data==="success"){
    // navigate(`/${selected.toLowerCase()}`);
    // }
    // })
    // .catch((error) => {
    // //   toast.dismiss();
    //   console.error(error);
    // //   toast.error(error.response.data.message);
    // });
    return(

      <>

<div className="bg-gray-50 inline-flex border border-gray-200 rounded-lg text-gray-900 select-none divide-x mb-5">
  <button className="py-1.5 px-4 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 first:rounded-l-lg last:rounded-r-lg" onClick={handle1}>Cse1</button>
  <button className="py-1.5 px-4 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 first:rounded-l-lg last:rounded-r-lg" onClick={handle2}>Cse2</button>
  <button className="py-1.5 px-4 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 first:rounded-l-lg last:rounded-r-lg" onClick={handle3}>Cse3</button>
  <button className="py-1.5 px-4 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 first:rounded-l-lg last:rounded-r-lg" onClick={handle4}>Cse4</button>
</div>
      {/* <button className="absolute right-[600px] bg-gray-400 rounded p-[5px]" onClick={handle1}>Cse1</button>
       <button className="absolute right-[500px] bg-gray-400 rounded p-[5px]" onClick={handle2}>Cse2</button>
      <button className="absolute right-[400px] bg-gray-400 rounded p-[5px]" onClick={handle3}>Cse3</button>
      <button className="absolute right-[300px] bg-gray-400 rounded p-[5px]" onClick={handle4}>Cse4</button>        */}
      {show ?<>
      <hr /> 
        <div className="relative pt-[10px]"> 
        <span className="text-2xl m-[40%] ">{url}</span> 
        <table className="mt-[10px] w-full text-sm text-left rtl-text-right text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 text-sm" scope="col">
              IDNO
            </th>
            <th className="px-6 py-3 text-sm" scope="col"> 
              Name
            </th> 
            <th className="px-5 py-3 text-sm" scope="col">
              S.no
              </th> 
            <th className="px-2 py-3 text-sm" scope="col">
            Percentage
            </th>
            <th className="px-3 py-3 text-sm" scope="col">
              Action
            </th>
          </tr>
          </thead>
            <tbody>
{
  info.map(info=>{
   return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
       <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       {/* { console.log(info)} */}
        {info.IdNo}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {info.Name}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {info.S.NO}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {info.Percentage}
      </td>
    {/* <td>{info._id}</td> */}
      <button className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" onClick={()=>{console.log(info._id);setdata(info);handleedit()}}>Edit</button>
      </tr>
  })
}

            </tbody>

            </table>

        </div>
        </>
:edit ?<>


{/* 

<p>{data.IdNo}</p>
<p>{data.Name}</p>
<p>{data.S.NO}</p>

<p>{data.Percentage}</p> */}
<h2 className="text-xl">Edit Details</h2>

<div className="h-[300px] bg-gray-800 p-[20px]">
<div className="grid gap-6 mb-6 md:grid-cols-2">
  <div>
  <label htmlFor="idno" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white ">Id No</label>
<input id="idno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
type="text" placeholder={data.IdNo} onChange={handleid}/>
</div>
{/* <p>{data.IdNo}</p> */}

<div>
<label htmlFor="sno" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">S No</label>
<input id="sno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder={data.S.NO} onChange={handlesno}/>
</div>

<div>
<label htmlFor="NAME" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Name</label>
<input  id="NAME" type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.Name} onChange={handleName}/>
</div>
<div>
<label htmlFor="per" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Percentage</label>
<input type="text" id="per" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.Percentage} onChange={handlepercentage}/>
</div>
{/* <button >Update</button> */}

</div>
<button onClick={handleupdate} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
</div>
</>:""
}



        </>
    );



}
export default Attendance;