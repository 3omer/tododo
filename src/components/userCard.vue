<template>
<div>
  <div v-if="user" class="d-flex d-md-block m-1 p-1 align-items-center">
    <div class="avatar">
      <img class="img-fluid" :src="avatarSrc" alt="user avatar" width="60px" />
    </div>
    <div class="user-details p-1">
      <span>{{user.username}}</span>
      <br />
      <span class="small text-muted">{{user.email}}</span>
    </div>
    <div class="mx-auto">
      <btnLogout class="btn btn-secondary" />
    </div>
  </div>
  <div class="text-center m-1" v-else>
    <router-link to="/login" class="btn btn-primary w-75">Login</router-link>
  </div>
</div>
</template>

<script>
import avatarDefault from "../assets/avatar_ph.png";
import { mapState } from "vuex";
import btnLogout from "./btnLogout";
export default {
  name: "UserCard",
  computed: {
    avatarSrc() {
      return this.user.avatar || avatarDefault;
    },
    ...mapState({
      user: state => state.authStore.user
    })
  },
  components: {
    btnLogout
  }
};
</script>

<style>
</style>