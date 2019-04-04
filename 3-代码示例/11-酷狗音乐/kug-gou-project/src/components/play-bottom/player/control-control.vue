<template>
  <div class="m-bottom">		
    <div class="m-progress-box">
      <span class="current-time">{{currentTimeToM}}</span>
      <div class="m-progress" 
				@touchstart="postionHandle"
			>
        <div class="m-progress-line">
          <div class="m-progress-lineed" :style="{width: xx + 'px'}"></div>
        </div>
        <div 
					@touchstart="startHandle" 
					@touchmove="moveHandle" 
					@touchend="endHandle" 
					class="m-progress-circle" :style="{left:xx + 'px'}"></div>
      </div>
      <span class="total-time">{{durationToM}}</span>
    </div>
    <div class="m-play-control">
      <div 
				@touchstart="()=>{$emit('prev')}"
				class="m-play-btn m-play-prev-btn iconfont icon-audio_last_step"></div>
      <div 
        class="m-play-play-btn iconfont"
				:class="{'icon-bofang': !isPlay,'icon-zanting': isPlay}"
				@touchstart="()=>{$emit('play')}"
      ></div>
      <div 
			@touchstart="next"
			class="m-play-btn iconfont icon-audio_next_step m-play-next-btn"></div>
    </div>
  </div>
</template>
<script>
import {sToM} from '@/utils/utils'
	export default {
		props:{
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
        default:0  // 100
      }
		},
		watch:{
			// 监控从外面传过来的过去时间，计算小圆圈的位置
			currentTime(){
				if(this.isDrag) return;
				// 小圆圈所处的位置 = 已过去时间/总时间 * 运动的最大距离
				this.x = this.currentTime/this.duration * this.maxX;
			}
		},
		data(){
			return {
				rangeValue: 30,
				minX: 0,
				maxX:0,
				rectX:0,  // 小按钮的父级相对屏幕的左边距离
				x: 0,  // 小圆圈所处的位置
				circleWidth: 0,
				isDrag: false  //记录小圆圈是否拖拽
			}
		},
		computed:{
			xx(){
				if(this.x < this.minX) this.x = this.minX;
				if(this.x > this.maxX) this.x = this.maxX;
				return this.x;
			},
			durationToM(){
				return sToM(this.duration)
			},
			currentTimeToM(){
				return sToM(this.currentTime)
			}
		},
		methods:{
			startHandle(){
				this.isDrag = true;
			},
			moveHandle(e){
				// 手指一动的距离，相对于屏幕左边
				console.log(this.circleWidth)

				this.x = e.changedTouches[0].pageX - this.rectX - this.circleWidth/2;
				
			},
			endHandle(){
				this.isDrag = false;
				this.$emit('current',this.x / this.maxX * this.duration)
			},
			// 点击进度条件定位小按钮的位置
			postionHandle(e){
				this.x = e.changedTouches[0].pageX - this.rectX - this.circleWidth/2;

				// 向外告诉父级改变到的时间点
				console.log('发布事件')
				this.$emit('current',this.x / this.maxX * this.duration)

			},
			next(){
				this.$emit('next')
			}
		},
		mounted() {
			let mProgress = document.querySelector('.m-progress')
			let mProgressCircle = document.querySelector('.m-progress-circle');

			// 能拖动最大距离
			this.maxX = mProgress.clientWidth - mProgressCircle.offsetWidth;
			// 小圆圈的宽度
			this.circleWidth = mProgressCircle.offsetWidth;
			this.rectX = mProgress.getBoundingClientRect().left;
		},
	}
</script>
<style>

.m-bottom {
	width: 100%;
	position: absolute;
	bottom: .5rem;
	left: 0;
}

.m-progress-box {
	padding: 0 .2rem;
	box-sizing: border-box;
	font-size: .12rem;
	display: flex;
	align-items: center;

}

.m-progress-box span {
	width: 1rem;
}

.m-progress {
	width: 7rem;
	height: .44rem;
	margin: 0 .1rem;
	display: flex;
	align-items: center;
	position: relative;
	-overflow: hidden;
}

.m-progress-line {
	width: 100%;
	background:#9c8d88;
	height: .06rem;
	position: relative;
}

.m-progress-lineed {
	width: 0;
	background: #d23d43;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
}

.m-progress-circle {
	width: .4rem;
	height: .4rem;
	background: #fff;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 50%;
	z-index: 2;
}

.m-play-control {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: .1rem;
}

.m-play-play-btn {
	width: 1rem;
	height: 1rem;
	background: #c84040;
	border-radius: 50%;
	margin: 0px .56rem;
	

}

.m-play-btn:before {
	font-size: .4rem;
	color: #fff;
	display: block;
	text-align: center;
	line-height: .85rem;
}

.m-play-play-btn {
	font-size: .8rem;
	color: #fff;
	display: block;
	text-align: center;
	line-height: 1rem;
}

.m-play-btn {
	width: .85rem;
	height: .85rem;
	background: #c84040;
	border-radius: 50%;
}
</style>
