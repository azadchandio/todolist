import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'

const Tasks = () => {
  const [showModal,setShowModal]= useState(false)
  
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold'>Add Tasks</h1>
      {/* button for adding tasks */}
      <button onClick={()=> setShowModal(true)} className='p-4 bg-[#FF6767] rounded-full cursor-pointer mt-2'>
        <Plus className='w-20 h-20'/>
      </button>

      {/* showing tasks */}
      <div className='border w-full p-4 flex items-center mt-4'>
        <input type="checkbox" name="" id="" className='mr-4' />
        <div className='flex-1'>
          <h1 className='font-medium'>task name</h1>
          <p className='text-sm text-gray-600'>date</p>
        </div>
        <div className='flex gap-2'>
          <button className='px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600'>edit</button>
          <button className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'>delete</button>
        </div>
      </div>

      {/* show modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black/20 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 w-96 max-w-md mx-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl'>Add New Tasks</h2>
            <button onClick={()=> setShowModal(false)} className='cursor-pointer' ><X className='w-6 h-6'/></button>
          </div>
          <div className='mt-5 '>
            <div className='space-y-4 flex flex-col'>
            <input className='py-2 border-none' type="text" placeholder='Enter task name' />
            <button className='px-5 py-3 bg-[#FF6767] rounded-2xl'>Add task</button>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tasks