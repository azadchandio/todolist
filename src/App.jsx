import React from 'react'

import Completed from './pages/Completed'
import { Route, Routes } from 'react-router'
import Pending from './pages/Pending'
import MainLayout from './pages/MainLayout'
import Tasks from './pages/Tasks'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index  element={<Tasks/>}/>
          <Route path='completed' element={<Completed/>}/>
          <Route path='pending' element={<Pending/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App