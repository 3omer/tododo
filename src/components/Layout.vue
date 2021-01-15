<template>
  <div>
    <header>
      <nav class="navbar navbar-light border-bottom">
        <div class="container">
          <a class="navbar-brand" href="/">TODODO</a>
          <button
            class="navbar-toggler d-sm-block d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navCollapse"
            aria-controls="navCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div class="collapse d-md-none list-group list-group-flush my-2" id="navCollapse">
        <userCard class="d-md-none" />
        <hr>
        <router-link class="list-group-item list-group-item-action" to="/">Home</router-link>
        <router-link class="list-group-item list-group-item-action" to="/todos">Todos</router-link>
        <router-link class="list-group-item list-group-item-action" to="/about">About</router-link>
      </div>
    </header>
    <main>
      <div class="container-fluid vh-100">
        <div class="row">
          <div class="d-none d-md-block vh-100 col-md-3 mx-0 px-0 border border-top-0">
            <!-- nav menu -->
            <div class="user-card">
              <userCard class="text-center" />
              <hr>
            </div>
            <div class="list-group mx-0 list-group-flush">
              <router-link class="list-group-item list-group-item-action" to="/">Home</router-link>
              <router-link class="list-group-item list-group-item-action" to="/todos">Todos</router-link>
              <router-link class="list-group-item list-group-item-action" to="/about">About</router-link>
            </div>
          </div>
          <!-- content -->
          <div class="col-sm-12 col-md-9 bg-light vh-100">
            <div class="content p-2">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="p-2 bg-secondary">
        <span class="small">Copy Rights 2021</span>
      </div>
    </footer>
  </div>
</template>

<script>
import userCard from "./userCard";
export default {
  name: "Layout",
  components: {
    userCard
  }
};
</script>
