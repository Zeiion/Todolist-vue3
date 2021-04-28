<template>
  <div class="todo">
    <Header :addItem="addItem"></Header>
    <List
      :items="items"
      :updateComplete="updateComplete"
      :deleteItem="deleteItem"
    ></List>
    <Footer
      :items="items"
      :completeAll="completeAll"
      :clearComplete="clearComplete"
    ></Footer>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  provide,
  watch,
  onMounted,
} from 'vue';
import Header from '../components/Header.vue';
import List from '../components/List.vue';
import Footer from '../components/Footer.vue';
import { saveTodos, readTodos } from '../utils/localStorageUtils';
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
        // { id: 1, title: 'hahah', isCompleted: true },
        // { id: 2, title: 'wawa', isCompleted: false },
        // { id: 3, title: 'baba', isCompleted: true },
        // { id: 4, title: 'giegie', isCompleted: true },
      ],
    });
    onMounted(() => {
      setTimeout(() => {
        listitems.items = readTodos();
      }, 100);
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
    const completeAll = (isCompleted: boolean) => {
      listitems.items.forEach((item) => {
        item.isCompleted = isCompleted;
      });
    };
    const clearComplete = () => {
      listitems.items = listitems.items.filter((item) => !item.isCompleted);
    };
    watch(() => listitems.items, saveTodos, { deep: true });
    return {
      ...toRefs(listitems),
      addItem,
      deleteItem,
      updateComplete,
      completeAll,
      clearComplete,
    };
  },
});
</script>

<style scoped>
.todo {
  text-align: center;
}
</style>
