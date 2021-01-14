// TODO: display created time, and smth like (15 minutes ago)
<template>
  <div class="todo my-2" v-bind:class="computedClass">
    <div class="todo d-flex rounded-3 bg-white justify-content-between">
      <div class="d-flex">
        <div class="checkbox rounded-0 rounded-start bg-warning p-1">
          <input
            class="form-check-input m-0 border-0 rounded-circle"
            type="checkbox"
            name="done"
            id="done"
            v-model="todo.done"
            @change.prevent="$emit('update', todo)"
          />
        </div>
        <div class="content mx-1 p-2">{{todo.text}}</div>
      </div>
      <div class="remove">
        <button class="btn btn-danger rounded-0 rounded-end" @click="$emit('delete', todo)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object
  },
  computed: {
    computedClass() {
      return {
        "bg-white done": this.todo.done == true
      };
    }
  },
  methods: {
      handleClick () {
          console.log(this.todo);
          this.todo.done = !this.todo.done
          this.$store.dispatch('todosStore/updateTodo', this.todo)
      }
  }
};
</script>
<style lang="css" scoped>
.checkbox,
.btn {
  min-width: 30px;
  min-height: 30px;
  height: 100%;
}
input {
  width: 100%;
  height: 100%;
}
input:checked {
  background-color: #198754 !important;
}

.done .checkbox {
  background-color: #198754 !important;
}
</style>