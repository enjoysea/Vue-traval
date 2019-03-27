<template>
  <div class="recommend">
    <h2 class="xm-recommend-title">
      <span>买购物车中商品的人还买了</span>
    </h2>
    <div class="xm-recommend">
    <div>
      <img src="@/assets/timg.gif" alt="">
    </div>
      <ul class="row clearfix">
          <li v-for="item in 10" class="J_xm-recommend-list span4">
              <dl>
                  <dt> 
                    <a href="javascript:;" > 
                      <img src="//i1.mifile.cn/a1/pms_1522218089.59163508!140x140.jpg"  alt="小米蓝牙项圈耳机"> 
                    </a> 
                  </dt>
                  <dd class="xm-recommend-name"> 
                    <a href="javascript:;" > 小米蓝牙项圈耳机 </a> 
                  </dd>
                  <dd class="xm-recommend-price">299元</dd>
                  <dd class="xm-recommend-tips"> 
                    <a href="javascript:;"  class="btn btn-small btn-line-primary J_xm-recommend-btn">加入购物车</a> 
                  </dd>
              </dl>
          </li>
      </ul>
    </div>
  </div>
</template>
<style>
.recommend {
  margin-top: 30px;
}
.xm-recommend-title {
    position: relative;
    margin: 0;
    height: 50px;
    font-size: 30px;
    font-weight: 400;
    color: #757575;
    border-top: 1px solid #e0e0e0;
    -webkit-font-smoothing: antialiased;
}
.xm-recommend-title span {
    position: absolute;
    top: -20px;
    left: 372px;
    height: 40px;
    width: 482px;
    line-height: 40px;
    text-align: center;
    display: block;
    background-color: #f5f5f5;
}
.xm-recommend ul li {
    margin-bottom: 14px;
    height: 300px;
    background-color: #fff;
    text-align: center;
    position: relative;
}
.xm-recommend dl {
    padding: 0 20px;
    margin-bottom: 0;
}
.xm-recommend dl dt {
    padding: 40px 0 15px;
    height: 145px;
}
.xm-recommend dl dt img {
    width: 140px;
    height: 140px;
}
.xm-recommend dl dd {
    margin-left: 0;
}
.xm-recommend .xm-recommend-name {
    margin-bottom: 10px;
    height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
}
.xm-recommend .xm-recommend-price {
    margin-bottom: 10px;
    color: #ff6700;
}
.xm-recommend .xm-recommend-tips {
    position: relative;
    color: #757575;
}
.xm-recommend .xm-recommend-notice {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    opacity: 0;
    filter: alpha(opacity=0)\9;
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.span4 {
    width: 234px;
    float: left;
    margin-left: 14px;
    min-height: 1px;
}

.btn {
    display: inline-block;
    width: 158px;
    height: 38px;
    padding: 0;
    margin: 0;
    border: 1px solid #b0b0b0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #b0b0b0;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
}
.btn-small {
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
}
.btn-line-primary {
    border-color: #ff6700;
    background: #fff;
    color: #ff6700;
}
.xm-recommend .xm-recommend-tips .btn {
    position: absolute;
    left: 37px;
    top: 0;
    width: 120px;
    display: none;
}
.xm-recommend li:hover .btn {
  display: block;
}

</style>

