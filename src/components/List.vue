<template>
  <div class="todo-list">
    <div class="todo-list-part">
      <ul>
        <Item
          v-for="(item, index) in items"
          :key="item.id"
          :item="item"
          :index="index"
          :deleteItem="deleteItem"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Item from './Item.vue';

export default defineComponent({
  name: 'List',
  props: ['items', 'deleteItem'],
  components: {
    Item,
  },
});
</script>

<style scoped>
.todo-list {
  background-color: white;
  margin-top: 40px;
}
.todo-list-part {
  margin: 50px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 13px;
}
ul {
  border: 1px;
  border-radius: 13px;
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
