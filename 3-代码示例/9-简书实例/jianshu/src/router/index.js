import Vue from 'vue'
import Router from 'vue-router'

import { navData } from './nav.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...navData,
    {
      path: '*',
      redirect: '/'
    }
    
  ]
})
