import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {

  const authData = useContext(AuthContext);

  // console.log(authData.employees);
  

  return (
    <div id='tasklist' className='bg-[#2b2828] p-5 mt-5 rounded  '>

      <div className='bg-red-400 mb-2 px-4 py-2 flex justify-between rounded '>
        <h2 className='text-lg font-medium w-1/5'>Emp Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>
      
      <div className=''>
        {authData.employees.map((elem, idx)=>{
        return <div className='border-2 border-emerald-500 mb-2 px-4 py-2 flex justify-between rounded ' key={idx}>
                  <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                  <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskCount.newTask}</h3>
                  <h5 className='text-lg font-medium w-1/5 text-yellow-500'>{elem.taskCount.active}</h5>
                  <h5 className='text-lg font-medium w-1/5 text-white-500'>{elem.taskCount.completed}</h5>
                  <h5 className='text-lg font-medium w-1/5 text-red-500'>{elem.taskCount.failed}</h5>
              </div>
      })}
      </div>
    </div>
  )
}

export default AllTasks
