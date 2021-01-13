<template>
  <div v-if="user" class="card">
      <span>{{user.username}}</span>
      <span>{{user.email}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'UserCard',
    computed: mapState({
        user: state => state.authStore.user
    }),  
}
</script>

<style>

</style>