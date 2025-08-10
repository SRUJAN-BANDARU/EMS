import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-start   bg-[#1C1C1C] text-white'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Srujan👋</span></h1>
      <button className='bg-red-500 py-1 px-3 rounded-xl hover:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header

