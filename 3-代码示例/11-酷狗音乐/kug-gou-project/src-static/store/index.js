import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      songList: [],  // 播放歌曲列表 做前进后退
      hash: '', // 点击歌曲要播放的hash值
    },
    mutations: {
      updateSongList(state, playlod) {
        state.songList = playlod.list;
      },
      updateHash(state, playlod) {
        state.hash = playlod.hash;
      },
    }
  })
}