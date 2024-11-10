// api.js
import axios from 'axios';
import { isTokenExpired } from './auth'; // Helper function to check token expiration

// Create an Axios instance
const api = axios.create({
  baseURL: "https://brandlete-mvp-api.onrender.com",
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
      // If the token is expired, redirect to login or refresh token
      if (isTokenExpired(token)) {
        // Handle expired token: Redirect to login or request new token
        await handleTokenExpiration();
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  async function handleTokenExpiration() {
    // Redirect to login or request a refresh token
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  

// Function to refresh the token
async function refreshToken() {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('/auth/refresh', { refreshToken });
    const { token, refreshToken: newRefreshToken } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', newRefreshToken);
    return token;
  } catch (error) {
    // Redirect to login if refresh fails
    window.location.href = '/login';
    return null;
  }
}

export default api;
