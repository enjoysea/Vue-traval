<template>
  <div class="m-main" :style="{top:playTop+'rem'}">
    <mt-header 
      class="hide-player" 
      style="font-size:.5rem;" :title="songInfo.songName">
      <div slot="left">
        <mt-button icon="back" @touchstart.native="changeTop"></mt-button>
      </div>
    </mt-header>
    <div class="bg-overlay"></div>
    <div class="play-overlay"></div>
    <lyric :rc="rc" :current-time="currentTime"></lyric>
    <player-control 
      @prev="()=>{$emit('prev')}"
      @play="()=>{$emit('play')}"
      @next="next"
      @current="(t)=>{$emit('current',t)}"
      :is-play="isPlay"
      :duration="duration"
      :current-time="currentTime"
    ></player-control>
  </div>
</template>

<script>
/**
 * 
 * touchstart 原生事件，作用在html标签上才会起作用
 * touchstart 写在组件上 组件并不是html标签，原生不会起作用。写在组件上被认为是自定义的事件了
 *  监听内容发出的touchstart事件，内部 要 this.$emit('touchstart')
 * 
 * touchstart写在组件上，但是又想是触发原生元素来触发这个事件。touchstart.native.会绑定在
 * 组件顶层元素上
 */
  import playerControl from './control-control.vue'
  import lyric from './lyric.vue'
  export default {
    props:{
      playTop:{
        type:[Number,String],
        default: 30
      },
      songInfo:{
        type: Object,
        default(){
          return {}
        }
      },
      isPlay:{
        type: Boolean,
        default: true
      },
      duration:{
        type: Number,
        default:0
      },
      currentTime:{
        type: Number,
        default:0
      },
      rc:{
        type: String,
        default:''
      }
    },
    data(){
      return {
        //top: this.playTop
      }
    },
    components: {
      playerControl,
      lyric
    },
    methods:{
      changeTop(){
        console.log(123)
        this.$emit('update:playTop',30)
      },
      next(){
        this.$emit('next')
      }
    }
  }
</script>

<style scoped>
.clear:after {
	display: block;
	content: "";
	clear: both;
}

.m-main {
  width: 100%;
	height: 100%;
	position: fixed;
  left: 0;
  top: 100rem;
	box-sizing: border-box;
	color: #fff;
	background: rgba(0,0,0,.6);
	z-index: 10;
	transition: .5s;
}
.bg-overlay {
	background: url(https://y.gtimg.cn/music/photo_new/T002R300x300M000003lFlWa0CwNbA.jpg?max_age=2592000) no-repeat;
	background-size: cover;
	filter: blur(10px);
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
}

.play-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6);
}


#app .hide-player {
  background: rgba(255,255,255,0);
  color: #fff;
  z-index: 999;
	height: 1rem;
}
</style>

