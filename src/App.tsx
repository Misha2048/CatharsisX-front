import { Route, Routes } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'

import SignUp from '@components/regestration/SignUp'
import Home from '@pages/Home'
import LogIn from '@components/regestration/LogIn'
import ForgotPasswordForm from '@components/ForgotPasswordForm'
import ResetPasswordForm from '@components/ResetPasswordForm'
import Stillage from '@pages/Stillage'

dayjs.locale('en-gb')

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPasswordForm />} />
      <Route path={`/password-reset/:id`} element={<ResetPasswordForm />} />
      <Route path='/stillage/:id' element={<Stillage />} />
    </Routes>
  )
}

export default App
