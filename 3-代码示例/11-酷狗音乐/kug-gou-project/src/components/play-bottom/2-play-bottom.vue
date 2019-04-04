<template>
  <div>
    <p>{{songInfo.songName}}</p>
    <button>上一首</button>
    <button @click="next">下一首</button>
    <audio ref="audio" preload :src="src" controls></audio>
  </div>
</template>
<script>
import {mapState} from 'vuex'

import {getSongMp3} from '@/server/searchMp3'
import { MessageBox } from 'mint-ui';

export default {
  data(){
    return {
      currentIndex: -1,
      src: '',
      songInfo: {}  // 当前正在播放歌曲的信息
    }
  },
  computed:{
    ...mapState(['songList','hash'])
  },
  watch:{
    // '$store.state.hash'
    'hash': async function () {
      this.currentIndex = this.songList.findIndex(item => item.hash == this.hash)
      this.getSong();
    }
  },
  methods:{
    async getSong(){
      // songList是播放列表，currentIndex要播放哪一首歌曲的下标
      let hash = this.songList[this.currentIndex].hash;
      // 找播放地址
      let {data} = await getSongMp3({hash:hash});

      if(this.currentIndex === 1){
        MessageBox('错误提示', data.error);
        // MessageBox('错误提示','因版权问题此歌曲不能播放');
        return {code:data.errcode,error:data.error};
      }

      this.src = data.url;
      this.songInfo = data;
      
    },
    async next(){
      this.currentIndex++;
      if(this.currentIndex > this.songList.length - 1){
        this.currentIndex = 0;
      }

      let error =  await this.getSong();
      if(error){
        this.next();
      }
      // 获取歌曲有错误，播放下一首歌
      /* this.getSong().then((data) => {
        if(data){  // 失败了
          this.next();
        }
      }); */
    }
  },
  // 生命周期函数不能写成箭头函数
  mounted() {
    //console.log(this)

    let audio = this.$refs.audio;

    console.dir(audio)

    // 当音频加载完成，触发这个事件
    audio.addEventListener('loadedmetadata',() => {
      console.log('音频加载完成。。。。');
      audio.play();  // 播放
    })

  },
}
</script>
<style>
#app .play-bottom {
  width: 100%;
  height: 1.5rem;
  background-color:rgba(5, 5, 5, 0.7);
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: hidden;
  transition: .3s;
  z-index: 9;
}
.play-left {
  width: 60%;
  height: 100%;
  float: left;
  overflow: hidden;
  position:relative;
  box-sizing: border-box;
  display: flex;
}
.play-left img {
  width: 1.5rem;
  float: left;
}
.play-left p {
  margin: auto 0;
  width: 60%;
  color: #fff;
  float: left;
  font-size: .35rem;
  margin-left: .1rem;
}
.play-left p span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.play-left p span:nth-child(2){
  font-size: .3rem;
}
.play-right {
  position:relative;
  float: right;
  width: 40%;
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: .1rem;
  height: 100%;
}
.play-right > div {
  font-size: .7rem;
  color: #fff;
}

.play-right > div:active{
  color: #e5e5e5;
}
</style>

