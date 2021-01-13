// TODO: display created time, and smth like (15 minutes ago)
<template>
  <div class="todo p-2" v-bind:class="computedClass">
    <div class="row">
      <div class="col-1">
        <input class="mx-1" type="checkbox" name="done" id="done" v-model="todo.done" @change="$emit('update', todo)"/>
      </div>
      <div class="col-9">
        <span>{{todo.text}}</span>
      </div>
      <div class="col-2">
        <div class="options">
          <div class="btn btn-sm btn-danger mx-1" @click="$emit('delete', todo)">X</div>
        </div>
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
        "bg-white": this.todo.done == false,
        "bg-success": this.todo.done == true
      };
    }
  }
};
</script>
<style lang="css" scoped>
input[type="checkbox"] {
  width: 23px;
  height: 23px;
}

.options {
    text-align: right;
}
</style>