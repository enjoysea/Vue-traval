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

  export default{
    name: 'hello',
    created(){
        function http1(){
            return HTTP.get('get')
        }
        function http2(){
            return HTTP.post('post')
        }
        axios.all([http1(),http2()]).then((response)=>{
            console.log(response)
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
