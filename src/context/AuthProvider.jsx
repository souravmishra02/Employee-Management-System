import React, { createContext, useEffect, useState } from 'react'
import { getLocalStrorage, setLocalStrorage } from '../utils/LocalStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
    const [userData, setUserData] = useState(null)
    

    useEffect(() => {
      setLocalStrorage()
      const storageData = getLocalStrorage();
      const {employees}= storageData
      setUserData(employees)
  },[])
    
  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}

        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider