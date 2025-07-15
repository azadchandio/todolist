import React from 'react'
import Navbar from './components/Navbar'
import Sidear from './components/Sidear'
import Completed from './pages/Completed'
import { Route, Routes } from 'react-router'
import Pending from './pages/Pending'
import MainLayout from './pages/MainLayout'

const App = () => {
  return (
    <div>
      <MainLayout/>
      <Routes>
        <Route path='completed' element={<Completed/>}/>
        <Route path='pending' element={<Pending/>}/>
      </Routes>
    </div>
  )
}

export default App