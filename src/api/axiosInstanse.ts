import axios from 'axios';
import { store } from '../redux/store';
import { setTokens, clearTokens } from '../redux/slices/tokensSlice';
import history from '../helpers/customRouter/history';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,

  async error => {
    const originalRequest = { ...error.config };
    originalRequest._isRetry = true;
    const refreshToken = localStorage.getItem('refreshToken');
    if (error.response.status === 401 && !error.config._isRetry && refreshToken) {
      try {
        const resp = await axiosInstance.get('/auth/refresh', {
          headers: { Authorization: `Bearer ${refreshToken}` },
        });
        store.dispatch(setTokens(resp.data));
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        return axiosInstance.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    } else {
      store.dispatch(clearTokens());
      history.push('/login');
      return error.response;
    }
  },
);

export default axiosInstance;
