import axios from 'axios'
import { BASE_URL } from '../config/api-config'

let axiosInstance = axios.create({
  baseURL: BASE_URL
})

export default axiosInstance
