import React, { useState } from 'react'

const Header = (props) => {
  // console.log(data);
  // const [userName, setUserName] = useState("");
  // if(!data){
  //   setUserName("Admin");
  // }
  // else{
  //   setUserName(data.firstName);
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '');
    // window.location.reload();
    props.changeUser('');
  }
  return (
    <div className='flex justify-between items-start   bg-[#1C1C1C] text-white'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName 👋</span></h1>
      <button onClick={()=>{
        logOutUser();
      }} className='bg-red-500 py-1 px-3 rounded-xl hover:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header

