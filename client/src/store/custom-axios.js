import axios from 'axios';

// axios instance for making requests 
const axiosInstance = axios.create();
// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  console.log("akhsashakd")
  // add token to request headers
  config.headers['authorization'] = "Bearer "+JSON.parse(localStorage.getItem('token'))
  config.headers['Content-Type']= 'application/json'
  return config;
});

export default axiosInstance;