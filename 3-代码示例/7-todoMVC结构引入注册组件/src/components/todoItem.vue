<template>
  <li  class="completed editing">
  <div class="view">
      <input class="toggle" type="checkbox" />
      <label>{{item.title}}</label>
      <button class="destroy"></button>
  </div>
  <input class="edit" />
</li>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>
