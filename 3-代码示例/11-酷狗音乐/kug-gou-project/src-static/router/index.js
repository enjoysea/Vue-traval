import Vue from 'vue'
import Router from 'vue-router'
import { navData } from './nav'

import Search from '@/views/search/search'
import SingerList from '@/views/singer/singer-list/singer-list'
import SingerInfo from '@/views/singer/singer-info/singer-info'
import GoBack from '@/components/gotoBack/gotoback'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    ...navData,
    {
      path: '/search',
      name: 'Search',
      components: {
        default: Search,
        navBar: GoBack
      }
    },
    {
      path: '/singer/list/:id',
      name: 'Singer-list',
      components: {
        default: SingerList,
        navBar: GoBack
      }
    },
    {
      path: '/singer/info/:id',
      name: 'singer_songs',
      components: {
        default: SingerInfo,
        navBar: GoBack
      }
    }
  ]
})
