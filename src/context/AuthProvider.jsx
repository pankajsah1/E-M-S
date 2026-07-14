import React, {createContext} from 'react'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthContext.Provider value = {"Pankaj"}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider