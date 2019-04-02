import Vue from 'vue'
import Router from 'vue-router'

import { navData } from './nav.js'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...navData,
    {
      path: '*',
      redirect: '/'
    }
    
  ]
})

// 洋葱圈模型 koa
// 全局守卫钩子函数
// 中间件 在请求和响应中间写几个处理的程序，每一个程序处理完之后，交给下一个中间件
router.beforeEach((to, from, next)=>{
  console.log('进入每一个路径之前')
  console.log(to) // 到哪里去
  console.log(from) // 从哪里来
  // 控制权交到下一个处理程序处理

  // 比如判断是否登录
  /*if(){
    
  }else{
    // 登录了
  }*/
  next()
})

router.afterEach(()=>{
  console.log('进入之后')
})

export default router
