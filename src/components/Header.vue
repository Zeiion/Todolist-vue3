<template>
  <div class="header">
    <input
      type="text"
      placeholder="请输入"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    addItem: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const title = ref('');

    const add = () => {
      const text = title.value;
      if (!text.trim()) {
        return;
      }
      const item = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      };
      props.addItem(item);
      title.value = '';
    };
    return {
      add,
      title,
    };
  },
});
</script>

<style scoped></style>
