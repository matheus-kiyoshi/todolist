<template>
  <div class="todo__wrap">
    <TodoComponent v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo="deleteTodo" />
  </div>
</template>

<script>
import { ref } from 'vue'
import TodoComponent from './ToDo.vue'

export default {
  components: {
    TodoComponent
  },
  setup() {
    const todos = ref([
      {
        id: 1,
        title: 'Todo 1',
        completed: true
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: false
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: false
      }
    ])

    const deleteTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    return {
      todos,
      deleteTodo
    }
  }
}
</script>

<style>
.todo__wrap {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>