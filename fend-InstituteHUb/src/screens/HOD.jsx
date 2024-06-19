// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import CalendarEvent from "../components/CalendarEvent";
// const HOD=()=>{
//     return(
//      <>
//         <Navbar/>
//         {/* <CalendarEvent/> */}


        



//      </>   
//     );
// };
// export default HOD;



/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "..//components/Navbar";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import CalendarEvent from "../components/CalendarEvent";

import Navbar from "../components/Navbar";
import ALLHODS from "./HODs/ALLHODS";
import Notice from "../components/Notice";
import Attendance from "../components/Attendance";
import HODprofile from "./HODs/HODprofile";
import StudentLogins from "./HODs/StudentLogins";
import FacultyLogins from "./HODs/Faculty";
// import Notice from "../../components/Notice";
// import Student from "./Student";
// import Faculty from "./Faculty";
// import Subjects from "./Subject";
// import { baseApiURL } from "../../baseUrl";
// import Admin from "./Admin";
// import Profile from "./Profile";
// import Branch from "./Branch";

const HOD = () => {
//   const router = useLocation();
//   const navigate = useNavigate();
  // const [load, setLoad] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState("Profile");
  
  // useEffect(()=>{
  //   console.log("hi");
  // axios.get(`http://localhost:5000/HODprofile`)
  // .then(info=>{console.log(info.data);setInfo(info.data)})
  // .catch(error=>console.log(error))
  // } ,[]);

  
  // console.log("_______",message.giveId);
  
  //   const [dashboardData, setDashboardData] = useState({
//     studentCount: "",
//     facultyCount: "",
//   });
//   useEffect(() => {
//     if (router.state === null) {
//       navigate("/");
//     }
//     setLoad(true);
//   }, [navigate, router.state]);

//   useEffect(() => {
//     getStudentCount();
//     getFacultyCount();
//   }, []);

//   const getStudentCount = () => {
//     const headers = {
//       "Content-Type": "application/json",
//     };
//     axios
//       .get(`${baseApiURL()}/student/details/count`, {
//         headers: headers,
//       })
//       .then((response) => {
//         if (response.data.success) {
//           setDashboardData({
//             ...dashboardData,
//             studentCount: response.data.user,
//           });
//         } else {
//           toast.error(response.data.message);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const getFacultyCount = () => {
//     const headers = {
//       "Content-Type": "application/json",
//     };
//     axios
//       .get(`${baseApiURL()}/faculty/details/count`, {
//         headers: headers,
//       })
//       .then((response) => {
//         if (response.data.success) {
//           setDashboardData({
//             ...dashboardData,
//             facultyCount: response.data.user,
//           });
//         } else {
//           toast.error(response.data.message);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

  return (
    <>
      {
      //load &&
       (
        <>
          <Navbar />
          <div className="max-w-6xl mx-auto">
            <ul className="flex justify-evenly items-center gap-10 w-full mx-auto my-8">
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Profile"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Profile")}
              >
                Profile
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Attendance"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Attendance")}
              >
                Attendance
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Faculty"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Faculty")}
              >
                Faculty
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/3 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "StudentLogins"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("StudentLogins")}
              >
                Student Logins
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Notice"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Notice")}
              >
                Notice
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Subjects"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Subjects")}
              >
                Subjects
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Admin"
                    ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                    : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
                }`}
                onClick={() => setSelectedMenu("Admin")}
              >
                Admins
              </li>
            </ul>

            {<>
              {selectedMenu === "Notice" && <Notice />}
              {selectedMenu === "Admin" && <ALLHODS />}
              {selectedMenu === "Attendance" && <Attendance />}
              {selectedMenu === "StudentLogins" && <StudentLogins />}
              {selectedMenu === "Faculty" && <FacultyLogins />}
              {/* {selectedMenu === "Subjects" && <Subjects />}
              {selectedMenu === "Notice" && <Notice />}
              {selectedMenu === "Profile" && <Profile />}
               */}
              {selectedMenu === "Profile" && <HODprofile  />} 
            </> }
          </div>
        </>
      )}
      <Toaster position="bottom-center" />
    </>
  );
};

export default HOD;
