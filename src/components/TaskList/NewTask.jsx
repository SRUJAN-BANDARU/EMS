import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div>
      <div className="text-white h-60 flex-shrink-0 p-5 bg-blue-400 w-[300px] rounded-xl flex flex-col justify-between">
        
        {/* Top content */}
        <div>
          <div className="flex justify-between items-center">
            {/* ✅ Category background adjusted */}
            <h3 className="bg-blue-600 text-sm font-semibold py-1 px-4 rounded-sm">
              {data.category}
            </h3>
            <h4 className="font-medium text-sm">{data.date}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold line-clamp-2">{data.title}</h2>
          <p className="text-sm mt-3 line-clamp-3">{data.description}</p>
        </div>

        {/* Button at bottom */}
        <div className="mt-4">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium">
            Accept Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
