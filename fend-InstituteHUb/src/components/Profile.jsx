const Profile=()=>{

    
  useEffect(()=>{
    console.log("hi");
  axios.get(`http://localhost:5000/HODprofile`)
  .then(info=>{console.log(info.data);setInfo(info.data)})
  .catch(error=>console.log(error))
  } ,[]);

  
    return(
        <>


        </>
    )
}
export default Profile;