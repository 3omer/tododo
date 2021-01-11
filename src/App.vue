<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-light border-bottom">
        <div class="container">
          <a class="navbar-brand" href="/">TODOFITY</a>
          <button
            class="navbar-toggler d-sm-block d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navSidebar"
            aria-controls="navSidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
    <main>
      <div class="container-fluid vh-100">
        <div class="row">
          <div class="d-none d-md-block vh-100 col-md-3 mx-0 border border-top-0">
            <!-- nav menu -->
            <div class="list-group list-group-flush" id="navSidebar">
              <router-link class="list-group-item list-group-item-action" to="/">Home</router-link>
              <router-link class="list-group-item list-group-item-action" to="/login">login</router-link>
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
    <footer></footer>
  </div>
</template>