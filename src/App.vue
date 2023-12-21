<template>
  <main>
    <MainTitle />
    <AddTodoForm />
    <TodoList />
  </main>
</template>

<script>
import MainTitle from './components/MainTitle.vue'
import AddTodoForm from './components/Form/AddTodoForm.vue'
import TodoList from './components/Todo/TodoList.vue'

export default {
  name: 'App',
  components: {
    MainTitle,
    AddTodoForm,
    TodoList
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

main {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex: start;
  gap: 12px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 90vw;
  background-color: #e9a184;
  padding: 20px;
}
</style>
