import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 10个页面 每个页面都需要很多的状态管理
// 第一个页 ，就需要有10个状态

// 模块化
// 第一个页面
var firstPage = {
  state: {
    f1: 1,
    f2: 1,
    f3: 1
  },
  getters: {},
  mutations: {
    updateF1(state) {
      state.f1 = 10000;
    }
  },
  action: {}
}

// 第2个页面
var twoPage = {
  state: {
    t1: 1,
    t2: 1,
    t3: 1
  },
  getters: {},
  mutations: {
    updateT1(state) {
      state.t1 = 10000;
    }
  },
  action: {}
}

let store = new Vuex.Store({
  state:{
    n: 100,
    m: 600
  },
  getters:{
    addUserName(state){
      // 这里写处理state的逻辑
      return state.n + 'miaov';
    }
  },
  mutations:{
    updatedN(state,payload) {
      //if (payload.num > 300) return;
      // 写的时候，不能是异步更改数据，必须是同步的
      state.n = payload.num;
      /*setTimeout(() => {
        state.n = payload.num;
      }, 2000);*/
    },
  },
  actions:{
    changeNAction({ commit, dispatch }) {
      console.log('发送第一请求')
      setTimeout(() => {
        console.log('第一请求回来了')
        var result  = 3000;
        dispatch('getUserNameAction',{
          result
        })
      }, 2000);
    },
    getUserNameAction({ commit, dispatch },payload) {
      console.log('发送第2个请求')
      setTimeout(() => {
        console.log('第2个请求回来了')
        var r = 5000;
        commit('updatedN',{
          num: r + payload.result
        })
      }, 3000);
    }
  }
})

export default store;