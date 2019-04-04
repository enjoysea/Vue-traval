<template>
<div class="singer">
    <mt-cell 
      class='song-cell singer-song-cell' 
      v-for="item in singers" 
      :key="item.classid" 
      :title="item.classname"  
      is-link
      @click.native="gotoSingerList(item)"
    ></mt-cell>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        singers:[]
      }
    },
    async created() {
      let {data} = await this.$kugou.getSingers();
      this.singers = data.data;
    },
    methods:{
      gotoSingerList(item){
        
        this.$router.push({
          name: 'Singer-list',
          params: {
            id: item.classid
          }
        })
      }
    }
  }
</script>
<style scoped>
  .singer-song-cell {
    border: 1px solid #e5e5e5;
    margin: .3rem;
  }
</style>