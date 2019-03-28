<template>
  <div id="app">
    <h2>从vuex中取值</h2>
    <p>直接从$store取值：{{$store.state.n}}</p>
    <p>从data取值：{{kk}}</p>
    <p>从computed取值：{{num}}</p>
    <p>从getters取值：{{addUserName}}</p>
    <hr>
    <p>在第一个页面中取状态：{{$store.state.a.f1}}</p>
    <button @click="changeFirstPageF1">改变第一个页面中的状态</button>
    <hr>
    <!-- <p>在第2个页面中取状态：{{$store.state.b.t1}}</p> -->
    <hr>
    <button @click="changeN">改变vuex中n的值</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      kk: this.$store.state.n  // n取出来作为kk的初始值，以后n发生变化，kk并不会重新计算
    }
  },
  computed:{
    num(){
      var s = 'm';
      var s2 = 'iaov'
      var str = s + s2;
      // 依赖n，只要n发生变化，计算属性会重新计算（重新执行这个函数）
      return this.$store.state.n + str;
    },
    addUserName(){
      return this.$store.getters.addUserName
    }
  },
  methods:{
    changeN(){
     /*  this.$store.commit('updatedN',{
        num: 200
      }) */

      // 派发action
      this.$store.dispatch('changeNAction')
    },
    changeFirstPageF1(){
      // 提交一个命名空间的mutation
      this.$store.commit('a/updateF1')
    }
  },
  mounted() {
    console.log(this.$store)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
