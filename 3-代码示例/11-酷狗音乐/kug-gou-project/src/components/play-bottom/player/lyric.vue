<template>
  <div ref="area" class="m-lyric-area"
		@touchstart.prevent="startHandle"
		@touchmove="moveHandle"
		@touchend="endHandle"
	>
    <div ref="lyric" class="m-lyric" :style="{top: yy+'px'}">
      <p v-for="(item,index) in rcArr" :key="item[0]"
			:class="{bg: index === currentIndex}"
			>
				{{item[1]}}
			</p>
    </div>
  </div>
</template>
<script>
	// better-scroll
	import {parseLyric} from '@/utils/utils'
	export default {
		props:{
			rc:{
        type: String,
        default:''
			},
			 currentTime:{
        type: Number,
        default:0  // 100
      }
		},
		watch:{
			rc(){
				this.$nextTick(() => {
					this.minY = -(this.$refs.lyric.offsetHeight - this.$refs.area.clientHeight/2);
				})
			},
			currentTime(){
				// currentTime = 10;
				// [[0,''],[1.9,''],[5,''],[8,''],[12,'']]

				for(var i = 0; i < this.rcArr.length; i++){
					if(this.currentTime > this.rcArr[i][0]){
						this.currentIndex = i;
					}else{
						break;
					}
				}

				let n = this.currentIndex < this.showN ? 0 : this.currentIndex - this.showN;

				if(this.isDrag) return;
				this.y = -(n * this.onePHeight);
				
			}
		},
		data(){
			return {
				showN: 0,
				rectY:0,
				isDrag: false,
				y:0,
				onePHeight: 0,
				currentIndex:0,
				minY: 0,
				maxY: 0  // 最大距离
			}
		},
		methods:{
			startHandle(e){
				this.isDrag = true;
				this.$refs.lyric.style.transition = 'none';
				this.disY = e.changedTouches[0].pageY - this.$refs.lyric.offsetTop;
			},
			moveHandle(e){
				this.y  = e.changedTouches[0].pageY - this.disY;
			},
			endHandle(){
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.isDrag = false;
					this.$refs.lyric.style.transition = '.3s';
				}, 1000);
			}
		},
		computed:{
			yy(){
				if(this.y > this.maxY) this.y = this.maxY;
				if(this.y < this.minY) this.y = this.minY;
				return this.y;
			},
			rcArr(){
				if(this.rc === '') return [[0,'暂无歌词']]
				return parseLyric(this.rc)
			}
		},
		mounted(){
			this.minY = -(this.$refs.area.scrollHeight - this.$refs.area.clientHeight/2);		
			this.onePHeight = this.$refs.area.getElementsByTagName('p')[0].offsetHeight;
			// 一屏可以展示多少句歌词 中间的值
			this.showN = Math.floor(this.$refs.area.clientHeight/this.onePHeight/2);
		}
	}
</script>
<style>

.m-lyric-area {
	height: 58%;
	overflow: hidden;
	position: relative;
  z-index: 2;
  margin-top: .6rem;
}

.m-lyric {
	width: 100%;
	position: absolute;
	left: 0;
  top: 0;
	transition: .3s;
}

.m-lyric-area p {
	text-align: center;
	line-height: 1rem;
	font-size: .3rem;
	
}


.m-lyric .bg {
	color: red;
	font-size: .4rem;
}
</style>

