<template>
  <li>
    <input
      type="checkbox"
      v-bind:checked="todo.isCompleted ? true : false"
      @change="toggleIsCompleted"
    />
    <span v-bind:class="todo.isCompleted && 'is-completed'">
      {{ todo.title }}
    </span>
    <button @click="$emit('delete-todo', todo.id)">Del</button>
  </li>
</template>

<script>
import { putTodoToDB } from "../../../services";

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    toggleIsCompleted() {
      const newTodo = {
        ...this.todo,
        isCompleted: !this.todo.isCompleted,
      };
      putTodoToDB(newTodo)
        .then((res) => {
          this.todo.isCompleted = res.isCompleted;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped lang='scss' src='./style.scss'>
</style>