<template>
  <form @submit.prevent="addTodo()">
    <input type="text" v-model="inputText" :placeholder="placeholderCount">
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()

    const inputText = ref('');

    const placeholderTexts = [
      'Add a new todo...',
      'What do you need to do?',
      'What is your next task?',
      'What is your next goal?',
      'What is your next objective?',
      'What is your next mission?',
      'What is your next aim?',
    ]

    const placeholderCount = ref(placeholderTexts[Math.floor(Math.random() * placeholderTexts.length)])
    
    return {
      inputText,
      addTodo: () => {
        store.dispatch('addTodo', inputText.value)
        inputText.value = ''
        placeholderCount.value = placeholderTexts[Math.floor(Math.random() * placeholderTexts.length)]
      },
      placeholderCount
    }
  }
}
</script>

<style>
form {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 32px;
  gap: 8px;
}

form input {
  flex-grow: 1;
  padding: 8px;
  background-color: #14141496;
  border: 1px solid #1b1a1ab2;
  border-radius: 12px;
  color: whitesmoke;
  font-weight: 600;
}

form button {
  padding: 8px;
  background-color: #1e7a25ec;
  border: 1px solid #24702ab2;
  border-radius: 8px;
  color: whitesmoke;
  font-weight: 600;
  cursor: pointer;
}

form button:hover {
  background-color: #1b6121;
}
</style>