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
  import Qs from 'qs'


  var HTTP = axios.create({
    baseURL: '/getDemo.php',
    //timeout:1
    //有时候等不急，就设置为500ms，就不再请求
    timeout:1000,
    //responseType:'json',//自动解析成对象

    //只要设置成params，无论get还是post，都会在地址栏加上查询字符串
    /*params:{ //会放在地址栏后面，作为查询字符串
        book:"123"
    },*/
    headers:{
        //请求头后端是可以拿到的，可以和后端约定
        'custom-header':'miaov', //Header → 在Request Headers → custonm-header:miaov
        'content-type':'application/x-www-form-urlencoded'
    },

    //只适合POST、PUT和PATCH
    //这里想转换一下数据
    /*transformRequest:[function(data){ //data就是传送后端的数据
        console.log(data)
    }]*/
  })

  export default{
    name: 'hello',
    created(){
      //post接收不到数据的解决方法
      var params = new URLSearchParams();
      params.append('param1', 'value1');
      params.append('param2', 'value2');

      HTTP.post('post',Qs.stringify({ 'param1': 'value1','param2':'value2' }))
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
