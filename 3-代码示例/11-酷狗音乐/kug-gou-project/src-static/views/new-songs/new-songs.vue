<template>
  <div>
    <div class="new-song-swipe">
        <mt-swipe :auto="0">
            <mt-swipe-item v-for="item in banner" :key="item.id">
                <img :src="item.imgurl" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- 歌曲列表 -->
    <song-list :song-list="songList"></song-list>
  </div>
</template>
<script>
  //import {getNewSongs} from '@/server/'
  import SongList from '@/views/common/song-list/song-list'
  export default {
    data(){
      return {
        banner: [],
        songList: []
      }
    },
    components: {
      SongList
    },
    async created() {
      let {data} = await this.$kugou.getNewSongs();
      this.songList = data.data;
      this.banner = data.banner;
    },
  }
</script>
/* scoped style中的样式只能在当前组件使用 */
<style scoped>
  .new-song-swipe {
    height: 2.54rem;
  }
  .new-song-swipe img {
    width: 100%;
  }
</style>