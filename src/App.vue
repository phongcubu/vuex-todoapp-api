<template>
  <div id="app">
    <img src="./assets/logo.png">
    <add-todo/>
    <filter-todo/>
    <todos/>

  </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodo,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
