import axiosInstance from './axios-instance'
import { DOMAIN_PATH } from '../config/api-config'

const getDomains = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(DOMAIN_PATH)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
  })
}

const postDomain = (domain) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(DOMAIN_PATH, domain)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
  })
}

module.exports = {
  getDomains,
  postDomain
}
