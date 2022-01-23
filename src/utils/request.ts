import axios from 'axios';

const service = axios.create({
 baseURL: process.env.VUE_APP_BASE_API,
 timeout: 3000
})

service.interceptors.request.use(
 (config) => {
  return config
 },
 (error) => {
  Promise.reject(error);
 }
)

service.interceptors.response.use(
 (response) => {
  return response.data
 }
)

export default service
