const Home = () => {
  return import('@/views/home/home')
}

const Look = () => import('@/views/look/look')
const Message = () => /* webpackChunkName: "class" */ import('@/views/message/message')

const Pinglun = () => /* webpackChunkName: "class" */ import('@/views/message/children/pinglun')
const Jianxin = () => /* webpackChunkName: "class" */ import('@/views/message/children/jianxin')
const Guanzhu = () => /* webpackChunkName: "class" */ import('@/views/message/children/guanzhu')

// 如果多可以将其拎到另外一个文件
// message的二级导航
export var messageChild = [
  {
    path: 'pinglun',
    name: 'Pinglun', // 路径为空，name要加在子路由上
    title: '评论',
    component: Pinglun
  },
  {
    path: 'jianxin',
    name: 'Jianxin',
    title: '简信',
    component: Jianxin
  },
  {
    path: 'guanzhu',
    name: 'Guanzhu',
    title: '关注',
    component: Guanzhu
  }
]

export const navData = [
  {
    path: '/',
    name: 'Home',
    title: '发现',
    component: Home
  },
  {
    path: '/look/:id?',
    name: 'Look',
    title: '关注',
    component: Look
  },
  {
    path: '/message',
    name: 'Message',
    title: '消息',
    redirect: {name: 'Pinglun'},
    component: Message,
    children:[
      ...messageChild
    ]
  }
]