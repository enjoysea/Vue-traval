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
    //timeout:1
    //有时候等不急，就设置为500ms，就不再请求
    /*如果请求时间了超过 `timeout` 的时间，请求将被中断*/
    timeout: 1000
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
