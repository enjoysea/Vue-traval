<template>
  <div id="app">
    <h2>从vuex中取值</h2>
    <!--<p>{{total}}</p>
    <p>{{n}}</p>
    <p>{{num}}</p>-->

    <!--<p>{{total}}</p>
    <p>{{n}}</p>
    <p>{{m}}</p>-->

    <!--<p>{{total}}</p>
    <p>{{n}}</p>
    <p>{{num}}</p>-->

    <p>{{total}}</p>
    <p>{{n}}</p>
    <p>{{num}}</p>

    <hr>
    <!--<button @click="changeNMethod">改变n</button>
    <button @click="changeMMethod">改变m</button>-->

    <!--<button @click="changeN">改变n</button>
    <button @click="changeM">改变m</button>-->

    <!--<button @click="changeN">改变n</button>
    <button @click="abc">改变m</button>-->

    <button @click="changeN({num: '改变了'})">改变n</button>
    <button @click="abc">改变m</button>

  </div>
</template>

<script>
// map 映射
import {mapState, mapMutations} from 'vuex'

// mapState执行后返回对象

export default {
  name: 'App',
  // 一、原始方法

  /*computed:{
    total(){
      return this.$store.state.total
    },
    n(){
      return this.$store.state.n
    },
    num(){
      return this.$store.state.m
    }
  }*/

  // 二、计算属性名字和state名字一致
  // 弊端：想定义其他的计算属性，就没有办法做了

  // computed: mapState(['total', 'n', 'm']) // {total(){}, n(){}, m(){}}

  // 三、想定义其他的计算属性

  /*computed: {
    ...mapState(['total', 'n', 'm']),
    custom(){
      return 123
    }
  }*/
  // 四、想起其他名字

  /*computed: {
    ...mapState({
      total: state => state.total,
      n: 'n',
      num: 'm'
    }),
    custom(){
      return 123
    }
  }*/

  // 五、对计算属性做进一步的处理
  computed: {
    ...mapState({
      total: state => state.total,
      n: 'n',
      num(state){
        return state.m*30
      }
    }),
    custom(){
      return 123
    }
  },
// 一、原始方法
/*methods: {
    changeNMethod(){
      this.$store.commit('changeN')
    },
    changeMMethod(){
      this.$store.commit('changeM')
    }
  }*/

// 二、弊端，不能自己定义mutatiions
/*methods: mapMutations(['changeN', 'changeM'])*/
// 三、自己来定义mutations，并且自己来定义名字
/*methods: {
    // 可以扩展多个mapMutations
    ...mapMutations(['changeN']),
    ...mapMutations({
      abc: 'changeM'
    })
  }*/

  // 四、传参
  methods: {
    // ...mapMutations(['changeN']),原理如下：
    /*changeN(paload){
      this.$store.commit('changeN', paload)
    },*/
    // 可以扩展多个mapMutations
    ...mapMutations(['changeN']),
    ...mapMutations({
        abc: 'changeM'
    })
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
