<template>
  <div class="hello">
    一起学习axios
  </div>
</template>

<script>


  import axios from 'axios'
  import queryString from 'queryString'


  var HTTP = axios.create({
    baseURL: 'https://easy-mock.com/mock/5ab358d8ddee66040df8a07b/list',

    responseType: 'json',


    headers: {
      'custom-header': 'miaov',
      'content-type': 'application/x-www-form-urlencoded'
    },

  })

  //请求之前拦截
  HTTP.interceptors.request.use(function (config) {
    //在发送请求之前做某事
    console.log("拦截")
    console.log(config) //就是上面的配置
    //当return config时是不拦截，而发送数据，如果没有return config就是拦截
    //可以对config做进一步处理，想增加哪个配置项，或者是取消哪个配置项，最后把配置项return出去就可以了
    return config;
  }, function (error) {
    //请求错误时做某事
    return Promise.reject(error);
  });

  //请求之后拦截，拦截响应，对数据做进一步处理
  HTTP.interceptors.response.use(function(data){
    console.log("response")
    console.log(data)
    //不return，拿到的数据就是空的
    return data
  })

  export default{
    name: 'hello',
    created(){
      function http1() {
        return HTTP.get('get')
      }

      function http2() {
        return HTTP.post('post')
      }

      axios.all([http1(), http2()]).then(axios.spread((res1, res2) => { //一个参数对应一个
        console.log(res1)
        console.log(res2)
      }))
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
