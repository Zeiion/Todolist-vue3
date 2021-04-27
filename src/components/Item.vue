<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)">
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ item.title }}</span>
    </label>
    <el-button
      type="danger"
      icon="el-icon-delete"
      class="btn"
      v-show="isshow"
      @click="delItem"
    ></el-button>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject } from 'vue';
import { item } from '@/types/item';

export default defineComponent({
  name: 'Item',
  props: {
    item: {
      type: Object as () => item,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    deleteItem: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const isshow = ref(false);

    const isCompleted = computed({
      get() {
        return props.item.isCompleted;
      },
      set(val) {},
    });

    const mouseHandler = (flag: boolean) => {
      if (flag) {
        isshow.value = true;
      } else {
        isshow.value = false;
      }
    };
    // const inj = inject('deleteItem');
    const delItem = () => {
      if (window.confirm('sure?')) {
        props.deleteItem(props.index);
      }
    };
    return {
      mouseHandler,
      delItem,
      isshow,
      isCompleted,
    };
  },
});
</script>

<style scoped>
ul li {
  /* list-style-type: none; */
  display: block;
  border-radius: 13px;
  padding: 18px 8px;
  background-color: white;
  overflow: hidden;
}
ul li:hover {
  background-color: whitesmoke;
}
ul li label {
  margin-left: 10px;
  float: left;
  margin-top: 10px;
}
.btn {
  margin-right: 10px;
  float: right;
  font-size: 1px;
}
</style>
