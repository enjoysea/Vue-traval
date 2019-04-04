<template>
  <div>
    <div class="play-bottom" :style="{bottom: 0}">
      <div class="play-left">
        <img src="http://singerimg.kugou.com/uploadpic/softhead/200/20180425/20180425161656865.jpg" alt="">
        <p>
          <span>东风皮</span>
          <span>周杰伦</span>
        </p>
      </div>
      <div class="play-right">
        <div class="iconfont  icon-audio_last_step prev-song"></div>
        <div
          class="iconfont play-song icon-bofang"
        ></div>
        <div class="iconfont  icon-audio_next_step next-song"></div>      
      </div>
    </div>
  </div>
</template>
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


