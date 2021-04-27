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
  width: 70%;
  margin: 0 auto;
  /* border: 1px solid black; */
  background-color: white;
  margin-top: 20px;
  padding: 5px;
}
.todo-list-part {
  margin: 30px;
  padding: 10px;
  border: 1px solid rgb(230, 230, 230);
  box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.26);
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
