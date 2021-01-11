<template>
  <div class="m-2 p-2 bg-white rounded-3">
    <div class="login-form p-2">
      <div class="alert alert-danger" v-show="error">{{error}}</div>
      <form action>
        <h2>Signup</h2>
        <input
          class="form-control m-2"
          name="username"
          v-model="fields.username"
          id="username"
          placeholder="username"
        />
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
      <button class="btn btn-primary w-100 my-1" @click="signup">Signup</button>
      <br />
      <router-link to="/login">I already have account</router-link>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data() {
    return {
      fields: {
        username: "",
        email: "",
        password: ""
      },
      error: ''
    };
  },
  methods: {
    signup() {
      console.log("COMP:Signup - signup()")
      api.postSignup(this.fields).then(res => {
        console.log("API-RESP", res)
        this.$router.push('./login')        
      })

    }
  }
};
</script>

<style>
</style>