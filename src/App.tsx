import React from 'react'
import SignUp from './components/Registration'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App
