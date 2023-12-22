<template>
  <div class="todo__wrap" v-if="todos.length > 0">
    <TodoComponent v-for="todo in todos" :key="todo.id" :todo="todo" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import { computed } from 'vue'
import TodoComponent from './ToDo.vue'
import { useStore } from 'vuex'

export default {
  components: {
    TodoComponent
  },
  setup() {
    const store = useStore()

    return {
      todos: computed(() => store.state.todos),
      removeTodo: (id) => store.dispatch('removeTodo', id)
    }
  }
}
</script>

<style>
.todo__wrap {
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 16px;
  padding: 12px;
  background-color: rgba(216, 105, 65, 0.356);
  max-height: 412px;
  overflow-y: auto;
}

/* scrollbar */

.todo__wrap::-webkit-scrollbar {
  width: 6px;
}

.todo__wrap {
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  scrollbar-color: rgb(209, 149, 19) transparent;
}

.todo__wrap::-webkit-scrollbar-track {
  background: transparent;
}

.todo__wrap::-webkit-scrollbar-thumb {
  background: rgb(204, 152, 10);
}

.todo__wrap::-webkit-scrollbar-thumb:hover {
  background: rgb(185, 111, 0);
}
</style>