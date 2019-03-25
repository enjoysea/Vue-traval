<template>
  <section class="main">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
        <todo-item 
            :item="item" 
            v-for="item in list" 
            :key="item.id"></todo-item>
    </ul>
  </section>
</template>
<script>
import TodoItem from './todoItem'
export default {
    props: {
        list: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        TodoItem
    },
}
</script>
