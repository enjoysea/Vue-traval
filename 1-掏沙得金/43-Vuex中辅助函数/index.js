import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建一个容器
let store = new Vuex.Store({
  state: {
    total: 1000,
    n:10,
    m: 30
  },
  mutations:{
    /*changeN(state) {
     state.n = 1000000;
     },
     changeM(state) {
     state.m = 1000000;
     }*/
    changeN(state, payload) {
      state.n = payload.num;
    },
    changeM(state) {
      state.m = 1000000;
    }
  }
})

export default store;