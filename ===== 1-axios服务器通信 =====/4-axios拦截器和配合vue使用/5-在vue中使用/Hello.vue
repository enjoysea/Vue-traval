<script src="main.js"></script>
<template>
  <div class="hello">
    一起学习axios
  </div>
</template>

<script>

  export default{
    created(){
      this.$http.get('https://easy-mock.com/mock/5ab358d8ddee66040df8a07b/list/get')
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
