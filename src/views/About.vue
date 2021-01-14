<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="todo d-flex rounded-3 bg-white justify-content-between">
      <div class="d-flex">
        <div class="checkbox rounded-0 rounded-start bg-warning p-1">
          <input class="form-check-input m-0 border-0 rounded-circle"  />
        </div>
        <div class="content mx-1 p-2">{{todo.text}}</div>
      </div>
      <div class="remove">
        <button class="btn btn-danger rounded-0 rounded-end" @click="$emit('delete', todo)">X</button>
      </div>
    </div>


        <div class="row">
      <div class="col-1">
        <input class="mx-1" type="checkbox" name="done" id="done" v-model="todo.done" @change="$emit('update', todo)"/>
      </div>
      <div class="col-9">
        <span>{{todo.text}}</span>
      </div>
      <div class="col-2">
        <div class="options">
          <button class="btn btn-sm btn-danger mx-1" @click="$emit('delete', todo)">X</button>
        </div>
      </div>
    </div>
  </div>
</template>
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



/* old */
/* input[type="checkbox"] {
  width: 100%;
  height: 100%;
}

.options {
    text-align: right;
} */

</style>
