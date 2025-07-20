import React, { useEffect, useState } from 'react'

const Pending = () => {
  const [pendingTasks,setPendingTasks] = useState([])

  useEffect(()=>{
    const data = localStorage.getItem("tasks")
    if(data){
      const parsedTask = JSON.parse(data)
      const pending = parsedTask.filter(task => task.completed === false);
      setPendingTasks(pending);
    }
  },[]);

  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold mb-4'>pending tasks</h1>
      <div className='space-y-4'>
        {pendingTasks.length === 0 ?(
          <p>no pending tasks</p>
        ):(
          pendingTasks.map((task,index)=>(
            <div key={index} className='border p-4 rounded-md bg-red-100'>
              <h1 className='text-xl text-gray-600'>{task.name}</h1>
            </div>
          ))
        )
       }
      </div>
    </div>
  )
}

export default Pending