<template>
  <div class="m-bottom">
    <div class="m-progress-box">
      
      <span class="current-time">00:00</span>
      <div class="m-progress">
        <div class="m-progress-line">
          <div class="m-progress-lineed" style="width:0px;"></div>
        </div>
        <div class="m-progress-circle" style="left:0px;"></div>
      </div>
      <span class="total-time">00:00</span>
    </div>
    <div class="m-play-control">
      <div class="m-play-btn m-play-prev-btn iconfont icon-audio_last_step"></div>
      <div 
        class="m-play-play-btn iconfont icon-bofang" 
      ></div>
      <div class="m-play-btn iconfont icon-audio_next_step m-play-next-btn"></div>
    </div>
  </div>
</template>

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
