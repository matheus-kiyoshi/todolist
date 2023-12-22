import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    todos: []
  },
  getters: {
    completedTodos: state => {
      return state.todos.filter(todo => todo.completed)
    },
    completedTodosCount: (state, getters) => {
      return getters.completedTodos.length
    },
    todosCount: state => {
      return state.todos.length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    },
    uncompletedTodos: state => {
      return state.todos.filter(todo => !todo.completed)
    }
  },
  mutations: {
    addTodo: (state, todoToAdd) => {
      const todo = {
        id: state.count + 1,
        title: todoToAdd,
        completed: false
      }
      state.count++
      state.todos.push(todo)
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  actions: {
    addTodo: (context, todo) => {
      context.commit('addTodo', todo)
    },
    removeTodo: (context, id) => {
      context.commit('removeTodo', id)
    },
  },
})
