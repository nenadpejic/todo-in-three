<template>
  <main class="home">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
  </main>
</template>

<script>
import { Todos, AddTodo } from "../../components";
import { getTodosFromDB, postTodoToDB, deleteTodoFromDB } from "../../services";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      postTodoToDB(newTodo)
        .then((res) => {
          this.todos = [...this.todos, res];
        })
        .catch((err) => console.log(err));
    },
    deleteTodo(todoId) {
      deleteTodoFromDB(todoId)
        .then(() => {
          this.todos = this.todos.filter((elem) => elem.id !== todoId);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    getTodosFromDB()
      .then((res) => {
        this.todos = res;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang='scss' src='./style.scss'>
</style>