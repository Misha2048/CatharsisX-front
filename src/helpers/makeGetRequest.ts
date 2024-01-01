import { setValue } from '../redux/slices/UserSlice'
import { api } from '../api/index'
import { Dispatch } from 'redux'

async function makeGetRequest(dispatch: Dispatch) {
  try {
    const response = await api.users.me()
    const isEmailVerified = response.email_verified

    if (isEmailVerified) {
      dispatch(setValue({field:"emailVerified", value: true}))
    } else {
      dispatch(setValue({field:"emailVerified", value: false}))
    }

    return isEmailVerified
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error)
    throw error
  }
}

export default makeGetRequest