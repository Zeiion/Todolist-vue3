<template>
  <ul>
    <Item
      v-for="(item, index) in items"
      :key="item.id"
      :item="item"
      :index="index"
      :deleteItem="deleteItem"
    />
  </ul>
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

<style scoped></style>
