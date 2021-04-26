<template>
  <li>
    <label>
      <input type="checkbox" v-model="item.isCompleted" />
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { item } from '@/types/item';

export default defineComponent({
  name: 'Item',
  props: {
    item: Object as () => item,
  },
});
</script>

<style scoped></style>
