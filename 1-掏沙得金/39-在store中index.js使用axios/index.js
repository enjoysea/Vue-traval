import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
var url = 'https://easy-mock.com/mock/5b2dfc86d901cc25e7df4d52/test/new_list'
let store = new Vuex.Store({
  state:{
    title: '',
    list:[]
  },
  getters:{  // 对state做逻辑处理 类似组件中的computed
    filterList(state){
      return state.list.filter(item => item.data > 3)
    }
  },
  mutations:{
    // 关键步骤四
    changeTitle(state,payload){ // {title:XXX}
      state.title = payload.title;
    },
    changeList(state,payload){ // {list:[]}
      state.list = payload.list;
    }
  },
  actions:{
    // 关键步骤三
    getListAction({commit}){
      axios(url).then(({data}) => {
        console.log('请求回来了')
        console.log(data)
        commit('changeTitle', { title: data.data.title })
        commit('changeList', { list: data.data.list})
      })
      .catch((e)=>{
        console.log(e)
      })
    }
  }
})

export default store;