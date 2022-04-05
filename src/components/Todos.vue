<template>
    <div>
        <div>
            <h1>Todos</h1>
            <div class="todos">
                <div  v-for="todo in allTodos" class="todo" :key="todo.key" v-bind:class="{'is-complete':todo.completed}">
                   
                    <b> <i class="fas fa-check" @click="onDblClick(todo)"></i>{{todo.id}}-</b>
                    {{todo.title}} 
                    <br>
                    <i class="fas fa-trash-alt" v-on:click="deleteTodo(todo.id)"></i>
                   
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    name:"Todos",
    methods: {
        ...mapActions(["fetchTodos","deleteTodo","updateTodo"]),
        onDblClick(todo) {
        const updatedTodo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        }
        this.updateTodo(updatedTodo);
        }
    },
    computed: mapGetters(["allTodos"]),
    created() {
        this.fetchTodos();
    }

}
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo {
    border: 1px solid #ccc;
    background: #2297b1;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box,
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .complete-box {
    background: #35495e;
  }
  .incomplete-box {
    background: #278ca5;
  }
  .is-complete {
    color: #fff;
    background: #35495e;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
  .fa-trash-alt{
      color: red;
  }
  .fa-check{
     margin-right: 94%;
     color: chartreuse;
  }
</style>