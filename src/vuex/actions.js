import Services from './services'
import axios from 'axios'

export default {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.user) {
      const { email, nickname, avatarUrl } = req.session.user
      const user = {
        email,
        nickname,
        avatarUrl
      }

      commit('SET_USER', user)
    }
  },

  async login ({ commit }, { email, password }) {
    try {
      let res = await axios.post('/admin/login', {
        email,
        password
      })

      const { data } = res
      
      if (data.success) commit('SET_USER', data.data)

      return data
    } catch (e) {
      if (e.response.status === 401) {
        throw new Error('来错地方了')
      }
    }
  },

  async logout ({ commit }) {
    await axios.post('/admin/logout')

    commit('SET_USER', null)
  },

  async createOrder ({ state }, obj) {
    const { data } = Services.createOrder(obj)

    return data
  },

  getWechatSignature({ commit }, url) {
    return Services.getWechatSignature(url)
  },

  getUserByOAuth({ commit }, url) {
    return Services.getUserByOAuth(url)
  },

  getWechatOAuth({ commit }, url) {
    return Services.getWechatOAuth(url)
  },

  setAuthUser ({ commit }, authUser) {
    commit('SET_AUTHUSER', authUser)
  },

  async fetchHouses ({ state }) {
    const res = await Services.fetchHouses()

    state.houses = res.data.data

    return res
  },

  async fetchCharacters ({ state }) {
    const res = await Services.fetchCharacters()

    state.characters = res.data.data

    return res
  },

  async showHouse ({ state }, _id) {
    if (_id === state.currentHouse._id) return

    const res = await Services.fetchHouse(_id)

    state.currentHouse = res.data.data

    return res
  },

  async showCharacter ({ state }, _id) {
    if (_id === state.currentCharacter._id) return

    const res = await Services.fetchCharacter(_id)

    console.log(res.data)
    state.currentCharacter = res.data.data

    return res
  },

  async fetchProducts ({ state }) {
    const res = await Services.fetchProducts()

    state.products = res.data.data

    return res
  },

  async showProduct ({ state }, _id) {
    if (_id === state.currentProduct._id) return

    const res = await Services.fetchProduct(_id)
    console.log(res.data)
    state.currentProduct = res.data.data

    return res
  },


  async saveProduct ({ state, dispatch }, product) {
    await axios.post('/api/products', product)

    let res = await dispatch('fetchProducts')

    return res.data.data
  },

  async putProduct ({ state, dispatch }, product) {
    await axios.put('/api/products', product)
    let res = await dispatch('fetchProducts')

    return res.data.data
  },

  async deleteProduct ({ state, dispatch }, product) {
    await axios.delete(`/api/products/${product._id}`)
    let res = await dispatch('fetchProducts')

    return res.data.data
  },

  async fetchPayments ({ state }) {
    let { data } = await Services.getPayments()
    state.payments = data.data

    return data
  },

 

  async fetchUserAndOrders ({ state }) {
    const res = await Services.fetchUserAndOrders()

    state.user = res.data.data

    return res
  },
  async fetchVideoes ({ state }) {
    //console.log("actions->fetchVideoes")
     const res = await Services.fetchVideoes()
     state.videoList = res.data.data.data
   
    //console.log("state.videoLists:"+JSON.stringify(state.videoList))
    return res
  },

  async  fetchLiveAddress({ state },deviceSerial,channelNo){
    //console.log("actions->getLiveAddress",deviceSerial,channelNo)
    if(deviceSerial===state.currentLive.deviceSerial && channelNo===state.currentLive.channelNo )return
    //state.currentLive={};
    const res = await Services.fetchLiveAddress(deviceSerial,channelNo)
    
    if(res.data.success ){
        state.currentLive=res.data.data.data
        //console.log("actions->getLiveAddress:state.currentLive",JSON.stringify(state.currentLive))
    }

    return res
},

  async fetchVideoInfo ({ state },_id) {
     console.log("actions->fetchVideoInfo-->id:",_id)
     if(_id===state.currentVideoInfo.deviceSerial  || _id===null)return
     const res = await Services.fetchVideoeInfo(_id)
     state.currentVideoInfo = res.data.data.data
   
    //console.log("state.fetchVideoInfo:"+JSON.stringify(state.currentVideoInfo))
    return res
  },

  async fetchDeviceMsg({ state },deviceSerial) {
    //console.log("actions->fetchDeviceMsg-->deviceSerial:",deviceSerial)
    const res = await Services.fetchDeviceAlarms(deviceSerial)
    //state.alarmList = res.data.data
    state.msgList.baseMsg.push(res.data.data)
    //console.log("state.fetchDeviceAlarms:"+JSON.stringify(res.data))
   return res
 },

//   async fetchAlarms ({ state },_id) {
//     console.log("actions->fetchVideoInfo-->id:",_id)
//     if(_id===state.currentVideoInfo.deviceSerial  || _id===null)return
//     const res = await Services.fetchVideoeInfo(_id)
//     state.currentVideoInfo = res.data.data.data
  
//    //console.log("state.fetchVideoInfo:"+JSON.stringify(state.currentVideoInfo))
//    return res
//  }



  
}