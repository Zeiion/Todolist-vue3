<template>
  <div class="header">
    <el-input
      type="text"
      placeholder="请输入内容"
      @keyup.enter="add"
      v-model="title"
      class="input-with-select"
    >
      <template #append>
        <el-button icon="el-icon-enter"></el-button>
      </template>
    </el-input>
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

<style scoped>
.header {
  margin-top: 15px;
  text-align: center;
}
.input-with-select {
  width: 60%;
}
</style>
