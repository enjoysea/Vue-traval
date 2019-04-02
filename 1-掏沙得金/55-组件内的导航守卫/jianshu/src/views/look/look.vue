<template>
  <div>
    <h2>关注页面</h2>
    <div class="content">
      <div class="left-slider">
        <ul class="watch-list">
          <li
            v-for="item in list"
            :key="item.id"
            @click="showInfo(item)"
          >
            <img :src="item.imgUrl">
            <span>{{item.title}}</span>
          </li>

        </ul>
      </div>
      <div class="right-slider">
        <h3>展示页</h3>
        <p>姓名：{{info.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  var url = `https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look`
  import axios from 'axios'
  export default {
    // 路由的钩子函数要在组件的钩子函数之前执行
    // 在路由的钩子函数中，不能使用this
    // 在路由的钩子函数执行的时候，组件还没有创建，路由的钩子函数中的this不指向实例
    // 原因：如果不调用next()，有必要渲染这个组件吗

    /*
      请求数据
      1、进入导航的时候，开始请求数据，组件还没有渲染
      beforeRouteEnter(to,from,next){
        请求数据
        next()
      }

      体验：在没有请求回数据之前（刷新页面），是一片空白

      2、进入导航的时候，开始渲染组件，再去获取数据
       created(){
        获取数据
       }

      体验：先渲染页面，数据的地方是空白
    */
    beforeRouteEnter(to,from,next){
      console.log('进入到look这个组件之前')
      console.log(this) // undefined
      // 在没有请求回数据之前，是一片空白
      axios(url).then(({data})=>{
        console.log(data)
        // this.list = data.data.list
        // this.getInfo()
        // 回调函数接收的参数，就是当前组件的实例
        next((vm)=>{ // vm就是当前组件的实例
          vm.list = data.data.list
          vm.getInfo()
        })
      })
    },
    // 用处：用户在页面中有一个操作没有完成，在离开前提醒用户去操作
    beforeRouteLeave(to, from ,next){
      console.log('离开之前')
      var bl = confirm('你真的要离开吗？离开之后数据可能会丢失！')
      if(bl){
        next()
      }
    },
    // 在当前路由改变，但是该组件被复用时调用
    // 监控路由变化方式二
    beforeRouteUpdate(to,from,next){
      console.log('更新了当前的$route，组件是复用的')
      console.log(to) //进入的目标，没有调用next之前还是当前的路径
      this.getInfo(to.params.id)
      next()
    },
    beforeCreate(){
      console.log('这是组件的第一个钩子函数')
    },
    data(){
      return {
        list: [],
        info:{}
      }
    },
    watch: {
      // 监控路由变化方式一
      /*$route(){
        this.getInfo()
      }*/
    },
    created(){
      /*setTimeout(()=>{
        axios(url).then(({data})=>{
          console.log(data)
          this.list = data.data.list
          this.getInfo()
        })
      }, 2000)*/
    },
    methods: {
      showInfo(item){
        this.$router.push({
          name : 'Look', // 或者写成： path: '/look/' + item.id
          params: {
            id: item.id
          }
        })
      },
      getInfo(id){
        var id = id || this.$route.params.id
        var item = this.list.find(item => item.id == id)
        if(item){
          this.info = item.info
        }
      }
    }
  }
</script>

<style>
</style>

