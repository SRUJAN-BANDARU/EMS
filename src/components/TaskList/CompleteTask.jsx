import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div>
      <div className="text-white h-60 flex-shrink-0 p-5 bg-green-500 w-[300px] rounded-xl flex flex-col justify-between">
        
        {/* Top content */}
        <div>
          <div className="flex justify-between items-center">
            {/* ✅ Changed from bg-red-600 to bg-green-700 */}
            <h3 className="bg-green-700 text-sm font-semibold py-1 px-4 rounded-sm">
              {data.category}
            </h3>
            <h4 className="font-medium text-sm">{data.date}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold line-clamp-2">{data.title}</h2>
          <p className="text-sm mt-3 line-clamp-3">{data.description}</p>
        </div>

        {/* Button fixed at bottom */}
        <div className="mt-4">
          <button className="w-full bg-green-700 hover:bg-green-800 text-white py-1 rounded-md">
            Completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
