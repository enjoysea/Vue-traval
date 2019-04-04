<template>
  <div ref="area" class="m-lyric-area">
    <div ref="lyric" class="m-lyric">
      <p v-for="item in 10" :key="item">菊花台</p>
    </div>
  </div>
</template>
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

