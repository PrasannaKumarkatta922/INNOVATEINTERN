import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const HODprofile = () => {

    const [update, setUpdate] = useState();

    const navigate = useNavigate();
    const [data, setdata] = useState({});

    const [info, setInfo] = useState([]);
    // let imagepic;
    useEffect(() => {
        console.log("hi");
        axios.get(`http://localhost:5000/HODprofile`)
            .then(info => {
                setInfo(info.data);

            })
            .catch(error => console.log(error))
        // console.log(info.data,"____btroo__")    
    }, []);

    const [updatename, setUpdateName] = useState();
    const [updateage, setUpdateage] = useState();
    const [updatebranch, setUpdateBranch] = useState();
    const [updateLoginid, setUpdateloginid] = useState();
    const [updateimage, setUpdateImage] = useState();
    const [updatecontact, setUpdateContact] = useState();
    const [updateid, setUpdateid] = useState();
    console.log(updateage, "+++++++");

    // console.log(updateLoginid"____________");
    const handlename = (e) => {
        // console.log(data.info[0].name);
        e.preventDefault();
        setUpdateName(data.info[0].name);
        console.log("--", updatename)
        // setUpdateName(e.target.value);
        // console.log("--",updatename)
    }

    const handleage = (e) => {

        e.preventDefault();
        setUpdateage(e.target.value);
        console.log(updateage)
    }
    const handlecontact = (e) => {
        e.preventDefault();
        setUpdateContact(e.target.value);
        console.log(updatecontact)
    }
    const handleimage = (e) => {
        // e.preventDefault();
        // setUpdateImage(e.target.value);
        // console.log(updateLoginid)
    }

    const handlebranch = (e) => {
        // e.preventDefault();
        // setUpdateBranch(e.target.value);
        // console.log(updateLoginid)
    }
    const handleupdate = () => {
        // setUpdateid(info._id);
        console.log("___", updatename);
        console.log(data.info[0]);
        axios.put(`http://localhost:5000/HODprofile1`)
            .then(info => {
                console.log("____hiii___");
                setInfo(info.data);
                navigate("/admin");
            })
            .catch(error => console.log(error));

    }

    return (
        <>
            {!update ?
                <>
                    {info.map(info => {
                        return <div className="w-[1000px] h-[300px] bg-blue-300 p-16 ">
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
                                    <p className="mt-2 text-gray-500">LoginId : {info.loginid}</p>
                                    </div>

                                                            
                            
                                
                                    {/* <p>{info._id}_____</p> */}
                                 </div>
                        </div>
                        </div>
                    }

                    )}




                    {/* <button onClick={()=>{setdata({info});setUpdate("update");}}>Update Details</button> */}
                </> :
                <>
                    {info.map(info => {
                        return <div className="w-[1000px] flex flex-col h-[300px]  ">
                            <div className="flex flex-wrap -mx-3 mb-6">

                                <hr />
                                <hr />

                                <input type="text" placeholder={info.name} onChange={handlename} />
                                {/* &nbsp;<input className="border-red" type="text" /> */}

                                <input type="text" value={info.loginid} />
                                <input type="text" value={info.age} onChange={handleage} />
                                <input type="text" value={info.branch} onChange={handlebranch} />
                                <input type="text" value={info.contact} onChange={handlecontact} />
                                <input type="text" value={info.image} onChange={handleimage} />
                                <input type="text" value={info._id} />

                            </div>
                            <button onClick={handleupdate}>Submit</button>
                        </div>
                    }

                    )}

                    {/* <button onClick={()=>setUpdate("update")}>Update Details</button> */}

                </>
            }
        </>
    )
}
export default HODprofile;