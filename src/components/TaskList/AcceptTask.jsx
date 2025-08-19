import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div>
      <div className="flex-shrink-0 text-black h-60 p-5 bg-yellow-400 w-[300px] rounded-xl flex flex-col justify-between">
        
        {/* Top content */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="bg-yellow-600 text-sm font-semibold py-1 px-4 rounded-sm">
              {data.category}
            </h3>
            <h4 className="font-medium text-sm">{data.date}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold line-clamp-2">{data.title}</h2>
          <p className="text-sm mt-3 line-clamp-3">{data.description}</p>
        </div>

        {/* Buttons fixed at bottom */}
        <div className="flex justify-between mt-4">
          <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-2 text-sm rounded-md">
            Mark as Completed
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 text-sm rounded-md">
            Mark as Failed
          </button>
        </div>

      </div>
    </div>
  )
}

export default AcceptTask
