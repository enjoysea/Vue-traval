<template>
  <div id="app">
    <shopCar></shopCar>
  </div>
</template>

<script>
// @ 代表src目录
import shopCar from '@/views/shopCar'
import {getData} from './server/index4.js'
export default {
  name: 'App',
  components: {
    shopCar
  },
  /*created () {
    getData().then((data)=>{
      console.log(data)
    })
  }*/

  async created () {
    let data = await getData()
    console.log(data)
  }
}
</script>

<style>

</style>
