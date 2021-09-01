import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储登录⽤户数据，尝试读取本地存储数据，将数据设置到本地存储，避免刷新导致重新登录
    user: JSON.parse(window.localStorage.getItem('lagou-edu-mobile-user') || null)
  },
  // 修改state，唯一的用mutation
  mutations: {
    // ⽤于修改 user
    setUser(state, payload) {
      // payload 为请求到的⽤户数据，是一个JSON 格式且不便操作，需要转换为对象存储
      state.user = JSON.parse(payload)
      // 将数据设置到本地存储，注意本地存储⽆法存储对象,只能存储json格式
      /*
      localStorage.setItem(key,value)：将value存储到key字段
      */
      window.localStorage.setItem('lagou-edu-mobile-user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
