import axios from 'axios'
//import { Indicator } from 'mint-ui';

// 两个环境，开发环境 生产环境
/* 
  开发环境，使用开发环境的服务
    localhost:8080/proxy
     dev.com:8080/proxy
  生产环境，使用 生产环境的服务
    miaov.com/proxy
    http://localhost:3000/
*/

var baseUrl = '';
if (process.env.NODE_ENV === 'development'){
  baseUrl = '/proxy';
} else if (process.env.NODE_ENV === 'production'){
  //baseUrl = 'http://www.miaov.com';
  baseUrl = 'http://kuapi.wykiss.cn/api';
}
let oneLeve = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
  transformResponse(data){
    if(!data) return;
    
    if(typeof data === 'string') data = JSON.parse(data);
    let o = {}
    if(data.list) {
      o.data = data.list;
      o.origin = 'singer'
    }else if(data.banner){
      o.data = data.data;
      o.banner = data.banner
      o.origin = 'home'
    }else if(data.rank){
      o.data = data.rank.list;
      o.origin = 'rank'
    }else if(data.plist){
      o.data = data.plist.list.info;
      o.origin = 'plist'
    }else if(data.singers){
      o.data = data.singers.list.info;
      o.origin = 'singers-list'
    }else if(data.songs){
      o.data = data.songs.list;
      o.info = data.info;
      o.origin = 'singers-info'
    }
    return o;
  }
})


let request = (path) => {
  return oneLeve(path).catch((e) => {
    // 网络错误处理
    if(e){
      alert('网络错误')
      /* Indicator.open({
        text: '请检查网络...',
        spinnerType: 'fading-circle'
      });
      var mask = document.createElement('div');
      mask.style.cssText = 'z-index:999;opacity:.5;position:fixed;height:100%;top: 0;right: 0;left: 0;right:0;background: #000;'
      document.body.appendChild(mask); */
    }
  })
}

// 获取banner和新歌
export const getNewSongs = () => {
  return request('/?json=true')
}

// 获取排行数据
export const getRankList = () => {
  return request('/rank/list&json=true')
}
// 获取歌单数据
export const getPlist = () => {
  return request('/plist/index&json=true')
}

// 获取歌手分类数据
export const getSingers = () => {
  return request('/singer/class&json=true')
}

// 根据歌手分类id，获取歌手分类歌手

export const getSingerList = (params={classid:''}) => {
  return request(`/singer/list/${params.classid}?json=true`)
}

// 根据歌手id，获取歌手歌曲

export const getSingerInfo = (params = { singerid: '' }) => {
  return request(`/singer/info/${params.singerid}?json=true`)
}

export default {
  install(Vue){
    let o = {
      getNewSongs,
      getRankList,
      getPlist,
      getSingers
    }

    /* Object.keys(o).forEach((item) => {
      Vue.prototype[item] = o[item]
    }) */

    Vue.prototype.$kugou = o;

  }
}