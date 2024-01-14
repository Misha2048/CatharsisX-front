import { Route, Routes } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'

import SignUp from '@components/regestration/SignUp'
import Home from '@pages/Home'
import LogIn from '@components/regestration/LogIn'
import ForgotPasswordForm from '@components/ForgotPasswordForm'
import ResetPasswordForm from '@components/ResetPasswordForm'
import CheckVerify from '@pages/CheckVerify'
import Stillage from '@pages/Stillage'
import Header from '@components/Header'
import ProtectedRoute from '@components/ProtectedRoute'

dayjs.locale('en-gb')

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='check-email' element={<CheckVerify />} />
        <Route path='stillage/:id' element={<ProtectedRoute Component={Stillage} />} />
      </Route>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPasswordForm />} />
      <Route path={`/password-reset/:id`} element={<ResetPasswordForm />} />
    </Routes>
  )
}

export default App
