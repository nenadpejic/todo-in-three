<template>
  <form @submit="handleSubmit">
    <input type="text" v-model="newTodoTitle" placeholder="Add Todo..." />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      newTodoTitle: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const newTodo = {
        id: uuidv4(),
        title: this.newTodoTitle,
        isCompleted: false,
      };
      this.$emit("add-todo", newTodo);
      this.newTodoTitle = "";
    },
  },
};
</script>

<style>
</style>