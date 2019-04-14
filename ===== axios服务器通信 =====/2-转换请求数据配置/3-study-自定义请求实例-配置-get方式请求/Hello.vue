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
   然后export default导出来
   */
  import axios from 'axios'
  var HTTP = axios.create({
    baseURL: 'https://easy-mock.com/mock/5ab358d8ddee66040df8a07b/list/'
  })

  export default{
    name: 'hello',
    created(){
      HTTP.get('get') //这里也可以是post的请求的相对地址
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
