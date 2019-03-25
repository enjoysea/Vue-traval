<template>
  <div id="app">
    <section class="todoapp">
      <todoHeader />
      <todo-header />
      <todo-content :list="list" />
      <todo-footer />
    </section>
  </div>
</template>

<script>
import TodoHeader from './components/todoHeader'
import TodoContent from './components/todoContent'
import TodoFooter from './components/todoFooter'
export default {
  name: 'App',
  data(){
    return {
      list: [
        {
          id:1,
          title: 'hello',
          checked: false
        }
      ]
    }
  },
  components: {
    //abc: TodoHeader
    //TodoHeader:TodoHeader
    TodoHeader,
    TodoContent,
    TodoFooter,
    //header: TodoHeader // 不可以这样
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
