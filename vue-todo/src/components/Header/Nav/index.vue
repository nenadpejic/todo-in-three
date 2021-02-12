<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang='scss' src='./style.scss'>
</style>