<template>
  <div id="app">
    <h2>测试路由</h2>
    <button @click="testPush">测试一下push</button>
    <button  @click="testReplace">测试一下replace</button>
    <button  @click="testGo">测试一下go</button>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link :to="{path:'/about'}">关于我</router-link>
      </li>
      <li>
        <router-link :to="{path:'/users'}">用户信息</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue'}">课程</router-link>
        <!-- <ul>
          <li>
           <router-link :to='{name:"Css"}'> css课程 </router-link>
          </li>
          <li>
           <router-link :to="{name:'Vue'}"> Vue课程 </router-link>
          </li>
          <li>
            <router-link :to="{name:'javascript',query:{a:1}}"> js课程 </router-link>
          </li>
        </ul> -->
      </li>
    </ul>
   <div class="content">
      <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    testPush(){
      this.$router.push({
        path: '/users'
      })
    },
    testReplace(){
      this.$router.replace({
        path: '/users'
      })
    },
    testGo(){
      // -1 回退一步
      // 1 前进一步
       this.$router.go(-1)
    }
  }
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
