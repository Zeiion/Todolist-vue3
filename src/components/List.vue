<template>
  <ul>
    <Item v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Item from './Item.vue';

export default defineComponent({
  name: 'List',
  props: ['items'],
  components: {
    Item,
  },
});
</script>

<style scoped></style>
