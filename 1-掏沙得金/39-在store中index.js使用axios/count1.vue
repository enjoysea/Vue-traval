<template>
  <div class="hello">
    <h2>{{title}}</h2>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in a" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Count',
  // 关键步骤二
  computed:{
    title(){
      return this.$store.state.title
    },
    list(){
      return this.$store.state.list
    },
    a(){
      return this.$store.getters.filterList
    }
  },
  created(){
    // 关键步骤一
    this.$store.dispatch('getListAction')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
