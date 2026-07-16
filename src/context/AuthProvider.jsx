import React, {createContext} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()
import { useState, useEffect } from 'react'

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    
    // const setingData = setLocalStorage();
    useEffect(() => {
      setLocalStorage()
      const {employees, admin} = getLocalStorage()
      setUserData({employees, admin})
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value = {userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider