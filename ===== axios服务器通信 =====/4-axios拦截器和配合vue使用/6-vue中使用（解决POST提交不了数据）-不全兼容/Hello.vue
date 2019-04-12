<script src="main.js"></script>
<template>
  <div class="hello">
    获取后端数据……
  </div>
</template>

<script>

  export default{
    created(){
      //post接收不到数据的解决方法
      var params = new URLSearchParams();
      params.append('username', 'momo');
      params.append('age', '29');

      this.$http.post('/getNews.php', params)
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
