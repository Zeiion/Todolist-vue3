import { item } from '../types/item';
export function saveTodos(items: item[]) {
  localStorage.setItem('item_key', JSON.stringify(items));
}

export function readTodos(): item[] {
  return JSON.parse(localStorage.getItem('item_key') || '[]');
}
