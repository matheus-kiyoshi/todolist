<template>
  <h1 class="title">
    <span>Todo List</span>
    <a href="http://github.com/matheus-kiyoshi" target="_blank">
      <v-icon name="bi-github" scale="2.5" style="background-color: black; border-radius: 100%;" fill="white" class="icon" />
    </a>
  </h1>
</template>

<script>
export default {
}
</script>

<style>
.title {
  margin: 0;
  color: #111111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
}

.icon:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>