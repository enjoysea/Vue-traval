<template>
  <div class="cart-bar clearfix">
    <div class="section-left">
        <a href="javascript:;" class="back-shopping">
          继续购物
        </a>
        <span class="cart-total">
          共 <i>10</i> 件商品，已选择 <i>10</i> 件
        </span>
    </div>
    <span class="total-price">
        合计：<em>10636</em>元
    </span>
    <a href="javascript:void(0);" class="btn btn-a btn btn-primary">去结算</a>
    <div class="no-select-tip hide">
        请勾选需要结算的商品
        <i class="arrow arrow-a"></i>
        <i class="arrow arrow-b"></i>
    </div>
</div>
</template>

<style scoped>
  /*计算价钱的信息*/

.cart-bar {
    height: 50px;
    text-align: right;
    background-color: #fff;
    -webkit-transition: background .3s ease, top .3s ease;
    transition: background .3s ease, top .3s ease;
    position: relative;
    margin-top: 30px;
}
/*控制固定定位*/
.cart-bar-fixed {
    width: 1100px;
    position: fixed;
    bottom: 0;
    z-index: 20;
    background-color: #fafafa;
    -webkit-box-shadow: 0 -3px 6px rgba(0,0,0,0.1);
    box-shadow: 0 -3px 6px rgba(0,0,0,0.1);
}
.cart-bar .section-left {
    float: left;
}
.cart-bar .back-shopping {
    line-height: 50px;
    margin-left: 32px;
}
.cart-bar a {
    -webkit-transition: color .3s;
    transition: color .3s;
}
.cart-bar .cart-total {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
    color: #757575;
}
.cart-bar .cart-total i {
    color: #ff6700;
}
.cart-bar i {
    font-style: normal;
}
.cart-bar .total-price {
    padding-left: 13px;
    color: #ff6700;
}
.cart-bar .total-price em {
    font-style: normal;
    font-size: 30px;
}
.cart-bar .btn {
    width: 200px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    margin-left: 50px;
    vertical-align: top;
}
.cart-bar .no-select-tip {
    width: 200px;
    height: 48px;
    line-height: 48px;
    position: absolute;
    top: -58px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ff6700;
    color: #ff6700;
    text-align: center;
}
.cart-bar .no-select-tip .arrow-a {
    bottom: -8px;
    margin-left: -10px;
    border-width: 8px 10px 0;
    border-color: #ff6700 transparent transparent;
    z-index: 1;
}
.cart-bar .no-select-tip .arrow-b {
    bottom: -7px;
    margin-left: -8px;
    border-width: 7px 8px 0;
    border-color: #fff transparent transparent;
    z-index: 2;
}
.cart-bar .no-select-tip .arrow {
    display: block;
    width: 0;
    height: 0;
    border-style: solid dashed dashed;
    overflow: hidden;
    position: absolute;
    left: 50%;
}
.btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
}
.btn {
    display: inline-block;
    width: 158px;
    height: 38px;
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    transition: all .4s;
}
</style>
