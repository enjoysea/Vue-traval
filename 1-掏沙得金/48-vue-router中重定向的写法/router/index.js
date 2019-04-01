import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Home from '@/components/home'
import About from '@/components/about'

import NotFound from '@/components/404'


let router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',  //http://localhost:8080/
      component: Home,
      name: 'Home'
    },
    {
      path: '/about',  //http://localhost:8080/about
      component: About,
      name: 'About'
    },
    {
      path: '/404',
      component: NotFound,
      name: '404'
    },
    {
      path: '*',  // 任意匹配
      //component: NotFound
      //redirect:  '/about'// 重定向
      //redirect: '/about?a=1#345',
      /* redirect: {
        path: '/about',
        hash:'#123',
        query: {a:1}
      } */
      /* redirect: {
        name: 'About',
        hash: '#123',
        query: { a: 1 }
      } */
      // 动态重定向 根据某个标示重定向到不同的路由上
      redirect(to){
        console.log('执行了')
        // to 访问的目标信息对象

        //return '/'  // 要重定向的路径
        //return { path: '/' }
        //return {name:'About'}
        // miaov => / abc => about  到组件 notFound

        console.log(to)

        if(to.path === '/miaov'){
          return '/'
        }else if(to.path === '/abc'){
          return { name: 'About'}
        }else {
          return {path: '/404'}
        }

        

        return '/'

      }
    }
  ]
})


export default router;