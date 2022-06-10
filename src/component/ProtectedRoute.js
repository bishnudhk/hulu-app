import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
const ProtectedRoute = ({children}) => {
  const {user} = UserAuth();

  // if user is not true
  if(!user){
    return <Navigate to='/' />
  }else{
    return children;
  }
  return (
    <div>ProtectedRoute</div>
  )
}
// firestore for firebase 
// firestore known as cloud store 
export default ProtectedRoute