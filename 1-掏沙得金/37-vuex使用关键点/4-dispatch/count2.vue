<template>
  <div class="hello">
    <button @click="changeN">改变数字count2</button>
    <p>{{$store.state.n}}</p>
  </div>
</template>

<script>
export default {
  name: 'Count2',
  data(){
    return {
      kk:1
    }
  },
  methods:{
    changeN(){
     /*this.$store.commit('changeN',{
       val:++this.kk
     })*/

      // 派发一个action

      // 关键点一
      this.$store.dispatch('changeNAction',{
        val:++this.kk
      })

    }
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
