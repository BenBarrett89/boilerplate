import { DOMAIN_PATH } from '../config/api-config'

const domainService = axiosInstance => {
  const deleteDomainService = id => {
    return new Promise((resolve, reject) => {
      axiosInstance.delete(`${DOMAIN_PATH}/${id}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.error(error)
          reject(error)
        })
    })
  }

  const getDomainsService = () => {
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

  const postDomainService = domain => {
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

  return {
    deleteDomainService,
    getDomainsService,
    postDomainService
  }
}

module.exports = {
  init: domainService
}
