import { jwtDecode } from 'jwt-decode'

type funcType = React.Dispatch<React.SetStateAction<boolean>>

export function checkUserIsLoggedIn(setIsUserLoggedIn: funcType) {
  const refreshToken = localStorage.getItem('refreshToken')
  if (!refreshToken) return setIsUserLoggedIn(false)
  const decodedToken = jwtDecode(refreshToken)
  if (decodedToken.exp && decodedToken.exp * 1000 > new Date().getTime()) {
    return setIsUserLoggedIn(true)
  } else {
    return setIsUserLoggedIn(false)
  }
}
