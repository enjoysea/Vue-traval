import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// 容器 state中的数据发生变化，组件会自动更新 这些数据是响应的
let store = new Vuex.Store({
  state: {  
    n: 0
  },
  mutations:{
    changeN(state,obj){ 
      // 同步改变
      state.n = obj.val;
      // 只要提交mutation就会记录日志，当记录日志的时候
      // n还没有发生变化，就不会改变后的n的日志了，
      // 记录的n的值还是之前的
      /*setTimeout(() => {
        state.n = obj.val;
      }, 1000);*/
    }
  },
  actions:{
    // store 当前vuex的实例
    // 关键点二
    changeNAction(store,obj){
      setTimeout(() => {
        store.commit('changeN', obj)
      }, 1000);
    }
  }
})

export default store;