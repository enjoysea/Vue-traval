<template>
  <div class="hello">
    一起学习axios
  </div>
</template>

<script>

  /*
   import axios from 'axios'
   var HTTP = axios.create({})
   这两块可以提取到另一个文件里面，那个文件用就直接引入进来
   然后import default导出来
   */
  import axios from 'axios'
  var HTTP = axios.create({
    baseURL: 'https://easy-mock.com/mock/5ab358d8ddee66040df8a07b/list',
    timeout:1000,
    //在Headers Request Headers 可以找到：custom-header:miaov
    //请求头后端是可以拿到的，可以和后端进行约定
    //也可以设置系统提供的一些请求头
    headers:{
        'custom-header':'miaov'
    }
  })

  export default{
    name: 'hello',
    created(){
      HTTP.get('get')
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    font-size: 30px;
  }
</style>
