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
    data(){
      return {
        list: [],
        info:{}
      }
    },
    watch: {
      $route(){
        this.getInfo()
      }
    },
    created(){
      axios(url).then(({data})=>{
        console.log(data)
        this.list = data.data.list
        this.getInfo()
      })
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
      getInfo(){
        var id = this.$route.params.id
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

