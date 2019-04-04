<template>
  <div>
    这是排行页面
    <a href="" class="test">test</a>
  </div>
</template>
<script>
  //import {getRankList} from '@/server/'
  export default {
    async created() {
     let data = await this.$kugou.getRankList()
    },
  }
</script>