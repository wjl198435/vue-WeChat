import axios from 'axios'
// axios.defaults.baseUrl='http://localhost:8081';
// axios.defaults.headers.common['Authorization']=AUTH_TOKEN;

const baseUrl = 'http://localhost:8081'

class Services {
  getWechatSignature (url) {
    return axios.get(`${baseUrl}/wechat-signature?url=${url}`)
  }

  getUserByOAuth (url) {
    return axios.get(`${baseUrl}/wechat-oauth?url=${url}`)
  }

  getWechatOAuth (url) {
    return axios.get(`${baseUrl}/wechat-oauth?url=${encodeURIComponent(url)}`)
  }

  createOrder ({ productId, name, address, phoneNumber }) {
    return axios.post(`${baseUrl}/wechat-pay`, {
      productId,
      name,
      address,
      phoneNumber
    })
  }

  getPayments () {
    return axios.get(`${baseUrl}/admin/payments`)
  }

  fetchHouses () {
    return axios.get(`${baseUrl}/wiki/houses`)
  }

  fetchHouse (id) {
    return axios.get(`${baseUrl}/wiki/houses/${id}`)
  }

  fetchCharacters () {
    return axios.get(`${baseUrl}/wiki/characters`)
  }

  fetchCharacter (id) {
    return axios.get(`${baseUrl}/wiki/characters/${id}`)
  }

  fetchProducts () {
    return axios.get(`${baseUrl}/api/products`)
  }

  fetchProduct (id) {
    return axios.get(`${baseUrl}/api/products/${id}`)
  }

  fetchUserAndOrders () {
    return axios.get(`${baseUrl}/api/user`)
  }

  fetchVideoes () {
    console.log("service->fetchVedioes ")
    return axios.post('/ys7/selectListDevices',{})
    //return axios.post(`${baseUrl}/ys7/selectListDevices`,{})
  }

  fetchVideoeInfo({deviceSerial}){
    console.log("services->fetchVideoInfo ")
    return axios.post('/ys7/selectDeviceInfo',{
        deviceSerial
    })
  }
}

export default new Services()