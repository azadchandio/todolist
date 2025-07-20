import React, { useEffect, useState } from 'react'

function Completed() {
  const [completedTasks,setCompletedTasks]= useState([]);

  useEffect(()=>{
    const data = localStorage.getItem("tasks");
    if(data){
      const parseData = JSON.parse(data);
      const completed = parseData.filter(task => task.completed === true);
      setCompletedTasks(completed);
    }
  },[])
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold mt-4'>Completed Tasks</h1>
      <div>
        {completedTasks.length === 0 ? (
          <p>No Completed Tasks</p>
        ):(
          completedTasks.map((task,index)=>(
            <div key={index} className='border p-4 mt-4 rounded-md bg-green-100'>
              <h1 className='text-xl line-through text-gray-600'>{task.name}</h1>
            </div>
          ))
        )
      }
      </div>
    </div>
  )
}

export default Completed