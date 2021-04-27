<template>
  <div class="about">
    <h1>This is an about page</h1>
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
</template>

<script lang="ts">
import { useStore } from 'vuex';
import Item from '../components/Item.vue';
export default {
  components: {
    Item,
  },
  setup() {
    const items = useStore().state.items;
    console.log(items);
    return {
      items,
    };
  },
};
</script>
