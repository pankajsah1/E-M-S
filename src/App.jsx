import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  // localStorage.clear()
  

  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    
  }, [])

  const handleLogin = (email, password) => {
    if(email == 'pankaj@me.com' && password == 123){
      // setUser({role: 'admin'})
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && password == e.password)
      if(employee){
        // setUser({role: 'employee'})
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data: employee}))
      }
    }
    else{
      alert("Invalid Credential") 
    }
  } 
  
  // handleLogin("user@me.com", 123)
  // console.log(user)
  return (
    <>
    {/* {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>} */}

    {!user && <Login handleLogin={handleLogin} />}
    {user === "admin" && <AdminDashboard/>}
    {user === "employee" && <EmployeeDashboard data = {LoggedInUserData}/>}
    </>
  )
}

export default App