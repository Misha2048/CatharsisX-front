import { setValue } from '../redux/slices/UserSlice'
import { api } from '../api/index'
import { Dispatch } from 'redux'

// Change signatures DONE
async function getEmailStatusAndChangeStore(dispatch: Dispatch) {
  try {
    const responseFromMe = await api.users.me()
    const isEmailVerified = responseFromMe.email_verified

    if (isEmailVerified) {
      dispatch(setValue({emailVerified: true}))
    } else {
      dispatch(setValue({emailVerified: false}))
    }

    return isEmailVerified
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error)
    throw error
  }
}

export default getEmailStatusAndChangeStore