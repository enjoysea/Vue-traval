<template>
  <div>
    <audio ref="audio" preload :src="src"></audio>
    <div class="play-bottom" :style="{bottom: bottom+'rem'}">
      <div class="play-left" @touchstart="showPlayerHandle">
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
    

    <player 
      :play-top.sync="playTop"
      :song-info="songInfo"
      @prev="prev"
      @play="playOrpause"
      @next="next"
      @current="currtent"
      :is-play="isPlay"
      :duration="duration"
      :current-time="currentTime"
      :rc="rc"
    ></player>

  </div>
</template>
<script>
import {mapState} from 'vuex'

import {getSongMp3,getRc} from '@/server/searchMp3'
import { MessageBox } from 'mint-ui';
import Player from './player/player'

export default {
  data(){
    return {
      currentIndex: -1,
      rc:'', // 记录当前歌曲的歌词
      src: '',
      bottom: -30,
      playTop: 30,
      isPlay: true,  // 记录是否播放的状态，默认就是播放
      songInfo: {
        //imgUrl: ''
      },
      duration: 0,
      currentTime: 0
    }
  },
  components:{Player},
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

      // 拿歌词
      let {data:rcString} = await getRc({hash:hash,keyword: data.songName})

      this.src = data.url;
      this.songInfo = data;
      this.rc = rcString;
      
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
    },
    showPlayerHandle(){  // 显示player
      // 告诉子组件，点了left这边，需要展示播放器
      this.playTop = 0;
    },
    // 改变当前播放的时间点
    currtent(t){
      console.log('改变了时间')
      this.currentTime = t;
      this.$refs.audio.currentTime = t;

      this.$refs.audio.play();
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

      this.duration = audio.duration;
      this.currentTime = audio.currentTime;

      /* console.dir(audio.duration)  //总时间
      console.dir(audio.currentTime)  //已播放时间 */
    })

    // 音乐播放过程中currentTime改变触发事件
    audio.addEventListener('timeupdate',() => {
      //console.log('已播放了',audio.currentTime);
      this.currentTime = audio.currentTime;
    })

     audio.addEventListener('ended',() => {
      console.log('播放完毕');
      this.next();
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
