import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://26bb-113-199-212-221.ngrok-free.app/api',
  // timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosInstance;