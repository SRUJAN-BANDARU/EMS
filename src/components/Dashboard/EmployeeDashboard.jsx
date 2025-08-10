import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1C1C1C] h-screen w-screen p-7'>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
