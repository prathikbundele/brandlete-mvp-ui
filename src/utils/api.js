// api.js
import axios from 'axios';
import { isTokenExpired } from './auth';

// Create an Axios instance
const api = axios.create({
 baseURL: "https://brandlete-mvp-api.onrender.com",
  //baseURL: "http://localhost:3000",
});

// Token expiration and refresh handling
// api.interceptors.request.use(
//   async (config) => {
//     let token = localStorage.getItem('token');

//     // Check if the token is expired
//     if (isTokenExpired(token)) {
//       token = await refreshToken();
//       if (token) {
//         localStorage.setItem('token', token);
//       } else {
//         localStorage.removeItem('token');
//         window.location.href = '/login';
//       }
//     }
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

api.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token');
      if(!token){
        return
      }
      if (isTokenExpired(token)) {
        await handleTokenExpiration();
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  async function handleTokenExpiration() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  
async function refreshToken() {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('/auth/refresh', { refreshToken });
    const { token, refreshToken: newRefreshToken } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', newRefreshToken);
    return token;
  } catch (error) {
    window.location.href = '/login';
    return null;
  }
}

export default api;
