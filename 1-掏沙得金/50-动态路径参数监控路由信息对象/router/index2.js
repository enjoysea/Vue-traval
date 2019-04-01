import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Home from '@/components/home'
import About from '@/components/about'
import ClassCom from '@/components/class'
import Css from '@/components/class-com/css'
import Js from '@/components/class-com/js'
import VueCom from '@/components/class-com/vue'

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
      path: '/class',  //http://localhost:8080/class
      component: ClassCom,
      // name: 'Class', 子级中有默认的二级导航，父级的name就必要了
      children: [
        // 在子路由中path不写/，相对父级来说 /class/css
        // 在子路由中path写/，相对根路径来说 /css
        {
          path: '',   // /class/  默认的二级导航
          component: VueCom,
          name: "Vue"
        },
        {
          path: '/css',   // /css  写完之后，路径就不嵌套了 /class/css 视图依然是嵌套的
          component: Css,
          name: 'Css'
        },
        
        {
          path: 'abc',  // /class/js
          name:'javascript',
          component: Js
        }

      ]
    },
    /*{
      path: '/class/css',
      component: Css,
      name: 'Css'
    },
    {
      path: '/class/js',
      component: Js,
      name: 'Js'
    },*/
    {
      path: '*', 
      component: NotFound
    }
  ]
})


export default router;