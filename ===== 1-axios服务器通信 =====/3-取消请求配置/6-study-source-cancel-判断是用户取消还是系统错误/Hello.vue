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
  import queryString from 'queryString'

  //创建取消的令牌
  var CancelToken = axios.CancelToken;
  var source = CancelToken.source();

  var HTTP = axios.create({
    baseURL: 'https://easy-mock.com/mock/5ab358d8ddee66040df8a07b/list',
    //timeout:1
    //有时候等不急，就设置为500ms，就不再请求
    //timeout:1000,
    responseType: 'json',//将字符串转为对象

    //只要设置成params，无论get还是post，都会在地址栏加上查询字符串
    /*params:{ //会放在地址栏后面，作为查询字符串
     book:"123"
     },*/
    headers: {
      //请求头后端是可以拿到的，可以和后端约定
      'custom-header': 'miaov', //Header → 在Request Headers → custonm-header:miaov
      'content-type': 'application/x-www-form-urlencoded' //可以转为：miaov=ketant&username=leo
    },
    //只适合POST、PUT和PATCH


    /*
     说白了，就是在发送数据前做一些处理
     transformRequest相当于一个中间站，发送数据后经过他来做转换
     转换的时候，你没有给我投出任何数据，就默认undefined
     需要return data，这样会被解析成字符串的
     */

    //[]里面可以写多个函数，转换多次
    transformRequest: [function (data) { //data就是传送后端的数据
      //此处console并未打出
      console.log(data)
      data.age = 30//可以在发送前加上一些属性
      return queryString.stringify(data) //格式化成一个字符串
    }],

    //对返回的数据做一些处理
    transformResponse: [function (data) { //data是从后端发送回的数据
      console.log("transformResponse")
      console.log(data)
      data.abc = 'miaov'
      return data
    }],
    cancelToken:source.token
  })



  export default{
    name: 'hello',
    created(){
      HTTP.post('post123', {
        miaov: 'ketant', //想转换成miaov=ketant&username=leo
        username: 'leo'
      })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          //错误也分很多
          if(axios.isCancel(error)){ //用户取消
              console.log(error.message);
          }else{ //服务器出错
              console.log(error)
          }
        })

        source.cancel('操作被用户取消，因为时间太长了') //个人认为这里可以加个按钮，去取消
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    font-size: 30px;
  }
</style>
