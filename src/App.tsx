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
import ProtectedRoute from '@components/ProtectedRoute'
import Library from '@pages/Library'
import MyStillages from '@pages/MyStillages'
import LikedStillages from '@pages/LikedStillages'
import Forum from '@pages/Forum'
import ForumTopicPage from '@pages/ForumTopicPage'

dayjs.locale('en-gb')

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/check-email' element={<CheckVerify />} />
      <Route path='/stillages' element={<ProtectedRoute component={MyStillages} />} />
      <Route path='/stillages/:id' element={<ProtectedRoute component={Stillage} />} />
      <Route path='/stillages/liked' element={<ProtectedRoute component={LikedStillages} />} />
      <Route path='/library' element={<ProtectedRoute component={Library} />} />
      <Route path='/forum' element={<ProtectedRoute component={Forum} />} />
      <Route path='/forum/:id' element={<ProtectedRoute component={ForumTopicPage} />} />

      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPasswordForm />} />
      <Route path={`/password-reset/:id`} element={<ResetPasswordForm />} />
    </Routes>
  )
}

export default App
