import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className='shadow-sm py-4 pl-5 pr-5 bg-[#F8F8F8] flex justify-between'>
        <h1 className='text-2xl font-medium '><span className='text-[#FF6767]'>To</span>-Do App</h1>
        <button className='text-2xl font-medium cursor-pointer hover:underline hover:decoration-[#FF6767] hover:underline-offset-4'>
          Login
        </button>
    </div>   
    </>
  )
}

export default Navbar