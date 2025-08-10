import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'
// import { AuthContext } from './context/AuthProvider'
const App = () => {
  // useEffect(() => {
  //   getLocalStorage()
  
  // }, [])

  const [user, setUser] = useState(null);

  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    }
    else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials");
    }    
  }

  
  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user == 'admin' && <AdminDashboard />}
      {user == 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App
