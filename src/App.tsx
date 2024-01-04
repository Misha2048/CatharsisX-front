import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import LogIn from './components/regestration/LogIn'
import SignUp from './components/regestration/SignUp'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import ResetPassworForm from './components/ResetPasswordForm'
import Footer from './components/Footer'
import Stillage from '@pages/Stillage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPasswordForm />} />
      <Route path={`/password-reset/:id`} element={<ResetPassworForm />} />
      <Route path={`/footer`} element={<Footer />} />
      <Route path='/stillage/:id' element={<Stillage />} />
    </Routes>
  )
}

export default App
