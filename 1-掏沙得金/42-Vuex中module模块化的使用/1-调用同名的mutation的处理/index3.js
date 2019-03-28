import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 10个页面 每个页面都需要很多的状态管理
// 第一个页 ，就需要有10个状态

// 不同模块存在相同的mutation，在commit的时候，同名的都会触发

// 模块化
// 第一个页面
var firstPage = {
  namespaced: true,
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
  namespaced: true,
  state: {
    f1: 100,
    t1: 1,
    t2: 1,
    t3: 1
  },
  getters: {},
  mutations: {
    updateF1(state) {
      state.t1 = 10000;
    }
  },
  action: {}
}

let store = new Vuex.Store({
  modules:{
    // moduleName: 对象 对象中有 state getters mutation action
    a: firstPage,
    b: twoPage
  },
  state: {
    total: 1000
  }
})

var user = 'leo';

// 命名空间
/*{
  user: 'leo',
  info: {
    user: 'momo'
  }
}*/

var studentInfo = {};

/* studentInfo.user = 'leo';
studentInfo.user = 'leo'; */

/*studentInfo['leo'] = {
  user: 'leo'
}
studentInfo['momo'] = {
  user: 'momo'
}

studentInfo.leo.teame.user
studentInfo.momo.teame.user*/

export default store;