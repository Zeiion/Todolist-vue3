<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)">
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isshow" @click="delItem">
      删除
    </button>
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
  display: block;
  border-radius: 13px;
  padding: 18px 8px;
  background-color: white;
}
ul li:hover {
  background-color: whitesmoke;
}
.btn {
  float: right;
}
</style>
