<template>
  <div>
    <h2>用户的信息展示</h2>
    <ul>
      <!-- <li>leo</li>
      <li>momo</li>
      <li>job</li>
      <li>meixi</li> -->
      <li>
        <!-- <router-link :to="{path:'/users/1'}">leo</router-link>
        <router-link :to="{path:'/users/2'}">momo</router-link> -->
        <!-- <router-link :to="{path:'/users/'+item.id}" v-for="item in userList" :key="item.id">
          {{item.userName}}
        </router-link> -->
        <p @click="goPath(item.id)" v-for="item in userList" :key="item.id">{{item.userName}}</p>
      </li>
    </ul>
    <p>{{$route.params.abc}}</p>
    <div v-if="info.userName">
      <p>姓名：{{info.userName}}</p>
      <p>身高：{{info.height}}</p>
    </div>
    <div  v-if="!info.userName">请选择一个人去查看信息</div>
  </div>
</template>
<script>
  var data = [
    {
      id:1,
      userName: 'leo',
      height: 180
    },
    {
      id:2,
      userName: 'momo',
      height: 180
    },
    {
      id:3,
      userName: 'job',
      height: 180
    },
    {
      id:4,
      userName: 'meixi',
      height: 180
    }
  ]
  export default{
    data(){
      return {
        info:{},
        userList:data
      }
    },
    watch:{
      // 监控
      $route(){
        console.log('变化了')
        let id = this.$route.params.abc;
        if(id){
            var item = data.find((item) => item.id == id)
            console.log(item)
            this.info = item;
        }
      }
    },
    methods:{
      goPath(id){
        // 跳转链接  /users/+2

        //this.$router  // 路由实例，下面定义了很多的方法和属性 push replace go

        //this.$router.push('/about')
        /* this.$router.push({
          path:'/about'
        }) */
        /* this.$router.push({
          name:'About'
        }) */

        /* this.$router.push({
          path:'/users/'+id
        }) */
         this.$router.push({
          name:'Users',
          params: {abc:id}
        })

       /*  this.$router.push({
          path:'/users/',  // 使用path，就只能拼接动态路径，写params无效
          params: {abc:id}
        }) */

      }
    },
    created() {
      // 发请求
      // 在访问路径的时候，在对应组件中会拿到一个 路由信息对象
      console.log(this.$route) // 路由信息对象 静态对象

    // /users/2 /users/3  动态路径中的参数 会赋值给 abc = 2 abc=3

      let id = this.$route.params.abc;
      if(id){
          var item = data.find((item) => item.id == id)
          console.log(item)
          this.info = item;
      }
    },
    mounted() {
      console.log('user.vue渲染完成')
    },
  }
</script>
