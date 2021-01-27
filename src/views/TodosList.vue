<template>
  <div class="todos-container">
    <div class="head text-center rounded-3 bg-primary my-1 p-2">
      <span class="h1 text-white p-1">TODOS</span>
    </div>
    <div class="todos-list my-1 bg-light">
      <Todo
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-on:delete="deleteTodo"
        v-on:update="updateTodo"
      />
      <div class="d-flex p-1">
        <input
          class="form-control m-1"
          v-model="entry"
          name="entry"
          placeholder="What do you want to do?"
        />
        <button class="btn btn-sm btn-primary m-1" @click="addTodo">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "../components/Todo";

export default {
  name: "TodosList",
  components: {
    Todo
  },
  data() {
    return {
      entry: ""
    };
  },
  computed: mapState({
    todos: state => state.todosStore.todos
  }),
  beforeMount() {
    console.log("TodosList:beforeMount()", "Fetching TODOS from server");

    this.$store.dispatch("todosStore/loadTodos");
  },
  methods: {
    deleteTodo(todo) {
      console.log("TodoList:deleteTodo()", todo.id);
      this.$store.dispatch("todosStore/deleteTodo", todo);
    },
    updateTodo(todo) {
      console.log("TodoList:updateTodo()", todo.id);
      this.$store
        .dispatch("todosStore/updateTodo", todo)
        .then(todoModified => {
          console.log("updated", todoModified);
        })
        .catch(err => console.error(err));
    },
    addTodo() {
      console.log("TodoList:addTodo()", this.entry);
      if (this.entry.length) {
        this.$store.dispatch("todosStore/addTodo", { text: this.entry });
      }
    }
  }
}
</script>