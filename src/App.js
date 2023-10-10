import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

export default function App() {
  let[isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route  path="signup" element={<Signup  setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route  path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}
