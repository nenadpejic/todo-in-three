<template>
  <header>
    <h1>Vue Todo</h1>
    <img alt="Vue logo" src="../../assets/logo-vue.png" />
    <Nav />
  </header>
</template>

<script>
import Nav from "./Nav";

export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style lang='scss' src='./style.scss'>
</style>