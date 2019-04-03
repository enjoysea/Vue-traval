// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 插件的写法
// 插件就是往原型上（构造函数）上扩展功能
// 插件就是往某个类上扩展功能的
// 自己写插件
Vue.use({
  install(Vue){
    Vue.component('miaov',{
      template:`<div>我是Vue的全局组件</div>`
    })
    Vue.prototype.abc = 10
    Vue.prototype.$ketang = {
      tools(){
        console.log('tools执行')
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
