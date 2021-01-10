<template>
  <div class="todos-list">
    <span class="h1 bg-info text-white m-2 p-1 rounded-3">TODOS</span>
    <Todo v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo" v-on:delete="deleteTodo"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Todo from '../components/Todo'

export default {
    name: 'TodosList',
    components: {
        Todo
    },
    computed: mapState({
        todos: state => state.todosStore.todos
    }),
    beforeMount() {
        console.log('TodosList:beforeMount()', 'Fetching TODOS from server');
        
        this.$store.dispatch('todosStore/loadTodos')
    },
    methods: {
      deleteTodo(todo) {
        console.log('TodoList:deleteTodo()',   todo.id)
        this.$store.dispatch('todosStore/deleteTodo', todo)
      }
    }
}
</script>