import { useEffect, useState } from "react";
import axios from "axios";

const ALLHODS=()=>{

    const[info,setInfo]=useState([]);

      useEffect(()=>{
        console.log("hi");
      axios.get(`http://localhost:5000/ALLHODS`)
      .then(info=>setInfo(info.data))
      .catch(error=>console.log(error))
      } ,[]);
      
     

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
        <h3 className="text-2xl font-bold">ADMINS</h3>
      {info.map(info => {
                        return <div className="h-100vh bg-blue-400 p-16 ">
                            <div className="p-8 bg-white shadow mt-24 ">
                                <div className="grid grid-cols-1 md:grid-cols-3">

                                <div className="relative">
                                    <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img src={info.image} alt="" className=" h-[100%]  rounded-full "  />
                                </div>

                                </div>
                                
                                <div className="mt-20 text-center border-b pb-12">
                                    <h1 className="text-4xl font-medium text-gray-700">{info.name}, <span class="font-light text-gray-500">{info.age}</span>
                                    </h1>
                                    <p className="font-light text-gray-600 mt-3">{info.contact}</p>

                                    <p className="mt-8 text-gray-500">Head of the Department</p>
                                    <p className="mt-2 text-gray-500">Branch : {info.branch}</p>
                                    {/* <p className="mt-2 text-gray-500">LoginId : {info.loginid}</p> */}
                                    </div>

                                                            
                            
                                
                                    {/* <p>{info._id}_____</p> */}
                                 </div>
                        </div>
                        </div>
                    }

                    )}
      </>
//         <div>
//             <table>
//           <thead>
//           <tr>
//             <th>
//               LoginId
//             </th>
//             <th>
//               Name
//             </th>
//             <th>
//               Branch
//             </th>
//             <th>
//               Contact Number
//             </th>
//             <th>
//               Age
//             </th>
//           </tr>
//           </thead>
//             <tbody>
// {
//   info.map(info=>{
//    return <tr>
//       <td>
//        { console.log(info)}
//         {info.loginid}
//       </td>
//       <td>
//         {info.name}
//       </td>
//       <td>
//         {info.branch}
//       </td>
//       <td>
//         {info.contact}
//       </td>
//       <td>
//         {info.age}
//       </td>
//   <td>
    
//   <img src={info.image} alt=""  className="w-[100px]"/>
//   </td>
//     </tr>
  
//   })
// }

//             </tbody>

//             </table>

//         </div>

    );
}


export default ALLHODS;
