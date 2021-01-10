// TODO: display created time, and smth like (15 minutes ago)
<template>
  <div class="todo p-2 m-1 rounded-1" v-bind:class="computedClass">
      {{todo.text}}
      <div class="todo-optionos-container">
          <div class="btn btn-sm btn-danger" @click="$emit('delete', todo)">DELETE</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Todo',
    props: {
        todo: Object
    },
    computed: {
        computedClass() {
            return {
                'bg-white': this.todo.done == false,
                'bg-success': this.todo.done == true
            }
        }
    }
}
</script>