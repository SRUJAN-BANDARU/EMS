import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'
const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen w-full'>
        <Header />
        <CreateTask />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard
