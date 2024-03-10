import { jwtDecode } from 'jwt-decode'

export function checkUserIsLoggedIn() {
  const refreshToken = localStorage.getItem('refreshToken')
  if (!refreshToken) return false
  const decodedToken = jwtDecode(refreshToken)
  if (decodedToken.exp && decodedToken.exp * 1000 > new Date().getTime()) {
    return true
  } else {
    return false
  }
}
