<template>
  <div class="m-2 p-2 bg-white rounded-3">
    <div class="login-form p-2">
      <div class="alert alert-danger" v-show="error">{{error}}</div>
      <form action>
        <h2>Login</h2>
        <input
          class="form-control my-1"
          type="email"
          name="email"
          v-model="fields.email"
          id="email"
          placeholder="user@example.com"
        />
        <input
          class="form-control"
          type="password"
          name="password"
          v-model="fields.password"
          placeholder="password"
        />

        <div class="form-options text-center">
          <button type="submit" class="btn btn-primary w-100 my-1" @click.prevent="login">Login</button>
          <br />
          <router-link to="/signup">I don't have account</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "Login",
  data() {
    return {
      fields: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    login() {
      console.log("Login: lgoin()");
      api
        .postLogin(this.fields.email, this.fields.password)
        .then(res => {
          if (res.token) {
            console.log("login() - Token retrived", res.token);
            this.$store.commit("authStore/loginSuccess", res);
            this.$router.push({ name: "home" });
          }
        })
        .catch(error => {
          this.error = error.error;
        });
    }
  }
};
</script>

<style>
</style>