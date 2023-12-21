<template>
  <div class="todo">
    <label class="container">
      <input type="checkbox" v-model="todoData.completed" :checked="todoData.completed">
      <div class="checkmark"></div>
    </label>
    <span :class="marked()">{{ todoData.title }}</span>
    <button @click="deleteTodo()">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoComponent',
  props: ['todo'],
  setup(props, { emit }) {
    const marked = () => {
      return props.todo.completed ? 'uns' : ''
    }

    const deleteTodo = () => {
      emit('delete-todo', props.todo.id)
    }

    return {  
      todoData: props.todo,
      marked,
      deleteTodo
    }
  }
}
</script>

<style>

.todo {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
}

.uns {
  text-decoration: line-through;
  opacity: 0.9;
}

.container input {
 position: absolute;
 opacity: 0;
 cursor: pointer;
 height: 0;
 width: 0;
}

.container {
 display: block;
 position: relative;
 cursor: pointer;
 font-size: 20px;
 user-select: none;
}

/* Create a custom checkbox */
.checkmark {
 position: relative;
 top: 0;
 left: 0;
 height: 1em;
 width: 1em;
 background: #606062;
 border-radius: 5px;
 box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0,5);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
 background-image: linear-gradient(#96e98b,#7ae46c)
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
 content: "";
 position: absolute;
 display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
 display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
 left: 0.30em;
 top: 0.10em;
 width: 0.25em;
 height: 0.5em;
 border: solid white;
 border-width: 0 0.15em 0.15em 0;
 transform: rotate(45deg);
}

.todo span {
  flex-grow: 1;
  padding-left: 2px;
  padding-right: 2px;
  border-radius: 12px
}

.todo button {
  padding: 8px;
  background-color: #d33928ec;
  border: 1px solid #e74c3cec;
  border-radius: 8px;
  color: whitesmoke;
  font-weight: 600;
  cursor: pointer;
}

.todo button:hover {
  background-color: #b92e1f;
}
</style>