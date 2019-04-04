// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import store from './store'
import Methods from '@/server'

// 作为插件，所有的组件都可以找到方法了
Vue.use(Methods)

Vue.use(MintUI)

// 过滤器
// | 管道符 | |
Vue.filter("filterImgUrl", (value, size = 240) => {
  return value.replace('{size}', size)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
