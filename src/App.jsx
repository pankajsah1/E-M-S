import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email == 'pankaj@me.com' && password == 123){
      setUser('admin')
    }
    else if(email == 'user@me.com' && password == 123){
      setUser('employee')
    }
    else{
      alert("Invalid Credential")
    }
  } 
  
  const data = useContext(AuthContext)
  console.log(data)
  // handleLogin("user@me.com", 123)
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App