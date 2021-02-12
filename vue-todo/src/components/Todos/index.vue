<template>
  <div>
    <ul v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem
        v-bind:todo="todo"
        v-on:delete-todo="$emit('delete-todo', todo.id)"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>

<style>
</style>