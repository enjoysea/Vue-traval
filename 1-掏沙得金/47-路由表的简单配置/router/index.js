import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Book from '@/components/Book'
import English from '@/components/Book/English'
import Music from '@/components/Book/Music'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/book',
      component: Book,
      redirect:{name:'Music'},
      children:[
        {
          path:'english',
          name: 'Book',
          component:English
        },
        {
          path:'music',
          name: 'Music',
          component:Music
        }
      ]
    },
    {
      path: '*',
      redirect: '/book',
      hash: '#123',
      query: {a: 1}
    }
  ]
})
