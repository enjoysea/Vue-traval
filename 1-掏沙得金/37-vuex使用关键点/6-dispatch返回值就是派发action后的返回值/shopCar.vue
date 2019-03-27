<template>
  <div class="shop-cart">
    <div v-show="loading" style="text-align:center;">
      <img src="@/assets/timg.gif" >
    </div>
    <div class="content" v-if="!loading">
      <div v-show="!shopList.length" class="cart-empty" id="J_cartEmpty">
          <h2>您的购物车还是空的！</h2>
          <a href="" class="btn btn-primary btn-shoping J_goShoping">马上去购物</a>
      </div>
      <div class="cart-goods-list" v-show="shopList.length">
        <!--购物车表头-->
        <div class="list-head clearfix">
            <div class="col col-check">
              <i class="iconfont icon-checkbox "
              :class="{'icon-checkbox-selected': isCheckedAll}"
              @click="checkedAll"
              >√</i>全选</div>
            <div class="col col-img">&nbsp;</div>
            <div class="col col-name">商品名称</div>
            <div class="col col-price">单价</div>
            <div class="col col-num">数量</div>
            <div class="col col-total">小计</div>
            <div class="col col-action">操作</div>
        </div>
        <!--购物车展示商品信息-->
        <div class="list-body">
          <shop-item-box :item="item" v-for="item in shopList" :key="item.skuId"></shop-item-box>
        </div>
      </div>
      <!--计算价钱的信息-->
      <shop-info v-show="shopList.length"></shop-info>
    </div>
    <recommend></recommend>
  </div>
</template>
<script>
import ShopItemBox from '@/views/shopItemBox'
import ShopInfo from './shopInfo'
import recommend from './recommend'

export default {
  components: {
    ShopItemBox,
    ShopInfo,
    recommend
  },
  data(){
    return {
      loading: true
    }
  },
  computed:{
    shopList(){
      return this.$store.state.shopList
    },
    isCheckedAll(){
      return this.$store.getters.isCheckedAll;
    }
  },
  methods:{
    checkedAll(){
      this.$store.commit('checkedAll',{
        checked: !this.isCheckedAll
      })
    }
  },
  created(){
    // dispatch返回值就是派发action后的返回值
    // 关键点一
    this.$store.dispatch('getShopListAction')
    .then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 100);
    })
  }
}
</script>
<style>
@import url('./css/font');
</style>

<style scoped>

.cart-empty {
    height: 273px;
    padding-left: 558px;
    margin: 65px 0 130px;
    background: url(https://s01.mifile.cn/i/cart/cart-empty.png) no-repeat 124px 0;
    color: #b0b0b0;
    overflow: hidden;
}
.btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
}
.cart-empty h2 {
    margin: 70px 0 15px;
    font-size: 36px;
}
.cart-empty .btn {
    width: 170px;
    height: 48px;
    line-height: 48px;
}

.shop-cart {
  width: 1300px;
  margin: 0px auto;
}
.cart-goods-list {
  background-color: #fff;
}
.list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
  overflow: hidden;
}
.list-body {
  overflow: hidden;
}
.list-head .col {
  float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .list-head .col-img {
  width: 120px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .list-head .col-name {
  width: 380px;
}
.cart-goods-list .col-price {
  width: 75px;
  padding-right: 84px;
  text-align: right;
  color: #424242;
}
.cart-goods-list .col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}

</style>

