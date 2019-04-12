<script src="main.js"></script>
<template>
  <div class="hello">
    获取后端数据……
  </div>
</template>

<script>
  import Qs from 'qs'

  export default{
    created(){
      //解决post接收不到数据的解决方法
      this.$http.post('/getNews.php', Qs.stringify({'username': 'leo', 'age': '38'}))
      .then((response) = > {
        console.log(response.data)
    })
    .
      catch((error) = > {
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
