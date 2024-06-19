import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HOD from './screens/HOD';
import CreatePost from './screens/HODs/CreatePost';
import Notice from './components/Notice';
import Student from './screens/Student';
import Faculty from './screens/Faculty';

// import './App.css'

function App() {
  

  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<HOD />} />
 
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/student" element={<Student />} />
      {/* <Route path='/createpost' element={<CreatePost />} /> */}
      {/* <Route path='/allnotices' element={<Notice />} /> */}
      
      </Routes>
     </Router>
     </>
  )
}

export default App
