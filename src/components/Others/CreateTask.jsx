import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className='p-5 bg-[#282525] mt-7 rounded-md'>
            <form className='flex w-full flex-wrap items-start justify-between'>

                <div className='w-1/2'>
                    <div>
                        <label htmlFor="title"><h3>Title</h3></label>
                        <input type="text" placeholder='Make a UI Design' id='title' className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>
                    <div>
                        <label htmlFor="date"><h3>Date</h3></label>
                        <input type="date" name="" id="date" 
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>

                    <div>
                        <h3>Assign to</h3>
                        <input type="text" placeholder='Employee name'
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>

                    <div>
                        <h3>Category</h3>
                        <input type="text" placeholder='Design, Dev, etc..'
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>
                </div>

                <div className='w-1/2'>
                    <label htmlFor="des"><h3>Description</h3></label>
                    <textarea name="" id="des" rows="10" cols="30" 
                    className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'></textarea>

                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            
                
            </form>
        </div>
    </div>
  )
}

export default CreateTask
