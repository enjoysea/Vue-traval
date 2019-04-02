import Vue from 'vue'
import Router from 'vue-router'
import cookies from 'js-cookie'

import { navData } from './nav.js'

const Login = ()=> import('@/components/login')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...navData,
    {
      path: '/login',
      name: 'Login',
      meta: { isLogin: true},
      component: Login
    },
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
  // 只要目标的自身如果不需要登录，那么要看一下父级是否需要登录
  // 也就是说如果父级需要登录，那么子级就不能进去
  // to是目标
  console.log('进入每一个路径之前')
  console.log(to)
  // 访问子路由的时候，包含父路由
  console.log('to.matched', to.matched) // 访问的路径匹配到哪些路由信息对象
  console.log(to.meta.isLogin)

  // if(to.meta.isLogin){
    console.log('##', to.matched.some(item => item.meta.isLogin))
    if(to.matched.some(item => item.meta.isLogin)){ // 条件A：
    // 需要登录
    // 判断是否登录，cookie中是否存对应的值
    let c = cookies.get('miaov')
    console.log('cookie', c)
    // 如果没有登录
    /*
    * 没有登录，进入的不是登录页，跳到登录页
    * 没有登录，进入的是登录页，直接进入
    * */
    console.log(to.path,'$$$$')
    if(!c && to.path !=='/login'){ // 条件一
      console.log('====没有登录，进入的不是登录页，跳到登录页====')
      // next('/login')
      // next({name: 'Login'})
      next({
        path: '/login',
        query:{
          redirect: to.name
        }
      })
    } /*else if(!c && to.path ==='/login'){ // 条件二
      next()
    }*/ else if (c && to.path === '/login'){ // 条件三
      next('/')
    } else { // 条件B
      next()
    }
  }else{
    next()
  }
  console.log('进入每一个路径之前')
  console.log(to)
  // 访问子路由的时候，包含父路由
  console.log(to.matched)
  console.log(to.meta.isLogin)
})

router.afterEach(()=>{
  console.log('进入之后')
})

export default router
