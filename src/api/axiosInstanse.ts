import axios, { AxiosRequestConfig } from 'axios'
import { store } from '../redux/store'
import { setTokens, clearTokens } from '../redux/slices/tokensSlice'
import history from '../helpers/customRouter/history'
import { setHint } from '../redux/slices/hintSlice'

interface ConfigType extends AxiosRequestConfig {
  _isRetry: boolean
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response.status === 403) {
      return error.response
    }

    if (
      error.response.status !== 401 &&
      error.response.status >= 400 &&
      error.response.status <= 599
    ) {
      store.dispatch(setHint({ message: error.response.data.message }))
      return error.response
    }

    const originalRequest = { ...error.config }
    const refreshToken = localStorage.getItem('refreshToken')
    if (error.response.status === 401 && !error.config._isRetry && refreshToken) {
      originalRequest._isRetry = true
      try {
        const resp = await axiosInstance.get('/auth/refresh', {
          headers: { Authorization: `Bearer ${refreshToken}` },
          _isRetry: true,
        } as ConfigType)
        if (resp.data.accessToken && resp.data.refreshToken) {
          store.dispatch(setTokens(resp.data))
        }
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
        return axiosInstance.request(originalRequest)
      } catch (error) {
        console.log(error)
      }
    } else {
      store.dispatch(clearTokens())
      history.push('/login')
      return error.response
    }
  },
)

export default axiosInstance
