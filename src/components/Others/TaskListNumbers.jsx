import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex screen justify-between gap-5 text-white'>
      <div className='px-9 py-6 w-1/2 bg-red-400 mt-10 rounded-md'>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-medium text-xl '>New Task</h3>
      </div>

      <div className='px-9 py-6 w-1/2 bg-green-400 mt-10 rounded-md'>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-medium text-xl '>New Task</h3>
      </div>

      <div className='px-9 py-6 w-1/2 bg-blue-400 mt-10 rounded-md'>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-medium text-xl '>New Task</h3>
      </div>

      <div className='px-9 py-6 w-1/2 bg-yellow-400 mt-10 rounded-md'>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-medium text-xl '>New Task</h3>
      </div>
      
    </div>
  )
}

export default TaskListNumbers
