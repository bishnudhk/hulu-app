import React from 'react'
import Navbar from './component/Navbar'
import {Routes,Route,Link } from "react-router-dom"
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  return (
    <>
    {/* <h1 className='text-white'>hello</h1> */}
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={
      <ProtectedRoute>
        <Account />
       </ProtectedRoute>
    } />


    </Routes>
    </AuthContextProvider>
    </>
    
  )
}

export default App