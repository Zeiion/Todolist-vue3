<template>
  <div class="footer">
    <label>
      <input type="checkbox" v-model="isCompleteAll" />
    </label>
    <span style="margin-top:3px">
      <span>已完成：{{ count }}</span>
      <span> / 全部：{{ items.length }}</span>
    </span>
    <button class="btn" @click="clearComplete">Clear</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { item } from '../types/item';
export default defineComponent({
  name: 'Footer',
  props: {
    items: {
      type: Array as () => item[],
      required: true,
    },
    completeAll: {
      type: Function,
      required: true,
    },
    clearComplete: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const count = computed(() => {
      return props.items.reduce(
        (pre, item) => pre + (item.isCompleted ? 1 : 0),
        0
      );
    });
    const isCompleteAll = computed({
      get() {
        return count.value > 0 && props.items.length === count.value;
      },
      set(val) {
        props.completeAll(val);
      },
    });
    return {
      count,
      isCompleteAll,
    };
  },
});
</script>

<style scoped>
.footer {
  /* display: inline; */
  width: 60%;
  margin: 0 auto;
  background-color: white;
  padding: 5px;
  vertical-align: middle;
}
div label {
  /* display: inline-block; */
  margin-top: 2px;
  float: left;
}
div span {
  float: left;
}
.btn {
  float: right;
  background-color: rgb(226, 96, 96);
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
