<template>
  <div>
    <div class="play-bottom" :style="{bottom: bottom+'rem'}">
      <div class="play-left">
        <img v-if="songInfo.imgUrl" :src="songInfo.imgUrl | filterImgUrl" alt="">
        <p>
          <span>{{songInfo.songName}}</span>
          <span>{{songInfo.singerName}}</span>
        </p>
      </div>
      <div class="play-right">
        <div class="iconfont  icon-audio_last_step prev-song"
        @touchstart="prev"
        ></div>
        <div
          class="iconfont play-song"
          :class="{'icon-bofang': !isPlay,'icon-zanting': isPlay}"
           @touchstart="playOrpause"
        ></div>
        <div class="iconfont  icon-audio_next_step next-song" 
          @touchstart="next"
        ></div>      
      </div>
    </div>
    <audio ref="audio" preload :src="src"></audio>


  </div>
</template>
<script>
import {mapState} from 'vuex'

import {getSongMp3} from '@/server/searchMp3'
import { MessageBox } from 'mint-ui';


// 返回的数据 {list:{miaov:{ketang:1}}}
/* 
  1. 提前规划的数据，中写好模板中使用的数据
    {
      {
        {

        }
      }
    }

  2. 不在数据总规划，模板中判断是否存在
      {{a && a.b && a.b.c}}

      p v-if = "a"
        span v-if = "a.b"
          em a.b.c
*/
export default {
  data(){
    return {
      currentIndex: -1,
      src: '',
      bottom: 0,
      isPlay: true,  // 记录是否播放的状态，默认就是播放
      songInfo: {
        //imgUrl: ''
      }  // 当前正在播放歌曲的信息
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

      this.bottom = 0;
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
    },
    async prev(){
      this.currentIndex--;
      if(this.currentIndex < 0 ){
        this.currentIndex = this.songList.length - 1;
      }
      let error =  await this.getSong();
      if(error){
        this.prev();
      }
    },
    playOrpause(){
      if(this.$refs.audio.paused){
        this.$refs.audio.play();
        this.isPlay = true;
      }else{
        this.$refs.audio.pause();
         this.isPlay = false;
      }
    }
  },
  // 生命周期函数不能写成箭头函数
  mounted() {
    let audio = this.$refs.audio;
    // 当音频加载完成，触发这个事件
    audio.addEventListener('loadedmetadata',() => {
      console.log('音频加载完成。。。。');
      audio.play();  // 播放
      this.isPlay = true;
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
  width: 55%;
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
  float: left;
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
