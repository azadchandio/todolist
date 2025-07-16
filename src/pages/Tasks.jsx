import { Pencil, Plus, Trash2Icon, X } from 'lucide-react'
import React, { useState } from 'react'

const Tasks = () => {
  const [showModal,setShowModal]= useState(false)
  const [name,setName] = useState("");
  const [tasks,setTasks] = useState(()=>{
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) :[]
  })
  
  function handleTaskAdd (){
    setTasks([...tasks ,name])
    setName("")
    setShowModal(false)
  }

  function handleDeleteTask(indexToDelete) {
    const newTasks = tasks.filter((_, i) => i !== indexToDelete);
    setTasks(newTasks);
  }


  
  localStorage.setItem("tasks",JSON.stringify(tasks))
  
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold'>Add Tasks</h1>
      {/* button for adding tasks */}
      <button onClick={()=> setShowModal(true)} className='p-4 bg-[#FF6767]/80 rounded-full cursor-pointer mt-2'>
        <Plus className='w-20 h-20'/>
      </button>

      {/* showing tasks */}
      <div className='w-full mt-4 space-y-4'>
        {tasks.map((task,index)=>(
          <div key={index} className='border w-full flex items-center p-6'>
          <input type="checkbox" name="" id="" className='mr-4 pl-5' />
          <div className='flex-1'>
            <h1 className='font-medium text-2xl'>{task}</h1>
          </div>
          <div className='flex gap-4'>
            <button className='cursor-pointer'><Pencil className='text-blue-600'/></button>
            <button onClick={()=>handleDeleteTask(index)} className='cursor-pointer'><Trash2Icon className='text-red-600'/></button>
          </div>
          </div>
        ))
        }
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
            <input onChange={(e)=> setName(e.target.value)} value={name}  className='py-2 border-none' type="text" placeholder='Enter task name' />
            <button onClick={handleTaskAdd}  className='px-5 py-3 bg-[#FF6767] rounded-2xl cursor-pointer'>Add task</button>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tasks