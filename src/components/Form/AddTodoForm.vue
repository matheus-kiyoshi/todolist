<template>
  <form action="">
    <input type="text">
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
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