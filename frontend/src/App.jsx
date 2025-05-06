// import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import Courses from './components/Courses'
import Buy from './components/Buy'
import Purchases from './components/Purchases'
import AdminSignUp from './admin/AdminSignUp'
import AdminLogin from './admin/AdminLogin'
import Dashboard from './admin/Dashboard'
import CourseCreate from './admin/CourseCreate'
import UpdateCourse from './admin/UpdateCourse'
import OurCourses from './admin/OurCourses'
import { Navigate } from 'react-router-dom'

function App() {

  const user=JSON.parse(localStorage.getItem("user"))
  const admin=JSON.parse(localStorage.getItem("admin"))



  

  return (
    <>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>


       {/* other routes */}
       <Route path="/courses" element={<Courses/>}/>
       <Route path="/buy/:courseId" element={<Buy/>}/>
       <Route path="/purchases" element={user?<Purchases/>:<Navigate to={"/login"}/>}/>
       


       {/* Admin Routes */}

       <Route path="/admin/signup" element={<AdminSignUp/>}/>
       <Route path="/admin/login" element={<AdminLogin/>}/>

       {/* agar admin login tabhi usko admin dashboard par jaane do create update delete krna toh token se hogga hi dekhne tak mat do agar token nhi hai... */}
       <Route path="/admin/dashboard" element={admin?<Dashboard/>:<Navigate to={"/admin/login"}/>}/>
       <Route path="/admin/create-course" element={<CourseCreate/>}/>
       <Route path="/admin/update-course/:id" element={<UpdateCourse/>}/>

       <Route path="/admin/our-courses" element={<OurCourses/>}/>







    </Routes>
    <Toaster />
    
   

    
    
    </>
  )
}

export default App
