<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    @click="changeComplete"
  >
    <label style="margin-top:3px;margin-bottom:2px">
      <input type="checkbox" v-model="isCompleted" />
      <span :class="text">{{ item.title }}</span>
    </label>
    <el-button
      type="danger"
      icon="el-icon-delete"
      class="btn"
      v-show="isshow"
      @click="delItem"
      size="small"
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
    updateComplete: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const isshow = ref(false);
    const text = ref('nnn');
    const changeComplete = () => {
      const v = isCompleted;
      props.updateComplete(props.item, !v.value);
      if (v.value == true) {
        text.value = 'fff';
      } else {
        text.value = 'nnn';
      }
    };
    const isCompleted = computed({
      get() {
        return props.item.isCompleted;
      },
      set(val) {
        props.updateComplete(props.item, val);
      },
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
      text,
      mouseHandler,
      delItem,
      isshow,
      isCompleted,
      changeComplete,
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
  cursor: pointer;
}
ul li:hover {
  background-color: whitesmoke;
}
ul li label {
  margin-left: 10px;
  float: left;
  margin-top: 7px;
}
.btn {
  margin-right: 10px;
  float: right;
  max-height: 1px;
}
.fff {
  text-decoration: line-through;
}
</style>
