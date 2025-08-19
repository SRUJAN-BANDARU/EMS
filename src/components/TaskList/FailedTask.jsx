import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div>
      <div className="text-white h-60 flex-shrink-0 p-5 bg-red-500 w-[300px] rounded-xl flex flex-col justify-between">
        
        {/* Top content */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm font-semibold py-1 px-4 rounded-sm">
              {data.category}
            </h3>
            <h4 className="font-medium text-sm">{data.date}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
          <p className="text-sm mt-3">{data.description}</p>
        </div>

        {/* Button fixed at bottom */}
        <div className="mt-4">
          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-1 rounded-md">
            Failed
          </button>
        </div>

      </div>
    </div>
  )
}

export default FailedTask
