<template>
  <button @click="$store.dispatch('authStore/logout')">
      Logout
  </button>
</template>

<script>
export default {
    name: 'btnLogout',
}
</script>

<style>

</style>