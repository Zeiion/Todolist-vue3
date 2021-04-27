import { createStore } from 'vuex';
import { reactive } from 'vue';

export default createStore({
  state: {
    items: [
      { id: 1, title: 'hahah', isCompleted: true },
      { id: 2, title: 'wawa', isCompleted: false },
      { id: 3, title: 'baba', isCompleted: true },
      { id: 4, title: 'giegie', isCompleted: true },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
