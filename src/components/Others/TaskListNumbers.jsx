import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex justify-between gap-5 text-white mt-6">
      {/* New Task */}
      <div className="px-9 py-6 w-1/2 bg-purple-500 hover:bg-purple-600 transition rounded-lg shadow-md">
        <h2 className="font-bold text-3xl">{data.taskCount.newTask}</h2>
        <h3 className="font-medium text-lg">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="px-9 py-6 w-1/2 bg-green-500 hover:bg-green-600 transition rounded-lg shadow-md">
        <h2 className="font-bold text-3xl">{data.taskCount.completed}</h2>
        <h3 className="font-medium text-lg">Completed</h3>
      </div>

      {/* Active Task */}
      <div className="px-9 py-6 w-1/2 bg-blue-500 hover:bg-blue-600 transition rounded-lg shadow-md">
        <h2 className="font-bold text-3xl">{data.taskCount.active}</h2>
        <h3 className="font-medium text-lg">Active</h3>
      </div>

      {/* Failed Task */}
      <div className="px-9 py-6 w-1/2 bg-red-500 hover:bg-red-600 transition rounded-lg shadow-md">
        <h2 className="font-bold text-3xl">{data.taskCount.failed}</h2>
        <h3 className="font-medium text-lg">Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
