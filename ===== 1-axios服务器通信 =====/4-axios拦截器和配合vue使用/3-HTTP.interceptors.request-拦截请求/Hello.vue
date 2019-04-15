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

  //拦截请求（即将要发送到中间件）
  HTTP.interceptors.request.use(function(config){
    console.log("拦截")
    console.log(config) //就是上面的配置

    //return config 是不拦截，而发送数据，
    //没有return config就是拦截
    //这样可以对config做进一步处理，想增加哪个配置项，或者是取消哪个配置项，最后把配置项return出去就可以了
    return config

  },function(error){
    //请求错误时做某事
    return Promise.reject(error);
  });


  export default{
    name: 'hello',
    created(){
        function http1(){
            return HTTP.get('get')
        }
        function http2(){
            return HTTP.post('post')
        }
        axios.all([http1(),http2()]).then(axios.spread((res1,res2)=>{ //一个参数对应一个
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
