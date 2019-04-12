<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'app',
    created(){ //在生命周期函数created中拿数据

      //语法二（get方式请求）
      //post方式向后端发送数据
      axios.post('https://easy-mock.com/mock/5ab358d8ddee66040df8a07b/list/post',{
        miaov: "课堂"
      })
        .then((response)=>{
          console.log(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
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
