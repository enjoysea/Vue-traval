// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  // 导入组件配置 局部组件

import './server/index3'

// 使用组件的时候 引入.vue文件（组件的配置） 注册组件 模板中使用组件
// 以上引入的方式是局部组件，在哪个组件中注册就只能在那个组件中使用

Vue.component('quanju',{
  template: `<div>我不需要注册，谁都可以用</div>`
})


//import abc from './utils/index.js'
//import {add,miaov} from './utils/index.js'
//import * as foo from './utils/index.js'

//console.log(foo.add)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App: App },
  template: '<App/>'
})
