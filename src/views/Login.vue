<template>
  <div class="m-2 p-2 bg-white rounded-3">
    <div class="login-form p-2">
      <form action>
        <div class="erros" v-for="(error, index) of errors" v-bind:key="index">
          <div class="alert alert-danger">{{error}}</div>
        </div>
        <h2>Login</h2>
        <input
          class="form-control m-2"
          type="email"
          name="email"
          v-model="fields.email"
          id="email"
          placeholder="user@example.com"
        />
        <input
          class="form-control m-2"
          type="password"
          name="password"
          v-model="fields.password"
          placeholder="password"
        />
      </form>
    </div>
    <div class="form-options text-center">
      <button class="btn btn-primary w-100 my-1" @click="login">Login</button>
      <br />
      <a href="/register">I dont have account</a>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  name: "Login",
  data() {
    return {
      fields: {
        email: "",
        password: ""
      },
      errors: []
    };
  },
  methods: {
    login() {
      console.log("Logining in .. .")
      console.log(this.fields.email, this.fields.password)
      api.login(this.fields.email, this.fields.password).then(res => {
        if (res.token) console.log("Logged in successfully")
      })
    }
  }
};
</script>

<style>
</style>