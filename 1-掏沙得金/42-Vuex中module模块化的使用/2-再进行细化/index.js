import Vue from 'vue'
import Vuex from 'vuex'

import firstPage from './firstpage/'

Vue.use(Vuex)


let store = new Vuex.Store({
  modules:{
    // moduleName: 对象 对象中有 state getters mutation action
    a: firstPage
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