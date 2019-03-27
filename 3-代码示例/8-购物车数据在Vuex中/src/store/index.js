import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

var shopListUrl = 'https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/shop/shop-list'

const store = new Vuex.Store({
  state:{
    shopList:[]
  },
  getters:{
    isCheckedAll(state){
      return state.shopList.every(item => item.checked)
    }
  },
  mutations:{
    changeShopList(state,plaload){  // {list:[]}
      state.shopList = plaload.list;
    },
    removeListById(state,payload){ // {skuId:}
      var index = state.shopList.findIndex(item => item.skuId === payload.skuId);
      if(index !== -1){
        state.shopList.splice(index,1)
      }
    },
    toggleCheckedById(state,payload){ // {skuId}  {checked}
      var index = state.shopList.findIndex(item => item.skuId === payload.skuId);
      if (index !== -1) {
        // state.shopList[index].checked = !state.shopList[index].checked;
        // 把这一项替换成新的对象
        state.shopList.splice(index,1,{
          ...state.shopList[index],
          checked: !state.shopList[index].checked
        })
      }
    },
    checkedAll(state,payload){ // {checked:}
      state.shopList.forEach(item => {
        item.checked = payload.checked
      })
    }
  },
  actions:{
    getShopListAction({commit}){
      // 关键点二
      return axios(shopListUrl).then(({data}) => {
        
        let list = data.data.list;
        // 加上字段，方面在界面操作
        list.forEach((item) => {
          if (!('checked' in item )){
            item.checked  = false;
          }
        })
        
        commit('changeShopList',{
          list: data.data.list
        })

      }).catch((e) =>{
        console.log(e)
      })
    }
  }
});

export default store;