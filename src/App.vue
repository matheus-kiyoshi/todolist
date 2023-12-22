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
  overflow: hidden;
}

main {
  width: 320px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex: start;
  gap: 12px;
  padding-top: 20px;
}

@media (min-width: 600px) {
  main {
    width: 560px;
    padding-top: 28px;
  }

  #app {
    align-items: start;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  background-color: #e9a184;
  display: flex;
  justify-content: center;
}
</style>
