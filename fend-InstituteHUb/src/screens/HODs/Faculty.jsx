import axios from "axios";
import { useEffect, useState } from "react";

const FacultyLogins=()=>{

    const [info,setInfo]=useState([]);
useEffect(()=>{
    console.log("hi");
  axios.get(`http://localhost:5000/facultylogins`)
  .then(info=>{console.log(info.data);setInfo(info.data)})
  .catch(error=>console.log(error))
  } ,[]);
    return(
        <>
       <div className="relative">  
        <table className="w-full text-sm text-left rtl-text-right text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> 
          <tr>
            <th className="px-6 py-3 text-sm" scope="col">
              LoginID
            </th>
            <th className="px-6 py-3 text-sm" scope="col">
            Password
            </th> 
        </tr>
        </thead>

        <tbody>

        {
  info.map(info=>{
   return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
       <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       {/* { console.log(info)} */}
        {info.loginid}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {info.password}
      </td>
      </tr>
        }
        )
        }

        </tbody>
            </table>
            </div>
         </>
    )
}
export default FacultyLogins;