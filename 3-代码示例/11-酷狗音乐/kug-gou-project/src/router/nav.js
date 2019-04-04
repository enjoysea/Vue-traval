
const NewSongs = () => import('@/views/new-songs/new-songs')
const Rank = () => import('@/views/rank/rank')
const Singer = () => import('@/views/singer/singer')

import Nav from '@/components/nav/nav'

export const navData = [
  {
    path: '/',
    name: 'Home',
    title: '新歌',
    components: {
      default: NewSongs,
      navBar: Nav
    }
  },
  {
    path: '/rank',
    name: 'Rank',
    title: '排行',
    components: {
      default: Rank,
      navBar: Nav
    }
  },
  {
    path: '/singer',
    name: 'Singer',
    title: '歌手',
    components: {
      default: Singer,
      navBar: Nav
    }
  }
]