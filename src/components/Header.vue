<template>
  <div class="header">
    <input type="text" placeholder="aaaa" @keyup.enter="add" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    addItem: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped></style>
