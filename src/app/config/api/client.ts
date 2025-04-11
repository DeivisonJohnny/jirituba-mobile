import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_DEFAULT_URL || 'http://10.102.0.22:3443',
    timeout: 10000,
    headers: { "Content-Type": 'application/json' }
  });
  
export default api;