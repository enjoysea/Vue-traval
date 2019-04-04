<template>
  <mt-navbar v-model="selected">
    <mt-tab-item 
      :id="item.name" 
      v-for="item in navData" :key="item.name"
      @click.native="gotoLink(item)"
    >
    
    {{item.title}}
    
    </mt-tab-item>
  </mt-navbar>
</template>
<script>
  import { navData } from '@/router/nav'

  // 组件绑定事件，如果不写修饰符.native就是监听组件内部发生的事情
  // 监听的是组件中点击了第一个元素的事件，写上修饰符.native
  export default {
    data(){
      return {
        selected: "Home",
        navData
      }
    },
    watch:{
      $route: {
        handler(){
          this.selected = this.$route.name
        },
        immediate: true // 初始的是时候立即调用一次
      }
    },
    methods:{
      gotoLink(item){
        this.$router.push({
          name: item.name
        })
      }
    }
  }
</script>
