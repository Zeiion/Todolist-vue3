<template>
  <div class="todo">
    <Header :addItem="addItem"></Header>
    <List :items="items" :deleteItem="deleteItem"></List>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, provide } from 'vue';
import Header from '../components/Header.vue';
import List from '../components/List.vue';
import Footer from '../components/Footer.vue';

import { item } from '../types/item';

export default defineComponent({
  name: 'Todo',
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    const listitems = reactive<{ items: item[] }>({
      items: [
        { id: 1, title: 'hahah', isCompleted: true },
        { id: 2, title: 'wawa', isCompleted: false },
        { id: 3, title: 'baba', isCompleted: true },
        { id: 4, title: 'giegie', isCompleted: true },
      ],
    });
    const addItem = (item: item) => {
      listitems.items.unshift(item);
    };
    const deleteItem = (index: number) => {
      listitems.items.splice(index, 1);
    };
    // provide('deleteItem', deleteItem);
    const updateComplete = (item: item, isCompleted: boolean) => {
      item.isCompleted = isCompleted;
    };
    return {
      ...toRefs(listitems),
      addItem,
      deleteItem,
    };
  },
});
</script>
